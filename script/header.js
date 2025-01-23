// headerLoader.js
document.addEventListener('DOMContentLoaded', function() {
    fetch('../components/header.html')
        .then(response => response.text())
        .then(data => {
            // Find the first header tag in the document
            const headerContainer = document.querySelector('header');
            if (headerContainer) {
                // Replace the existing header with the loaded header
                headerContainer.outerHTML = data;
            } else {
                // If no header exists, insert the header right after the body tag
                document.body.insertAdjacentHTML('afterbegin', data);
            }
        })
        .catch(error => console.error('Error loading header:', error));
});

fetch('../components/footer.html')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.text();
    })
    .then(data => {
        document.getElementById('footer').innerHTML = data;
    })
    .catch(error => console.error('Error loading footer:', error));
