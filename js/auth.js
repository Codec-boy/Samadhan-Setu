/**
 * Admin Authentication Module for SamadhanSetu
 */
import { apiRequest } from './api.js';
import { showToast, openModal, closeModal } from './ui.js';

let activeAdmin = null;

export async function checkAdminSession() {
    try {
        const res = await apiRequest('/api/auth/me/');
        if (res.authenticated && res.user && (res.user.is_staff || res.user.is_superuser)) {
            activeAdmin = res.user;
            updateAuthUI();
            return true;
        }
    } catch (e) {
        // Not authenticated
    }
    activeAdmin = null;
    updateAuthUI();
    return false;
}

export async function adminLogin(username, password) {
    try {
        const res = await apiRequest('/api/auth/login/', 'POST', { username, password });
        if (res.success && res.user) {
            activeAdmin = res.user;
            updateAuthUI();
            showToast(`Welcome back, ${res.user.username}!`, 'success');
            closeModal('admin-login-modal');
            window.location.hash = '#admin';
            return true;
        }
    } catch (err) {
        const msg = err.data?.error || 'Invalid admin credentials.';
        showToast(msg, 'error');
    }
    return false;
}

export async function adminLogout() {
    try {
        await apiRequest('/api/auth/logout/', 'POST');
        showToast('Logged out successfully', 'info');
    } catch (e) {
        // Logout request error
    }
    activeAdmin = null;
    updateAuthUI();
    window.location.hash = '#home';
}

export function getActiveAdmin() {
    return activeAdmin;
}

function updateAuthUI() {
    const adminLoginBtn = document.getElementById('admin-login-btn');
    const adminDashboardBtn = document.getElementById('admin-dashboard-btn');
    const adminLogoutBtn = document.getElementById('admin-logout-btn');

    if (activeAdmin) {
        if (adminLoginBtn) adminLoginBtn.style.display = 'none';
        if (adminDashboardBtn) adminDashboardBtn.style.display = 'inline-block';
        if (adminLogoutBtn) adminLogoutBtn.style.display = 'inline-block';
    } else {
        if (adminLoginBtn) adminLoginBtn.style.display = 'inline-block';
        if (adminDashboardBtn) adminDashboardBtn.style.display = 'none';
        if (adminLogoutBtn) adminLogoutBtn.style.display = 'none';
    }
}
