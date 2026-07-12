(function() {
    var navHTML = `
    <header>
        <nav>
            <div class="logo">
                <a href="index.html"><img src="assets/logo.png" alt="Logo"></a>
            </div>
            <div class="menu-toggle" id="mobile-menu">
                <span></span><span></span><span></span>
            </div>
            <ul class="nav-links" id="nav-list">
                <li><a href="index.html">Home</a></li>
                <li>
                    <a href="wood-epoxy.html">Wood & Epoxy</a>
                    <ul class="dropdown-menu">
                        <li><a href="wood-epoxy.html#products">Products</a></li>
                        <li><a href="wood-epoxy.html#gallery">Gallery</a></li>
                        <li><a href="wood-epoxy.html#custom">Custom</a></li>
                    </ul>
                </li>
                <li>
                    <a href="software.html">Software</a>
                    <ul class="dropdown-menu">
                        <li><a href="probexyz.html">ProbeXYZ - UCCNC plugin</a></li>
                    </ul>
                </li>
                <li><a href="about.html">About</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </nav>
    </header>`;

    // Umetni navigaciju odmah, bez čekanja
    document.body.insertAdjacentHTML('afterbegin', navHTML);

    // Hamburger logika
    var menuToggle = document.getElementById('mobile-menu');
    var navLinks = document.getElementById('nav-list');
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }
})();