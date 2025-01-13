//sectioninfo.js

// Välj alla main-section-header-element och main-section-info-element
const headers = document.querySelectorAll('.main-section-header');
const infoSections = document.querySelectorAll('.main-section-info');

// Funktion för att visa eller dölja sektioner baserat på skärmbredd
function updateInfoDisplay() {
    if (window.innerWidth > 768) {
        // Om skärmen är större än 768px, visa alla sektioner
        infoSections.forEach(info => {
            info.style.display = 'flex';
        });
    } else {
        // Om skärmen är 768px eller mindre, dölj alla sektioner som standard
        infoSections.forEach(info => {
            info.style.display = 'none';
        });
    }
}

// Lägg till klickhändelse för varje header för att toggla sektionen i mobilvyn
headers.forEach(header => {
    header.addEventListener('click', () => {
        // Kör endast om skärmen är mindre än 768px
        if (window.innerWidth <= 768) {
            // Hitta tillhörande main-section-info för den klickade headern
            const infoSection = header.nextElementSibling;
            
            // Kontrollera om infoSection redan är öppen
            const isVisible = infoSection.style.display === 'flex';

            // Stäng alla sektioner först
            infoSections.forEach(info => {
                info.style.display = 'none';
            });

            // Om infoSection inte var öppen tidigare, öppna den
            if (!isVisible) {
                infoSection.style.display = 'flex';
            }
        }
    });
});

// Kör updateInfoDisplay en gång när sidan laddas
updateInfoDisplay();

// Lägg till event listener för fönsterstorlek för att hantera ändringar i skärmbredd
window.addEventListener('resize', updateInfoDisplay);
