document.addEventListener("DOMContentLoaded", function() {
    var navHTML = '<header>' +
        '<nav>' +
            '<div class="logo">' +
                '<a href="index.html"><img src="assets/logo.png" alt="Logo" width="220" height="110" style="object-fit: contain;"></a>' +
            '</div>' +
            '<div class="menu-toggle" id="mobile-menu">' +
                '<span></span>' +
                '<span></span>' +
                '<span></span>' +
            '</div>' +
            '<ul class="nav-links" id="nav-list">' +
                '<li><a href="index.html">Home</a></li>' +
                '<li>' +
                    '<a href="wood-epoxy.html">Wood & Epoxy</a>' +
                    '<ul class="dropdown-menu">' +
                        '<li><a href="wood-epoxy.html#products">Products</a></li>' +
                        '<li><a href="wood-epoxy.html#hungry-hearts">Hungry Hearts</a></li>' +
                        '<li><a href="wood-epoxy.html#gin-epoxy">Gin & Epoxy</a></li>' +
                        '<li><a href="wood-epoxy.html#custom">Custom</a></li>' +
                    '</ul>' +
                '</li>' +
                '<li>' +
                    '<a href="software.html">Software</a>' +
                    '<ul class="dropdown-menu">' +
                        '<li><a href="probexyz.html">ProbeXYZ - UCCNC plugin</a></li>' +
                    '</ul>' +
                '</li>' +
                '<li><a href="about.html">About</a></li>' +
                '<li><a href="contact.html">Contact</a></li>' +
            '</ul>' +
        '</nav>' +
    '</header>';

    // Dinamičko ubacivanje na početak stranice
    document.body.insertAdjacentHTML('afterbegin', navHTML);

    // Skripta za mobilni hamburger izbornik
    var menuToggle = document.getElementById('mobile-menu');
    var navLinks = document.getElementById('nav-list');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }
});