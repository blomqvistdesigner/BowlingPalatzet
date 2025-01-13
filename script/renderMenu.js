import { standardRatter } from './standardRatter.js';
import { hamburgare } from './hamburgare.js';
import { dryck } from './dryck.js';

// Funktion för att rendera en meny till en specifik container
const renderMenu = (menu, containerId) => {
    const container = document.getElementById(containerId);
    menu.forEach(item => {
        const itemElement = document.createElement("div");
        itemElement.className = "menu-item";

        const nameSpan = document.createElement("span");
        nameSpan.textContent = item.name;

        const priceSpan = document.createElement("span");
        priceSpan.textContent = item.price;

        itemElement.appendChild(nameSpan);
        itemElement.appendChild(priceSpan);
        container.appendChild(itemElement);
    });
};

// Rendera menyerna i deras respektive containers
renderMenu(standardRatter, "standard-ratter-container");
renderMenu(hamburgare, "hamburgare-container");
renderMenu(dryck, "dryck-container");
