/**
 * Private Workers Module for SamadhanSetu (SQLite Backend Persisted)
 */
import { apiRequest } from './api.js';
import { showToast, openModal, closeModal } from './ui.js';

let workersData = [];

export async function loadWorkers() {
    const roleFilter = document.getElementById('filter-job-role')?.value || '';
    const sortFilter = document.getElementById('sort-workers')?.value || 'rating';

    try {
        const queryParams = new URLSearchParams();
        if (roleFilter) queryParams.append('role', roleFilter);
        if (sortFilter) queryParams.append('sort', sortFilter);

        workersData = await apiRequest(`/api/issues/workers/?${queryParams.toString()}`);
        renderWorkers(workersData);
    } catch (err) {
        console.error('Failed to load workers:', err);
    }
}

export function initWorkerEvents() {
    const roleSelect = document.getElementById('filter-job-role');
    const sortSelect = document.getElementById('sort-workers');
    const registerBtn = document.getElementById('open-worker-register-btn');
    const form = document.getElementById('worker-register-form');

    if (roleSelect) roleSelect.addEventListener('change', loadWorkers);
    if (sortSelect) sortSelect.addEventListener('change', loadWorkers);
    if (registerBtn) registerBtn.addEventListener('click', () => openModal('worker-register-modal'));

    if (form) {
        form.addEventListener('submit', handleWorkerRegister);
    }
}

function renderWorkers(workers) {
    const container = document.getElementById('workers-list');
    if (!container) return;

    if (!workers || !workers.length) {
        container.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 3rem; background: var(--bg-card); border-radius: var(--radius-lg); color: var(--text-muted);">
                No registered workers found for the selected category.
            </div>
        `;
        return;
    }

    container.innerHTML = workers.map(w => `
        <div class="worker-card" style="background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius-lg); padding: 1.25rem; display: flex; flex-direction: column; justify-content: space-between;">
            <div>
                <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.5rem;">
                    <div>
                        <h3 style="margin: 0; font-size: 1.1rem; color: var(--text-primary);">${w.name}</h3>
                        <span style="font-size: 0.85rem; color: var(--primary-color); font-weight: 600; text-transform: capitalize;">🔧 ${w.jobRole.replace('_', ' ')}</span>
                    </div>
                    <div style="background: var(--bg-tertiary); padding: 0.25rem 0.5rem; border-radius: 4px; font-weight: bold; font-size: 0.9rem; color: #ffb703;">⭐ ${w.rating.toFixed(1)}</div>
                </div>

                <div style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 1rem; line-height: 1.6;">
                    <div>📞 <strong>Contact:</strong> <a href="tel:${w.phone}">${w.phone}</a></div>
                    <div>💼 <strong>Experience:</strong> ${w.experience} years</div>
                    <div>✅ <strong>Completed Jobs:</strong> ${w.completedJobs}</div>
                    ${w.address ? `<div>📍 <strong>Area:</strong> ${w.address}</div>` : ''}
                </div>
            </div>

            <a href="tel:${w.phone}" class="btn btn-primary btn-block btn-sm" style="text-align: center;">📞 Hire / Call Worker</a>
        </div>
    `).join('');
}

async function handleWorkerRegister(e) {
    e.preventDefault();

    const name = (document.getElementById('worker-name')?.value || '').trim();
    const phone = (document.getElementById('worker-phone')?.value || '').trim();
    const jobRole = document.getElementById('worker-job-role')?.value || '';
    const email = (document.getElementById('worker-email')?.value || '').trim();
    const experience = parseInt(document.getElementById('worker-experience')?.value || '0', 10);
    const address = (document.getElementById('worker-address')?.value || '').trim();

    if (!name || !phone || !jobRole) {
        return showToast('Name, phone number, and job role are required.', 'error');
    }

    try {
        await apiRequest('/api/issues/workers/', 'POST', {
            name,
            phone,
            jobRole,
            email,
            experience,
            address
        });

        showToast('Worker registered successfully!', 'success');
        closeModal('worker-register-modal');
        e.target.reset();
        loadWorkers();
    } catch (err) {
        showToast(err.data?.error || 'Failed to register worker.', 'error');
    }
}
