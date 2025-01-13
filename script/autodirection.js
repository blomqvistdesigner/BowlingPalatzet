document.querySelector('.bottom-button').addEventListener('click', function(event) {
    event.preventDefault(); // Förhindra standardbeteende
    document.querySelector('.main-container').scrollIntoView({
        behavior: 'smooth'
    });
});

document.querySelector('#scroll-activities').addEventListener('click', function(event) {
    event.preventDefault(); // Förhindra standardbeteende
    document.querySelector('.main-container').scrollIntoView({
        behavior: 'smooth'
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
