import { startCountdown } from "./utils.js";
import { toggleMenu } from "./utils.js";
import { wayfind } from "./utils.js";
import { fillFooter } from "./utils.js";
import { fetchJSON } from "./utils.js";

function modal() {
    const modal = document.getElementById('modal');
    const closeModal = document.getElementById('close-modal');
    const modalText = document.getElementById('modal-text')
    const hasVisited = localStorage.getItem('hasVisited');
    
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    if (hasVisited) {
        modalText.textContent = 'Welcome back, there\'s still no news';
    }
    else {
        modalText.textContent = 'Welcome! If there were news to report, you\'d find it here';
        localStorage.setItem('hasVisited', 'true');
    }
}

async function embedVideo() {
    const key = 'AIzaSyCGsoF_WSOOOIRmu-Gunb1a14a6mQ2nGeg'
    const id = 'UC9OmOMZS6rU0_jIdZOxSHxw'
    const apiURL = `https://www.googleapis.com/youtube/v3/search?key=${key}&channelId=${id}&part=snippet,id&order=date&maxResults=1`;

    const cacheKey = 'latestSilksongVideo';
    const cacheExpiry = 6 * 60 * 1000;

    const cached = JSON.parse(localStorage.getItem(cacheKey));
    const now = Date.now();

    if (cached && (now - cached.timestamp < cacheExpiry)) {
        document.getElementById('latest-vid').innerHTML = `
            <iframe class="video"
            src="https://www.youtube.com/embed/${cached.videoId}"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
            </iframe>
        `;
    }
    else {
        const data = await fetchJSON(apiURL);
        const videoId = data.items[0].id.videoId;

        localStorage.setItem(cacheKey, JSON.stringify({
            videoId: videoId,
            timestamp: now
        }));

        document.getElementById('latest-vid').innerHTML = `
            <iframe class="video"
            src="https://www.youtube.com/embed/${videoId}"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
            </iframe>
        `;
    }
}

async function fillEvents() {
    const data = await fetchJSON('data/history.json');
    if (data) {
        const container = document.getElementById('recent-events');
        const now = new Date();
        const thirtyDaysAgo = new Date(now.getTime() - (30 * 24 * 60 * 60 * 1000));

        data.forEach(item => {
            const itemDate = new Date(item.date);
            if (itemDate >= thirtyDaysAgo) {
                const li = document.createElement('li');
                li.innerHTML = `<b>${item.date}</b> - ${item.content}`;
                container.appendChild(li);
            }
        });
    }
}

async function rumor() {
    const rumorData = await fetchJSON('data/rumor.json');
    if (rumorData) {
        const randomRumor = rumorData[Math.floor(Math.random() * rumorData.length)];
        document.getElementById('rumor').textContent = randomRumor;
    }
}

startCountdown();
toggleMenu();
wayfind();
fillFooter();
modal();
embedVideo();
fillEvents();
rumor();