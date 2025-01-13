// JavaScript-funktion för att dirigera till vald bowlinghall

function redirectToHall(hall) {
    if (hall === 'hall1') {
        window.location.href = 'https://example.com/bowlinghall1'; // Länk till Bowlinghall 1
    } else if (hall === 'hall2') {
        window.location.href = 'https://example.com/bowlinghall2'; // Länk till Bowlinghall 2
    }
}
