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

    // NOVO: Zatvaranje menija nakon klika na bilo koji link unutar njega
    const allLinks = navLinks.querySelectorAll('a');
    allLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('active');
      });
    });
  }
});