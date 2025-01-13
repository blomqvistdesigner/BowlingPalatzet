// sectionscript.js //
document.addEventListener('DOMContentLoaded', () => {
    const mainContainer = document.querySelector('.main-container');

    sectionsData.forEach(section => {
        // Skapa ett nytt section-element
        const sectionElement = document.createElement('section');
        sectionElement.classList.add('info-section');
        sectionElement.style.backgroundImage = `url(${section.backgroundImage})`;

        // Inre bakgrundsdiv
        const backgroundDiv = document.createElement('div');
        backgroundDiv.classList.add('section-background');

        // Titel
        const title = document.createElement('h2');
        title.textContent = section.title;

        // Beskrivning
        const description = document.createElement('p');
        description.textContent = section.description;

        // Lägg till title och description i backgroundDiv
        backgroundDiv.appendChild(title);
        backgroundDiv.appendChild(description);

        // Hantera knappar
        if (section.buttons) {
            // Om flera knappar (endast i "Liga")
            const buttonsContainer = document.createElement('div');
            buttonsContainer.classList.add('buttons-container');

            section.buttons.forEach(buttonData => {
                const button = document.createElement('a');
                button.classList.add('cta-button');
                button.textContent = buttonData.text;
                button.href = buttonData.link;
                button.target = "_blank"; // Öppna i ny flik
                buttonsContainer.appendChild(button);
            });

            backgroundDiv.appendChild(buttonsContainer);
        } else if (section.buttonText && section.buttonLink) {
            // Om en enda knapp (andra sektioner)
            const button = document.createElement('a');
            button.classList.add('cta-button');
            button.textContent = section.buttonText;
            button.href = section.buttonLink;
            button.target = "_self"; // Öppna i samma flik
            backgroundDiv.appendChild(button);
        }

        // Lägg till allting i section-elementet
        sectionElement.appendChild(backgroundDiv);

        // Lägg till section-elementet i main-container
        mainContainer.appendChild(sectionElement);
    });
});
