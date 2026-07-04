document.addEventListener('DOMContentLoaded', () => {
    // Mobilni hamburger meni
    const menuToggle = document.getElementById('mobile-menu-toggle');
    const navLinks = document.getElementById('nav-links-menu');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
});

// Paddle simulacija
function otvoriPaddleSustav() {
    alert("Pokretanje integriranog Paddle servisa za naplatu...\nCheckout prozor se otvara preko ekrana.");
}