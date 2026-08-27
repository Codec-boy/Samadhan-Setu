/**
 * Community Reviews Module for SamadhanSetu (SQLite Backend Persisted)
 */
import { apiRequest } from './api.js';
import { showToast, formatDate } from './ui.js';

export async function loadReviews() {
    const listContainer = document.getElementById('reviews-list');
    if (!listContainer) return;

    try {
        const reviews = await apiRequest('/api/issues/reviews/');
        renderReviews(reviews);
    } catch (err) {
        console.error('Failed to load reviews:', err);
    }
}

export function initReviewForm() {
    const form = document.getElementById('review-form');
    if (form) {
        form.addEventListener('submit', handleReviewSubmit);
    }
}

function renderReviews(reviews) {
    const container = document.getElementById('reviews-list');
    if (!container) return;

    if (!reviews || !reviews.length) {
        container.innerHTML = `
            <div style="text-align: center; padding: 2rem; color: var(--text-muted);">
                No community reviews yet. Be the first to share your experience!
            </div>
        `;
        return;
    }

    container.innerHTML = reviews.map(r => `
        <div class="review-card" style="background: var(--bg-card); padding: 1.25rem; border-radius: var(--radius-lg); border: 1px solid var(--border-color); margin-bottom: 1rem;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                <h4 style="margin: 0; font-size: 1.05rem;">${r.authorName || 'Citizen'}</h4>
                <div style="color: #ffb703; font-size: 1rem;">${'⭐'.repeat(r.rating || 5)}</div>
            </div>
            <p style="color: var(--text-secondary); font-size: 0.95rem; margin-bottom: 0.5rem; line-height: 1.5;">${r.review}</p>
            <span style="font-size: 0.8rem; color: var(--text-muted);">${formatDate(r.createdAt)}</span>
        </div>
    `).join('');
}

async function handleReviewSubmit(e) {
    e.preventDefault();

    const name = (document.getElementById('review-author')?.value || 'Citizen').trim();
    const rating = parseInt(document.getElementById('review-rating')?.value || '5', 10);
    const text = (document.getElementById('review-text')?.value || '').trim();

    if (!text) {
        return showToast('Please enter your review text.', 'error');
    }

    try {
        await apiRequest('/api/issues/reviews/', 'POST', {
            name,
            rating,
            text
        });

        showToast('Review submitted successfully!', 'success');
        e.target.reset();
        loadReviews();
    } catch (err) {
        showToast(err.data?.error || 'Failed to submit review.', 'error');
    }
}
