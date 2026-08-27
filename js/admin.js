/**
 * Admin Dashboard Module for SamadhanSetu
 */
import { apiRequest } from './api.js';
import { showToast, formatStatusBadge, formatDate } from './ui.js';

let adminIssues = [];

export async function loadAdminDashboard() {
    const listContainer = document.getElementById('admin-issues-list');
    if (!listContainer) return;

    try {
        adminIssues = await apiRequest('/api/issues/all/');
        renderAdminStats(adminIssues);
        renderAdminIssues(adminIssues);
    } catch (err) {
        if (err.status === 401 || err.status === 403) {
            showToast('Admin authentication required.', 'error');
            window.location.hash = '#admin-login';
        } else {
            showToast('Failed to load admin complaints.', 'error');
        }
    }
}

export function initAdminFilters() {
    const searchInp = document.getElementById('admin-search-input');
    const statusSelect = document.getElementById('admin-filter-status');
    const refreshBtn = document.getElementById('admin-refresh-btn');

    if (searchInp) {
        searchInp.addEventListener('input', filterAdminIssues);
    }
    if (statusSelect) {
        statusSelect.addEventListener('change', filterAdminIssues);
    }
    if (refreshBtn) {
        refreshBtn.addEventListener('click', loadAdminDashboard);
    }
}

function filterAdminIssues() {
    const query = (document.getElementById('admin-search-input')?.value || '').toLowerCase().trim();
    const statusFilter = document.getElementById('admin-filter-status')?.value || '';

    let filtered = adminIssues.filter(issue => {
        const matchesQuery = !query || 
            (issue.id || '').toLowerCase().includes(query) || 
            (issue.title || '').toLowerCase().includes(query) ||
            (issue.citizenName || '').toLowerCase().includes(query) ||
            (issue.citizenPhone || '').includes(query);

        const matchesStatus = !statusFilter || issue.status === statusFilter;

        return matchesQuery && matchesStatus;
    });

    renderAdminIssues(filtered);
}

function renderAdminStats(issues) {
    const totalEl = document.getElementById('admin-total-issues');
    const pendingEl = document.getElementById('admin-pending-issues');
    const progressEl = document.getElementById('admin-progress-issues');
    const resolvedEl = document.getElementById('admin-resolved-issues');

    if (!totalEl) return;

    const total = issues.length;
    const pending = issues.filter(i => ['submitted', 'pending'].includes(i.status)).length;
    const progress = issues.filter(i => ['dispatched', 'in-progress', 'otp-verification'].includes(i.status)).length;
    const resolved = issues.filter(i => i.status === 'resolved').length;

    totalEl.textContent = total;
    if (pendingEl) pendingEl.textContent = pending;
    if (progressEl) progressEl.textContent = progress;
    if (resolvedEl) resolvedEl.textContent = resolved;
}

function renderAdminIssues(issues) {
    const container = document.getElementById('admin-issues-list');
    if (!container) return;

    if (!issues || !issues.length) {
        container.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 2rem; background: var(--bg-card); border-radius: var(--radius-lg); color: var(--text-muted);">
                No complaints found matching criteria.
            </div>
        `;
        return;
    }

    container.innerHTML = issues.map(issue => `
        <div class="issue-card" style="background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius-lg); padding: 1.25rem; display: flex; flex-direction: column; justify-content: space-between;">
            <div>
                <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.5rem;">
                    <span style="font-family: monospace; font-size: 0.85rem; color: var(--primary-color); font-weight: 700;">${issue.id}</span>
                    ${formatStatusBadge(issue.status)}
                </div>

                <h3 style="font-size: 1.1rem; margin-bottom: 0.5rem; color: var(--text-primary);">${issue.title}</h3>
                
                <div style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 0.75rem; background: var(--bg-tertiary); padding: 0.5rem 0.75rem; border-radius: var(--radius-sm);">
                    <div>👤 <strong>Citizen:</strong> ${issue.citizenName || 'Anonymous'}</div>
                    <div>📞 <strong>Phone:</strong> ${issue.citizenPhone ? `<a href="tel:${issue.citizenPhone}">${issue.citizenPhone}</a>` : 'Not provided'}</div>
                    <div>📍 <strong>Location:</strong> ${issue.location || 'N/A'}</div>
                    <div>📅 <strong>Submitted:</strong> ${formatDate(issue.createdAt)}</div>
                </div>

                ${issue.description ? `<p style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 0.75rem;">${issue.description}</p>` : ''}
                
                ${renderEvidenceThumbs(issue.images || (issue.image ? [issue.image] : []))}
            </div>

            <div style="margin-top: 1rem; padding-top: 0.75rem; border-top: 1px solid var(--border-color); display: flex; gap: 0.5rem; justify-content: space-between; align-items: center;">
                <select class="admin-status-select" data-id="${issue.id}" style="padding: 0.35rem 0.5rem; font-size: 0.85rem; border-radius: 4px;">
                    <option value="submitted" ${issue.status === 'submitted' ? 'selected' : ''}>Submitted</option>
                    <option value="pending" ${issue.status === 'pending' ? 'selected' : ''}>Pending</option>
                    <option value="dispatched" ${issue.status === 'dispatched' ? 'selected' : ''}>Dispatched</option>
                    <option value="in-progress" ${issue.status === 'in-progress' ? 'selected' : ''}>In Progress</option>
                    <option value="resolved" ${issue.status === 'resolved' ? 'selected' : ''}>Resolved</option>
                    <option value="rejected" ${issue.status === 'rejected' ? 'selected' : ''}>Rejected</option>
                </select>

                <button type="button" class="btn btn-outline btn-sm admin-delete-btn" data-id="${issue.id}" style="color: var(--error-color); border-color: var(--error-color);">🗑️ Delete</button>
            </div>
        </div>
    `).join('');

    // Attach status change listeners
    container.querySelectorAll('.admin-status-select').forEach(select => {
        select.addEventListener('change', async (e) => {
            const issueId = select.getAttribute('data-id');
            const newStatus = select.value;
            await updateComplaintStatus(issueId, newStatus);
        });
    });

    // Attach delete listeners
    container.querySelectorAll('.admin-delete-btn').forEach(btn => {
        btn.addEventListener('click', async () => {
            const issueId = btn.getAttribute('data-id');
            if (confirm(`Are you sure you want to delete complaint ${issueId}?`)) {
                await deleteComplaint(issueId);
            }
        });
    });
}

function renderEvidenceThumbs(images) {
    if (!images || !images.length) return '';
    return `
        <div style="display: flex; gap: 0.4rem; overflow-x: auto; padding-bottom: 0.25rem; margin-bottom: 0.5rem;">
            ${images.map(url => `
                <a href="${url}" target="_blank" rel="noopener noreferrer">
                    <img src="${url}" alt="Evidence" style="width: 50px; height: 50px; object-fit: cover; border-radius: 4px; border: 1px solid var(--border-color);">
                </a>
            `).join('')}
        </div>
    `;
}

async function updateComplaintStatus(issueId, newStatus) {
    try {
        await apiRequest(`/api/issues/${encodeURIComponent(issueId)}/status/`, 'PATCH', { status: newStatus });
        showToast(`Status updated to ${newStatus}`, 'success');
        loadAdminDashboard();
    } catch (err) {
        showToast(err.data?.error || 'Failed to update status', 'error');
    }
}

async function deleteComplaint(issueId) {
    try {
        await apiRequest(`/api/issues/${encodeURIComponent(issueId)}/delete/`, 'DELETE');
        showToast(`Complaint ${issueId} deleted`, 'info');
        loadAdminDashboard();
    } catch (err) {
        showToast(err.data?.error || 'Failed to delete complaint', 'error');
    }
}
