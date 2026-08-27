/**
 * Central API Client for SamadhanSetu
 */

function getCsrfToken() {
    const name = 'csrftoken=';
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i].trim();
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return '';
}

export async function apiRequest(endpoint, method = 'GET', data = null) {
    const headers = {
        'Accept': 'application/json',
    };

    const csrfToken = getCsrfToken();
    if (csrfToken) {
        headers['X-CSRFToken'] = csrfToken;
    }

    const options = {
        method,
        headers,
        credentials: 'same-origin',
    };

    if (data) {
        headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    try {
        const response = await fetch(endpoint, options);
        let result;
        try {
            result = await response.json();
        } catch (e) {
            result = { error: `Server error (${response.status})` };
        }

        if (!response.ok) {
            const err = new Error(result.error || `HTTP ${response.status}`);
            err.status = response.status;
            err.data = result;
            throw err;
        }

        return result;
    } catch (error) {
        console.error(`API Error [${method} ${endpoint}]:`, error);
        throw error;
    }
}
