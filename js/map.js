/**
 * Leaflet Map & Geolocation Module for SamadhanSetu
 */

let map = null;
let marker = null;
const DEFAULT_LAT = 17.38504; // Default Hyderabad lat/lng
const DEFAULT_LNG = 78.48667;

export function initMap(containerId = 'map', latInputId = 'issue-lat', lngInputId = 'issue-lng', addressInputId = 'issue-location') {
    const container = document.getElementById(containerId);
    if (!container || map) return;

    map = L.map(containerId).setView([DEFAULT_LAT, DEFAULT_LNG], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    marker = L.marker([DEFAULT_LAT, DEFAULT_LNG], { draggable: true }).addTo(map);

    function updateInputs(lat, lng) {
        const latInp = document.getElementById(latInputId);
        const lngInp = document.getElementById(lngInputId);
        if (latInp) latInp.value = lat.toFixed(6);
        if (lngInp) lngInp.value = lng.toFixed(6);
    }

    updateInputs(DEFAULT_LAT, DEFAULT_LNG);

    map.on('click', (e) => {
        const { lat, lng } = e.latlng;
        marker.setLatLng([lat, lng]);
        updateInputs(lat, lng);
        reverseGeocode(lat, lng, addressInputId);
    });

    marker.on('dragend', () => {
        const position = marker.getLatLng();
        updateInputs(position.lat, position.lng);
        reverseGeocode(position.lat, position.lng, addressInputId);
    });
}

export function searchLocation(query, latInputId = 'issue-lat', lngInputId = 'issue-lng', addressInputId = 'issue-location') {
    if (!query || !map) return;

    fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}`)
        .then(res => res.json())
        .then(data => {
            if (data && data.length > 0) {
                const { lat, lon, display_name } = data[0];
                const latitude = parseFloat(lat);
                const longitude = parseFloat(lon);

                map.setView([latitude, longitude], 15);
                marker.setLatLng([latitude, longitude]);

                const latInp = document.getElementById(latInputId);
                const lngInp = document.getElementById(lngInputId);
                const addrInp = document.getElementById(addressInputId);

                if (latInp) latInp.value = latitude.toFixed(6);
                if (lngInp) lngInp.value = longitude.toFixed(6);
                if (addrInp && !addrInp.value) addrInp.value = display_name;
            }
        })
        .catch(err => console.error("Geocoding failed:", err));
}

function reverseGeocode(lat, lng, addressInputId) {
    fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`)
        .then(res => res.json())
        .then(data => {
            if (data && data.display_name) {
                const addrInp = document.getElementById(addressInputId);
                if (addrInp) addrInp.value = data.display_name;
            }
        })
        .catch(err => console.error("Reverse geocoding failed:", err));
}
