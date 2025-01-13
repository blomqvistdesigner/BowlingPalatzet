function showBookingSystem(activity) {
    const bookingContents = document.querySelectorAll('.booking-content');
    
    // Dölj alla bokningssystem
    bookingContents.forEach(content => content.style.display = 'none');
    
    // Visa det valda bokningssystemet
    const selectedContent = document.getElementById(`${activity}-content`);
    if (selectedContent) {
        selectedContent.style.display = 'block';
    }
}

// Add event listeners for the person and duration buttons to toggle selected states
document.querySelectorAll('.person-btn').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.person-btn').forEach(btn => btn.classList.remove('selected'));
        button.classList.add('selected');
    });
});

document.querySelectorAll('.duration-btn').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.duration-btn').forEach(btn => btn.classList.remove('selected'));
        button.classList.add('selected');
    });
});

document.querySelectorAll(".date").forEach((date) => {
    date.addEventListener("click", function () {
        // Ta bort tidigare val
        document.querySelectorAll(".date").forEach(d => d.classList.remove("selected"));
        // Markera valt datum
        if (!this.classList.contains("disabled")) {
            this.classList.add("selected");
        }
    });
});
