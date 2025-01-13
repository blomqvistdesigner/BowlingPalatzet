// Funktion för att växla visningen av kontaktformuläret
function toggleContactForm() {
    const contactForm = document.getElementById('contactForm');
    contactForm.classList.toggle('visible');
    console.log("Formulär synlighet:", contactForm.classList.contains('visible') ? 'synlig' : 'dold');
}

// Simulerad funktion för att "skicka" meddelandet
function submitMessage() {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const issueType = document.getElementById('issue-type').value;
    const message = document.getElementById('message').value;

    // Kontrollera att alla obligatoriska fält är ifyllda
    if (!name || !phone || !email || !message) {
        alert("Vänligen fyll i alla fält.");
        return;
    }

    // Visa meddelandet för användaren
    alert("Meddelande skickat!\n" +
          "Namn: " + name + "\n" +
          "Telefonnummer: " + phone + "\n" +
          "E-post: " + email + "\n" +
          "Typ av ärende: " + issueType + "\n" +
          "Meddelande: " + message);

    // Stäng formuläret efter att meddelandet är "skickat"
    toggleContactForm();

    // Rensa formuläret
    document.getElementById('name').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('email').value = '';
    document.getElementById('issue-type').selectedIndex = 0;
    document.getElementById('message').value = '';
}
