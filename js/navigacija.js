document.addEventListener("DOMContentLoaded", function () {
  const navHTML = `
    <header>
        <nav>
            <div class="logo">
                <a href="index.html"><img src="assets/logo.png" alt="Logo"></a>
            </div>
            <div class="menu-toggle" id="mobile-menu">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul class="nav-links" id="nav-list">
                <li><a href="index.html">Home</a></li>
                <li>
                    <a href="wood-epoxy.html">Wood & Epoxy</a>
                    <ul class="dropdown-menu">
                        <li><a href="wood-epoxy.html">Hungry Hearts</a></li>
                        <li><a href="wood-epoxy.html#gin-epoxy">Gin & Epoxy</a></li>
                    </ul>
                </li>
                <li>
                    <a href="probexyz.html">Software</a>
                    <ul class="dropdown-menu">
                        <li><a href="probexyz.html">ProbeXYZ - UCCNC plugin</a></li>
                    </ul>
                </li>
                <li><a href="about.html">About</a></li>
                <li><a href="contact.html">Contact</a></li>
                <!-- NOVO: YouTube link sa SVG ikonom unutar navigacije -->
                <li style="display: inline-flex; align-items: center;">
                    <a href="https://www.youtube.com/@Borea_Grgic" target="_blank" rel="noopener" style="display: inline-flex; align-items: center; gap: 6px;">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="#ff0000" style="vertical-align: middle;">
                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                        </svg>
                        YouTube
                    </a>
                </li>
            </ul>
        </nav>
    </header>
    `;

  // Ubacivanje navigacije na sam početak body elementa
  document.body.insertAdjacentHTML('afterbegin', navHTML);

  const menuToggle = document.getElementById('mobile-menu');
  const navLinks = document.getElementById('nav-list');

  if (menuToggle && navLinks) {
    // Mobilna skripta za hamburger klik (otvaranje/zatvaranje)
    menuToggle.addEventListener('click', function () {
      navLinks.classList.toggle('active');
    });

    // Zatvaranje menija nakon klika na bilo koji link unutar njega
    const allLinks = navLinks.querySelectorAll('a');
    allLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('active');
      });
    });
  }
});