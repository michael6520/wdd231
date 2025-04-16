import { startCountdown } from "./utils.js";
import { toggleMenu } from "./utils.js";
import { wayfind } from "./utils.js";
import { fillFooter } from "./utils.js";

function currentDate() {
    const dateElement = document.getElementById('date');
    const now = new Date();
    dateElement.value = now.toDateString();
}

startCountdown();
toggleMenu();
wayfind();
fillFooter();
currentDate();