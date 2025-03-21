document.addEventListener("DOMContentLoaded", function() {
    let currentPath = window.location.pathname;

    if (currentPath.startsWith('/')) {
        currentPath = currentPath.slice(1);
    }

    let navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(function(link) {
        let linkPath = link.getAttribute('href');
        if (linkPath.startsWith('/')) {
            linkPath = linkPath.slice(1);
        }

        if (linkPath === currentPath) {
            link.classList.add('current');
        }
    });
});