document.addEventListener('DOMContentLoaded', () => {
    const spacerWrapper = document.querySelector('.spacer-wrapper');
    const h1 = spacerWrapper.querySelector('h1');
    const p = spacerWrapper.querySelector('p');
    const button = spacerWrapper.querySelector('.cta-button'); // Endast knappen inom spacer-wrapper

    // Dölj <h1> om det är tomt
    if (!h1.textContent.trim()) {
        h1.style.display = 'none';
    }

    // Dölj <p> om det är tomt
    if (!p.textContent.trim()) {
        p.style.display = 'none';
    }

    // Dölj knappen om både <h1> och <p> är tomma
    if (!h1.textContent.trim() && !p.textContent.trim()) {
        button.style.display = 'none';
    }
});
