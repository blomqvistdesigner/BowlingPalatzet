document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('click', function(event) {
        // Bara hantera aktivitetsknappen
        if (event.target.matches('#scroll-activities')) {
            event.preventDefault();
            
            // Försök först scrolla ner
            const mainContainer = document.querySelector('.main-container');
            if (mainContainer) {
                mainContainer.scrollIntoView({
                    behavior: 'smooth'
                });
            } else {
                // Om inte main-container finns, gå till aktiviteter-sidan
                window.location.href = '../tyreso/tyreso.html';
            }
        }
    });
});

document.querySelector('#scroll-activities-liga').addEventListener('click', function(event) {
    event.preventDefault(); // Förhindra standardbeteende
    const ligaSection = document.querySelector(`.main-container section:nth-child(${sectionsData.length})`);
    ligaSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    });
});
