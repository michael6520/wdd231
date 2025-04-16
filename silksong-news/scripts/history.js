import { startCountdown } from "./utils.js";
import { toggleMenu } from "./utils.js";
import { wayfind } from "./utils.js";
import { fillFooter } from "./utils.js";
import { fetchJSON } from "./utils.js";

async function writeHistory() {
    const data = await fetchJSON('data/history.json');
    if (data) {
        const main = document.querySelector('main');
        const topThreeContainer = document.querySelector('.top-three');
        
        data.forEach((item, index) => {
            const p = document.createElement('p');
            p.classList.add('event');

            const status = item.status.toLowerCase();
            if (status === 'true') {
                p.classList.add('true');
            }
            else if (status === 'false') {
                p.classList.add('false');
            }
            else {
                p.classList.add('unconfirmed');
            }

            p.innerHTML = `<b>${item.date}</b> - ${item.content} (${item.source})`;
            if (index < 3) {
                topThreeContainer.appendChild(p);
            }
            else {
                main.appendChild(p);                
            }
        })
    }
}

function handleModalPosition() { 
    const key = document.querySelector('.key');
    const topThree = document.querySelector('.top-three');
    const header = document.querySelector('header');
    const headerRect = header.getBoundingClientRect();
    
    if (window.innerWidth < 1025) {
        key.classList.remove('stuck');
        if (!topThree.contains(key)) {
            topThree.appendChild(key);
        }
    }
    else {
        if (headerRect.bottom > 0) {
            key.classList.add('stuck');
            const headerBottom = header.offsetTop + header.offsetHeight;
            key.style.top = `${headerBottom + 20}px`;
        }
        else {
            key.classList.remove('stuck');
            key.style.top = '20px';
        }        
    }
}

startCountdown();
toggleMenu();
wayfind();
fillFooter();
writeHistory();
handleModalPosition();
window.addEventListener('scroll', handleModalPosition);
window.addEventListener('resize', handleModalPosition);