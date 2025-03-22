document.getElementById('hamburgerMenu').addEventListener('click', function () {
    document.querySelector('nav').classList.toggle('active');
});

let currentPage = window.location.pathname.split('/').pop();
let navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('current');
    }
})