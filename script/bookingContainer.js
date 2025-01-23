function showView(viewId) {
    console.log(`Visar vy: ${viewId}`); // Debuggning

    // Dölj alla vyer
    const views = document.querySelectorAll('.view');
    views.forEach(view => {
        view.classList.remove('visible');
        view.classList.add('hidden');
    });

    // Visa vald vy
    const targetView = document.getElementById(viewId);
    if (targetView) {
        targetView.classList.remove('hidden');
        targetView.classList.add('visible');
    } else {
        console.error(`Vy med ID '${viewId}' hittades inte.`);
    }
}

// Initiera med att visa huvudvyn (om det inte är synligt som standard)
document.addEventListener('DOMContentLoaded', () => {
    showView('mainView'); // Huvudvy vid start
});