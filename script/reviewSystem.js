document.addEventListener('DOMContentLoaded', () => {
    const reviewsContainer = document.querySelector('.reviews-container');

    // Funktion för att skapa stjärnor baserat på betyg
    const createStars = (stars) => {
        const starElements = [];
        for (let i = 1; i <= 5; i++) {
            if (stars >= i) {
                starElements.push('<i class="fa fa-star"></i>');
            } else if (stars >= i - 0.5) {
                starElements.push('<i class="fa fa-star-half-o"></i>');
            } else {
                starElements.push('<i class="fa fa-star-o"></i>');
            }
        }
        return starElements.join('');
    };

    // Funktion för att rendera recensioner baserat på antal
    const renderReviews = (count) => {
        reviewsContainer.innerHTML = ''; // Rensa tidigare innehåll
        reviewsData.slice(0, count).forEach((review) => {
            const reviewElement = document.createElement('div');
            reviewElement.classList.add('review');
            reviewElement.innerHTML = `
                <div class="review-picture">
                    <img src="${review.picture}" alt="${review.name}" />
                </div>
                <div class="review-text">
                    <p>"${review.text}" - ${review.name}</p>
                </div>
                <div class="review-stars">
                    ${createStars(review.stars)}
                </div>
            `;
            reviewsContainer.appendChild(reviewElement);
        });
    };

    // Funktion för att bestämma antal recensioner baserat på skärmstorlek
    const updateReviews = () => {
        const screenWidth = window.innerWidth;
    
        if (screenWidth > 1750) {
            renderReviews(7); // Visa upp till 7 recensioner för skärmar bredare än 1400px
        } else if (screenWidth > 1510) {
            renderReviews(6); // Visa upp till 6 recensioner för skärmar bredare än 1200px
        } else if (screenWidth > 1270) {
            renderReviews(5); // Visa upp till 5 recensioner för skärmar bredare än 992px
        } else if (screenWidth > 1030) {
            renderReviews(4); // Visa upp till 4 recensioner för skärmar bredare än 768px
        } else if (screenWidth > 1000) {
            renderReviews(3); // Visa upp till 3 recensioner för skärmar bredare än 0px (mobila enheter)
        }
    };    

    // Kör vid sidladdning och vid fönsterstorleksändring
    updateReviews();
    window.addEventListener('resize', updateReviews);
});
