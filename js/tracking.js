/**
 * Public Complaint Tracking Module for SamadhanSetu
 */
import { apiRequest } from './api.js';
import { showToast, formatStatusBadge, formatDate } from './ui.js';

export function initTracking() {
    const trackBtn = document.getElementById('track-issue-btn');
    const input = document.getElementById('track-issue-id');

    if (trackBtn) {
        trackBtn.addEventListener('click', () => {
            const id = (input?.value || '').trim();
            if (id) trackComplaintById(id);
            else showToast('Please enter a Track ID', 'error');
        });
    }

    if (input) {
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                const id = input.value.trim();
                if (id) trackComplaintById(id);
            }
        });
    }
}

export async function trackComplaintById(issueId) {
    const resultDiv = document.getElementById('track-issue-result');
    if (!resultDiv) return;

    try {
        const res = await apiRequest(`/api/issues/track/${encodeURIComponent(issueId)}/`);

        if (res.found && res.issue) {
            const issue = res.issue;
            resultDiv.style.display = 'block';
            resultDiv.innerHTML = `
                <div class="track-details-card" style="background: var(--bg-card); padding: 1.5rem; border-radius: var(--radius-lg); border: 1px solid var(--border-color); margin-top: 1.5rem;">
                    <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 1rem; margin-bottom: 1rem;">
                        <div>
                            <span style="font-family: monospace; font-size: 0.9rem; color: var(--primary-color); font-weight: 700;">${issue.id}</span>
                            <h3 style="margin: 0.25rem 0; font-size: 1.2rem;">${issue.title}</h3>
                            <span style="font-size: 0.85rem; color: var(--text-muted);">Category: ${issue.category.toUpperCase()}</span>
                        </div>
                        <div>${formatStatusBadge(issue.status)}</div>
                    </div>
                    
                    ${issue.description ? `<p style="color: var(--text-secondary); font-size: 0.95rem; margin-bottom: 1rem;">${issue.description}</p>` : ''}
                    
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 0.75rem; margin-bottom: 1rem; font-size: 0.9rem; color: var(--text-secondary);">
                        <div>📍 <strong>Location:</strong> ${issue.location || 'N/A'}</div>
                        <div>📅 <strong>Submitted:</strong> ${formatDate(issue.createdAt)}</div>
                        <div>🔄 <strong>Last Update:</strong> ${formatDate(issue.updatedAt)}</div>
                    </div>

                    ${renderEvidenceGallery(issue.images || (issue.image ? [issue.image] : []))}
                    
                    ${renderTimeline(issue.status)}
                </div>
            `;
            resultDiv.scrollIntoView({ behavior: 'smooth' });
        } else {
            showToast('Track ID not found.', 'error');
            resultDiv.style.display = 'none';
        }
    } catch (err) {
        showToast(err.data?.error || 'Track ID not found.', 'error');
        resultDiv.style.display = 'none';
    }
}

function renderEvidenceGallery(images) {
    if (!images || !images.length) return '';
    return `
        <div style="margin-top: 1rem; margin-bottom: 1rem;">
            <h4 style="font-size: 0.95rem; margin-bottom: 0.5rem; color: var(--text-primary);">📸 Evidence Photos (${images.length})</h4>
            <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                ${images.map(imgUrl => `
                    <a href="${imgUrl}" target="_blank" rel="noopener noreferrer">
                        <img src="${imgUrl}" alt="Evidence" style="width: 100px; height: 100px; object-fit: cover; border-radius: 6px; border: 1px solid var(--border-color);">
                    </a>
                `).join('')}
            </div>
        </div>
    `;
}

function renderTimeline(currentStatus) {
    const statuses = ['submitted', 'pending', 'dispatched', 'in-progress', 'resolved'];
    const currentIdx = statuses.indexOf((currentStatus || 'submitted').toLowerCase());

    return `
        <div class="timeline" style="margin-top: 1.5rem; display: flex; justify-content: space-between; position: relative;">
            ${statuses.map((st, idx) => {
                const isPassed = idx <= currentIdx && currentStatus !== 'rejected';
                return `
                    <div style="text-align: center; flex: 1; position: relative; z-index: 1;">
                        <div style="width: 24px; height: 24px; border-radius: 50%; background: ${isPassed ? 'var(--primary-color)' : 'var(--bg-tertiary)'}; color: white; display: flex; align-items: center; justify-content: center; margin: 0 auto 0.25rem auto; font-size: 11px; font-weight: bold;">${idx + 1}</div>
                        <span style="font-size: 0.75rem; text-transform: capitalize; color: ${isPassed ? 'var(--text-primary)' : 'var(--text-muted)'};">${st.replace('-', ' ')}</span>
                    </div>
                `;
            }).join('')}
        </div>
    `;
}
