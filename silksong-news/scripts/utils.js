export function startCountdown() {
    const countdown = document.getElementById('countdown');

    function update() {
        const now = new Date();
        const timeLeft = new Date('2025-12-31T23:59:59') - now;

        const seconds = Math.floor(timeLeft / 1000) % 60;
        const minutes = Math.floor(timeLeft / (1000 * 60)) % 60;
        const hours = Math.floor(timeLeft / (1000 * 60 * 60)) % 24;
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));

        countdown.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s until Silksong`;
    }

    update();
    setInterval(update, 1000);
}

export function toggleMenu() {
    const hamburger = document.getElementById('hamburger');
    const nav = document.querySelector('nav');
    hamburger.addEventListener('click', () => {
        nav.classList.toggle('menu');
        if (nav.classList.contains('menu')) {
            hamburger.innerHTML = '&times;'
            hamburger.style.fontSize = '32px';
            hamburger.style.top = '45px';
        }
        else {
            hamburger.innerHTML = '&#9776;'
            hamburger.style.fontSize = '24px';
            hamburger.style.top = '50px';
        }
    })
}

export function wayfind() {
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add('active');
        }
    });
}

export function fillFooter() {
    document.getElementById('year').textContent = new Date().getFullYear();
    document.getElementById('last-modified').textContent = `Last Modified: ${document.lastModified}`;
}

export async function fetchJSON(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP Error. Status: ${response.status}`);
        return await response.json();
    }
    catch (error) {
        console.error(`Error fetching ${url}: ${error}`);
        return null;
    }
}