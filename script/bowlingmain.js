// Lista över bilder för bildspelet
const bilder = [
    "../images/burger1.jpeg",
    "../images/plate1.jpg",
    "../images/burger2.png",
    "../images/plate2.jpg",
    "../images/burger3.jpg",
    "../images/plate3.jpg"
];

let aktuellBildIndex = 0;
const rightSection = document.querySelector(".right-section");

// Funktion för att byta bakgrundsbild
function bytBild() {
    aktuellBildIndex = (aktuellBildIndex + 1) % bilder.length; // Cirkulerar mellan bilderna
    rightSection.style.backgroundImage = `url('${bilder[aktuellBildIndex]}')`;
}

// Starta bildspelet och växla bild var 4:e sekund
setInterval(bytBild, 4000); // 4000 millisekunder = 4 sekunder

// Sätt första bilden när sidan laddas
rightSection.style.backgroundImage = `url('${bilder[aktuellBildIndex]}')`;
