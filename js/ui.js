/**
 * UI Utilities and Components for SamadhanSetu
 */

export function showToast(message, type = 'info') {
    const toast = document.getElementById('toast');
    const toastMsg = document.getElementById('toast-message');

    if (!toast || !toastMsg) return;

    toastMsg.textContent = message;
    toast.className = `toast show ${type}`;

    setTimeout(() => {
        toast.className = 'toast';
    }, 4000);
}

export function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'flex';
        modal.setAttribute('aria-hidden', 'false');
    }
}

export function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
        modal.setAttribute('aria-hidden', 'true');
    }
}

export function formatStatusBadge(status) {
    const s = (status || 'submitted').toLowerCase();
    let badgeClass = 'badge-pending';

    if (['resolved', 'completed'].includes(s)) badgeClass = 'badge-resolved';
    else if (['in-progress', 'dispatched'].includes(s)) badgeClass = 'badge-progress';
    else if (['rejected', 'escalated'].includes(s)) badgeClass = 'badge-rejected';

    const text = s.replace('-', ' ').toUpperCase();
    return `<span class="badge ${badgeClass}">${text}</span>`;
}

export function formatDate(isoStr) {
    if (!isoStr) return 'N/A';
    try {
        const d = new Date(isoStr);
        return d.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
    } catch (e) {
        return isoStr;
    }
}
