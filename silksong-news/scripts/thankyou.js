import { startCountdown } from "./utils.js";
import { toggleMenu } from "./utils.js";
import { wayfind } from "./utils.js";
import { fillFooter } from "./utils.js";

function displayInfo() {
    const params = new URLSearchParams(window.location.search);
    const fields = [
        "First Name",
        "Last Name",
        "Email",
        "Phone Number",
        "Date"
    ];
    
    const listItems = document.querySelectorAll('#info li');
    listItems.forEach((li, index) => {
        const key = fields[index].toLowerCase().replace(/\s+/g, '');
        const value = params.get(key);
        if (value) {
            li.textContent = `${fields[index]}: ${value}`;
        }
    });
}

startCountdown();
toggleMenu();
wayfind();
fillFooter();
displayInfo();