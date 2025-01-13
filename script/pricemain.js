// Lista över bilder för bildspelet
const bilder = [
    "../images/background.jpg",
    "../images/barnkalas.jpg",
    "../images/base.jpg",
    "../images/base1.jpg",
    "../images/bowlingshop.jpg"
];

let aktuellBildIndex = 0;
const rightSection = document.querySelector(".price-section");

// Funktion för att byta bakgrundsbild
function bytBild() {
    aktuellBildIndex = (aktuellBildIndex + 1) % bilder.length; // Cirkulerar mellan bilderna
    rightSection.style.backgroundImage = `url('${bilder[aktuellBildIndex]}')`;
}

// Starta bildspelet och växla bild var 4:e sekund
setInterval(bytBild, 4000); // 4000 millisekunder = 4 sekunder

// Sätt första bilden när sidan laddas
rightSection.style.backgroundImage = `url('${bilder[aktuellBildIndex]}')`;
