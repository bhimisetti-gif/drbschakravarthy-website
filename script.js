// Footer year
document.querySelectorAll('[data-year]').forEach(function(el){
  el.textContent = new Date().getFullYear();
});

// Mobile nav toggle
var toggle = document.querySelector('.nav-toggle');
var mainNav = document.querySelector('.main-nav');
if (toggle && mainNav) {
  toggle.addEventListener('click', function () {
    var isOpen = mainNav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
  // Close menu after a nav link is tapped (mobile)
  mainNav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      mainNav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Floating WhatsApp button is always visible (see CSS for the bottom-right
// fixed positioning). Page padding/margins ensure it never overlaps the
// footer text or other bottom CTAs — see main{padding-bottom} and
// footer-grid spacing in style.css.
