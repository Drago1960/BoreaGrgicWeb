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
                        <li><a href="wood-epoxy.html#hungryhearts">Hungry Hearts</a></li>
                        <li><a href="wood-epoxy.html#gin&epoxy">Gin & Epoxy</a></li>
                        
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
    </header>
    `;

  // Ubacivanje navigacije na sam početak body elementa
  document.body.insertAdjacentHTML('afterbegin', navHTML);

  // Mobilna skripta za hamburger klik
  const menuToggle = document.getElementById('mobile-menu');
  const navLinks = document.getElementById('nav-list');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', function () {
      navLinks.classList.toggle('active');
    });
  }
});