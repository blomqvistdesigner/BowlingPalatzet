function loadBookingContent() {
    fetch('booking-system.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Nätverksfel när filen hämtades');
            }
            return response.text();
        })
        .then(html => {
            const bookingContent = document.getElementById('booking-content');
            if (bookingContent) {
                // Lägg till nytt innehåll istället för att skriva över allt
                bookingContent.insertAdjacentHTML('beforeend', html);
            } else {
                console.error('Elementet #booking-content hittades inte.');
            }
        })
        .catch(error => {
            console.error('Ett fel inträffade:', error);
        });
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


function goBack() {
    showBookingSystem('mainView');
}

function goNext() {
    console.log('Fortsätt-knappen klickad!');
}

const container = document.querySelector('.activities-container-amount');
const maxButtons = 15;

for (let i = 1; i <= maxButtons; i++) {
    const button = document.createElement('button');
    button.className = 'cta-button';
    button.textContent = i;
    container.appendChild(button);
}

document.addEventListener('DOMContentLoaded', () => {
    // === Variabler och referenser ===
    const defaultContainer = document.querySelector('.activities-container-amount');
    const bowlingContainer = document.querySelector('.activities-container-amount-bowling');
    const adultsContainer = document.getElementById('Amount-Bowling-Adults');
    const kidsContainer = document.getElementById('Amount-Bowling-Kids');
    const bowlingButton = document.getElementById('bowling-booking');
    const biljardButton = document.getElementById('biljard-booking');
    const shuffleboardButton = document.getElementById('shuffleboard-booking');
    const timeContainer = document.querySelector('.activities-container-time');
    const bookingSection = document.getElementById('Booking-Time-Section');
    const laneSelectionContainer = document.querySelector('.activities-container-lanes');
    const laneSelectionDiv = document.getElementById('lane-selection');
    const recommendationText = document.getElementById('recommendation');

    let totalAdults = 0; // Antal vuxna
    let totalKids = 0; // Antal barn
    let totalPlayers = 0; // Totalt antal spelare
    let selectedTime = null; // Vald tid

    // === Uppdatera totalantal och rekommendation dynamiskt ===
    function updateTotalAndRecommendation() {
        totalPlayers = totalAdults + totalKids; // Beräkna totalantalet
        const maxPlayersPerLane = 4;
        const numberOfLanes = Math.ceil(totalPlayers / maxPlayersPerLane);

        // Uppdatera texten för antal banor
        if (laneSelectionContainer.style.display === 'block') {
            laneSelectionContainer.querySelector('h2').textContent = `För ${totalPlayers} gäster så rekommenderar vi ${numberOfLanes} banor`;
            laneSelectionContainer.querySelector('p').textContent = `Vill du ändra antalet banor vänligen välj nedan`;
        }
    }

    // === Highlight för aktivitetsval ===
    function highlightActivityButton(selectedButton) {
        [bowlingButton, biljardButton, shuffleboardButton].forEach(button => {
            button.classList.remove('selected');
        });
        selectedButton.classList.add('selected');
    }

    // === Highlight för tidsval ===
    function highlightTimeButton(selectedButton) {
        document.querySelectorAll('.time-button').forEach(button => {
            button.classList.remove('selected');
        });
        selectedButton.classList.add('selected');
    }

    // === Visa rätt container för aktivitet ===
    function showContainer(selectedActivity) {
        const antalPersonerHeader = document.querySelector('.bookingSection2 h2:nth-of-type(3)'); // Välj <h2>Antal Personer

        if (selectedActivity === 'bowling') {
            defaultContainer.style.display = 'none';
            bowlingContainer.style.display = 'block';
            laneSelectionContainer.style.display = 'none'; // Dölj banval
            timeContainer.style.display = 'none'; // Dölj tidsval
            antalPersonerHeader.style.display = 'none'; // Dölj <h2>Antal Personer

            // Generera knappar om de inte redan finns
            if (!adultsContainer.innerHTML) {
                generateButtons(adultsContainer, 10); // 10 knappar för vuxna
            }
            if (!kidsContainer.innerHTML) {
                generateButtons(kidsContainer, 10); // 10 knappar för barn
            }
        } else {
            bowlingContainer.style.display = 'none';
            defaultContainer.style.display = 'block';
            timeContainer.style.display = 'none'; // Dölj tidsval
            laneSelectionContainer.style.display = 'none'; // Dölj banval
            antalPersonerHeader.style.display = 'block'; // Visa <h2>Antal Personer
        }
    }

    // Lägg till eventlyssnare för aktivitetsknappar
    bowlingButton.addEventListener('click', () => {
        highlightActivityButton(bowlingButton);
        showContainer('bowling');
    });

    biljardButton.addEventListener('click', () => {
        highlightActivityButton(biljardButton);
        showContainer('default');
    });

    shuffleboardButton.addEventListener('click', () => {
        highlightActivityButton(shuffleboardButton);
        showContainer('default');
    });

    // === Generera knappar dynamiskt och highlight aktiva ===
    function generateButtons(container, maxButtons) {
        container.innerHTML = ''; // Rensa tidigare innehåll
        for (let i = 1; i <= maxButtons; i++) {
            const button = document.createElement('button');
            button.className = 'cta-button';
            button.textContent = i;

            button.addEventListener('click', () => {
                // Ta bort "selected"-klassen från alla knappar i samma container
                container.querySelectorAll('.cta-button').forEach(btn => btn.classList.remove('selected'));
                // Lägg till "selected"-klassen på den klickade knappen
                button.classList.add('selected');

                // Uppdatera antalet vuxna eller barn
                if (container === adultsContainer) {
                    totalAdults = i;
                } else if (container === kidsContainer) {
                    totalKids = i;
                }

                updateTotalAndRecommendation(); // Uppdatera dynamiskt
            });

            container.appendChild(button);
        }
    }

    // === Generera och visa starttider med highlight ===
    const timeDurations = {
        '1Tim': 1,
        '1,5Tim': 1.5,
        '2Tim': 2,
    };

    function generateStartTimes(duration) {
        const openingTime = 11; // Öppningstid
        const closingTime = 21; // Stängningstid
        const times = [];

        for (let hour = openingTime; hour + duration <= closingTime; hour++) {
            times.push(`${hour}:00`);
        }

        return times;
    }

    function showStartTimes(duration) {
        bookingSection.innerHTML = ''; // Rensa tidigare tider
        const startTimes = generateStartTimes(duration);
    
        startTimes.forEach((time) => {
            const button = document.createElement('button');
            button.className = 'time-button'; // Lägg till klassen "time-button"
            button.textContent = time;
    
            button.addEventListener('click', () => {
                // Highlight vald starttid
                document.querySelectorAll('.time-button').forEach(btn => btn.classList.remove('selected'));
                button.classList.add('selected');
    
                selectedTime = time;
    
                // Visa meny för banor efter att tid har valts
                if (selectedTime) {
                    showLaneSelection(totalPlayers);
                }
            });
    
            bookingSection.appendChild(button);
        });
    
        timeContainer.style.display = 'block';
    }

    Object.keys(timeDurations).forEach((id) => {
        const timeButton = document.getElementById(id); // Hämta knappen med motsvarande id
        if (timeButton) {
            timeButton.addEventListener('click', () => {
                // Highlight vald tidsknapp
                Object.keys(timeDurations).forEach(otherId => {
                    document.getElementById(otherId).classList.remove('selected');
                });
                timeButton.classList.add('selected');
    
                // Visa starttider för vald duration
                showStartTimes(timeDurations[id]);
            });
        }
    });

    // === Visa meny för antal banor med dynamisk text ===
    function showLaneSelection(totalPlayers) {
        const maxPlayersPerLane = 5; // Max antal spelare per bana
        const numberOfLanes = Math.ceil(totalPlayers / maxPlayersPerLane); // Beräkna antal banor

        // Uppdatera rubrik och text
        laneSelectionContainer.querySelector('h2').textContent = `För ${totalPlayers} gäster så rekommenderar vi ${numberOfLanes} banor`;
        laneSelectionContainer.querySelector('p').textContent = `Vill du ändra antalet banor vänligen välj nedan`;

        // Rensa tidigare knappar
        laneSelectionDiv.innerHTML = '';

        // Generera knappar för antal banor
        for (let i = 1; i <= numberOfLanes; i++) {
            const button = document.createElement('button');
            button.className = 'cta-button';
            button.textContent = `${i} Bana${i > 1 ? 'or' : ''}`;

            button.addEventListener('click', () => {
                // Ta bort "selected"-klassen från alla ban-knappar
                laneSelectionDiv.querySelectorAll('.cta-button').forEach(btn => btn.classList.remove('selected'));
                // Markera den valda knappen
                button.classList.add('selected');

                console.log(`Valda banor: ${i}`);
            });

            laneSelectionDiv.appendChild(button);
        }

        // Visa sektionen för banval
        laneSelectionContainer.style.display = 'block';
    }
});

function goNext(nextViewId) {
    // Dölj alla element med klassen 'view'
    const allViews = document.querySelectorAll('.view');
    allViews.forEach(view => {
        view.classList.add('hidden'); // Lägg till klassen 'hidden' för att dölja
    });

    // Visa det element som matchar nextViewId
    const nextView = document.getElementById(nextViewId);
    if (nextView) {
        nextView.classList.remove('hidden'); // Ta bort klassen 'hidden' för att visa
    } else {
        console.error(`Element med ID "${nextViewId}" hittades inte.`);
    }
}
