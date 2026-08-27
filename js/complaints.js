/**
 * Citizen Complaint Submission Module for SamadhanSetu
 */
import { apiRequest } from './api.js';
import { showToast } from './ui.js';

const MAX_IMAGES = 5;
const MAX_IMAGE_SIZE_BYTES = 10 * 1024 * 1024; // 10 MB

let selectedImageFiles = []; // Array of Base64 strings

export function initComplaintForm() {
    const fileInput = document.getElementById('issue-image');
    const uploadContainer = document.querySelector('.upload-container');

    if (fileInput) {
        // Enable multiple file selection
        fileInput.setAttribute('multiple', 'true');
        fileInput.addEventListener('change', handleImageSelection);
    }

    const form = document.getElementById('issue-form');
    if (form) {
        form.addEventListener('submit', handleComplaintSubmit);
    }

    renderImagePreviews();
}

function handleImageSelection(e) {
    const files = Array.from(e.target.files);

    if (!files.length) return;

    if (selectedImageFiles.length + files.length > MAX_IMAGES) {
        showToast(`You can upload a maximum of 5 images per complaint.`, 'error');
        e.target.value = '';
        return;
    }

    for (const file of files) {
        if (file.size > MAX_IMAGE_SIZE_BYTES) {
            showToast(`"${file.name}" is larger than 10 MB. Please choose a smaller image.`, 'error');
            continue;
        }

        const reader = new FileReader();
        reader.onload = (event) => {
            selectedImageFiles.push({
                name: file.name,
                data: event.target.result
            });
            renderImagePreviews();
        };
        reader.readAsDataURL(file);
    }

    e.target.value = ''; // Reset input for repeated additions
}

function removeImage(index) {
    selectedImageFiles.splice(index, 1);
    renderImagePreviews();
}

function renderImagePreviews() {
    let container = document.getElementById('multi-image-previews');
    if (!container) {
        const previewParent = document.querySelector('.image-preview-container') || document.querySelector('.upload-container');
        if (!previewParent) return;

        container = document.createElement('div');
        container.id = 'multi-image-previews';
        container.className = 'multi-image-previews';
        previewParent.appendChild(container);
    }

    container.innerHTML = `
        <div class="image-count-indicator" style="margin-top: 0.5rem; font-size: 0.9rem; color: var(--text-secondary);">
            ${selectedImageFiles.length} / ${MAX_IMAGES} images selected (Max 10 MB each)
        </div>
        <div class="preview-grid" style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-top: 0.5rem;">
            ${selectedImageFiles.map((fileObj, idx) => `
                <div class="preview-thumb" style="position: relative; width: 80px; height: 80px; border-radius: 6px; overflow: hidden; border: 1px solid var(--border-color);">
                    <img src="${fileObj.data}" alt="Preview ${idx + 1}" style="width: 100%; height: 100%; object-fit: cover;">
                    <button type="button" class="remove-img-btn" data-index="${idx}" style="position: absolute; top: 2px; right: 2px; background: rgba(0,0,0,0.7); color: white; border: none; border-radius: 50%; width: 20px; height: 20px; font-size: 12px; cursor: pointer; display: flex; align-items: center; justify-content: center;">&times;</button>
                </div>
            `).join('')}
        </div>
    `;

    container.querySelectorAll('.remove-img-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const idx = parseInt(btn.getAttribute('data-index'), 10);
            removeImage(idx);
        });
    });
}

async function handleComplaintSubmit(e) {
    e.preventDefault();

    const name = (document.getElementById('citizen-name')?.value || '').trim();
    const phone = (document.getElementById('citizen-phone')?.value || '').trim();
    const title = (document.getElementById('issue-title')?.value || '').trim();
    const description = (document.getElementById('issue-description')?.value || '').trim();
    const category = document.getElementById('issue-category')?.value || 'other';

    // Address fields concatenation
    const houseNumber = document.getElementById('house-number')?.value || '';
    const streetName = document.getElementById('street-name')?.value || '';
    const villageName = document.getElementById('village-name')?.value || '';
    const mandal = document.getElementById('mandal')?.value || '';
    const district = document.getElementById('district')?.value || '';
    const pincode = document.getElementById('pincode')?.value || '';
    const mapLocation = document.getElementById('issue-location')?.value || '';

    const fullLocation = [houseNumber, streetName, villageName, mandal, district, pincode, mapLocation].filter(Boolean).join(', ');

    const latVal = parseFloat(document.getElementById('issue-lat')?.value);
    const lngVal = parseFloat(document.getElementById('issue-lng')?.value);

    if (!name) return showToast('Full Name is required', 'error');
    if (!phone) return showToast('Mobile Phone Number is required', 'error');
    if (!title) return showToast('Issue Title is required', 'error');

    if (selectedImageFiles.length > MAX_IMAGES) {
        return showToast('You can upload a maximum of 5 images per complaint.', 'error');
    }

    const payload = {
        name,
        phone,
        title,
        description,
        category,
        location: fullLocation,
        lat: isNaN(latVal) ? null : latVal,
        lng: isNaN(lngVal) ? null : lngVal,
        images: selectedImageFiles.map(img => img.data),
    };

    try {
        const res = await apiRequest('/api/issues/submit/', 'POST', payload);
        if (res.issueId) {
            showToast('Complaint submitted successfully!', 'success');

            // Reset form
            e.target.reset();
            selectedImageFiles = [];
            renderImagePreviews();

            // Display success modal/section
            const formContainer = document.getElementById('issue-form');
            const successContainer = document.getElementById('submit-success');
            const trackIdSpan = document.getElementById('submitted-issue-id');

            if (formContainer) formContainer.style.display = 'none';
            if (trackIdSpan) trackIdSpan.textContent = res.issueId;
            if (successContainer) successContainer.style.display = 'block';

            // Scroll to success banner
            successContainer.scrollIntoView({ behavior: 'smooth' });
        }
    } catch (err) {
        const errorMsg = err.data?.error || 'Failed to submit complaint. Please check fields.';
        showToast(errorMsg, 'error');
    }
}
