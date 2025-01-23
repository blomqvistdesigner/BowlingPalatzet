function loadBookingSystem(containerId) {
    fetch('booking-system.html')
        .then(response => response.text())
        .then(html => {
            // Lägg innehållet i rätt container
            const container = document.getElementById(containerId);
            if (container) {
                container.innerHTML = html;
            }
        })
        .catch(error => console.error('Kunde inte ladda bokningssystemet:', error));
}

// Ladda in bokningssystemet i rätt containers
document.addEventListener('DOMContentLoaded', () => {
    loadBookingSystem('booking-content'); // För aktiviteter
    loadBookingSystem('booking-container-kids'); // För barnkalas
});
