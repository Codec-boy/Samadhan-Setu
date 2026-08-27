/**
 * SamadhanSetu - Main Application Entry Point
 */
import { checkAdminSession, adminLogin, adminLogout } from './auth.js';
import { initComplaintForm } from './complaints.js';
import { initTracking } from './tracking.js';
import { loadAdminDashboard, initAdminFilters } from './admin.js';
import { initMap, searchLocation } from './map.js';
import { loadReviews, initReviewForm } from './reviews.js';
import { loadWorkers, initWorkerEvents } from './workers.js';
import { setLanguage } from './i18n.js';
import { showToast, openModal, closeModal } from './ui.js';
import { apiRequest } from './api.js';

document.addEventListener('DOMContentLoaded', async () => {
    // 1. Check active admin session
    await checkAdminSession();

    // 2. Initialize Core Modules
    initComplaintForm();
    initTracking();
    initAdminFilters();
    initReviewForm();
    initWorkerEvents();

    // 3. Navigation & Hash Router
    window.addEventListener('hashchange', handleNavigation);
    handleNavigation(); // Handle initial URL hash

    // 4. Language Selector
    const langSelect = document.getElementById('language-select');
    if (langSelect) {
        langSelect.addEventListener('change', (e) => {
            setLanguage(e.target.value);
        });
    }

    // 5. Admin Login Form Listener
    const adminLoginForm = document.getElementById('admin-login-form');
    if (adminLoginForm) {
        adminLoginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const username = (document.getElementById('admin-username')?.value || '').trim();
            const password = document.getElementById('admin-password')?.value || '';
            if (username && password) {
                await adminLogin(username, password);
            } else {
                showToast('Please enter admin username and password', 'error');
            }
        });
    }

    // Admin Logout Button Listener
    const logoutBtn = document.getElementById('admin-logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', adminLogout);
    }

    // Location search button
    const searchLocationBtn = document.getElementById('search-location-btn');
    if (searchLocationBtn) {
        searchLocationBtn.addEventListener('click', () => {
            const query = document.getElementById('issue-location')?.value;
            if (query) searchLocation(query);
        });
    }

    // Modal Close Buttons
    document.querySelectorAll('.modal-close').forEach(btn => {
        btn.addEventListener('click', () => {
            closeModal('admin-login-modal');
            closeModal('worker-register-modal');
            closeModal('issue-modal');
        });
    });

    // Home Stats Hydration
    hydrateHomeStats();
});

function handleNavigation() {
    const hash = window.location.hash || '#home';
    const targetPage = hash.substring(1);

    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });

    const activePage = document.getElementById(targetPage);
    if (activePage) {
        activePage.classList.add('active');
    } else if (targetPage === 'admin-login') {
        openModal('admin-login-modal');
        document.getElementById('home')?.classList.add('active');
    } else {
        document.getElementById('home')?.classList.add('active');
    }

    // Update active navbar links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${targetPage}`) {
            link.classList.add('active');
        }
    });

    // Page Specific Lazy Loaders
    if (targetPage === 'admin') {
        loadAdminDashboard();
    } else if (targetPage === 'submit') {
        // Show form if previously submitted
        const formContainer = document.getElementById('issue-form');
        const successContainer = document.getElementById('submit-success');
        if (formContainer) formContainer.style.display = 'block';
        if (successContainer) successContainer.style.display = 'none';
        initMap();
    } else if (targetPage === 'reviews') {
        loadReviews();
    } else if (targetPage === 'workers') {
        loadWorkers();
    } else if (targetPage === 'home') {
        hydrateHomeStats();
    }
}

async function hydrateHomeStats() {
    try {
        const stats = await apiRequest('/api/issues/stats/');
        if (stats) {
            const totalEl = document.getElementById('total-issues');
            const openEl = document.getElementById('open-issues');
            const resolvedEl = document.getElementById('resolved-issues');
            if (totalEl) totalEl.textContent = stats.total || 0;
            if (openEl) openEl.textContent = stats.open || 0;
            if (resolvedEl) resolvedEl.textContent = stats.resolved || 0;
        }
    } catch (e) {
        // Stats fallback
    }
}
