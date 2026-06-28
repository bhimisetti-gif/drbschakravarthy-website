const navToggle=document.querySelector('.nav-toggle');const mainNav=document.querySelector('.main-nav');if(navToggle&&mainNav){navToggle.addEventListener('click',()=>{const open=mainNav.classList.toggle('open');navToggle.setAttribute('aria-expanded',open?'true':'false')});mainNav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{mainNav.classList.remove('open');navToggle.setAttribute('aria-expanded','false')}))}document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
// Visitor count: local device count for static GitHub Pages.
// Later this can be replaced with Google Analytics, GoatCounter, Plausible, or a server counter.
(function () {
  var el = document.getElementById('visitorCount');
  if (!el) return;
  var key = 'drbsc_visitor_count';
  var current = parseInt(localStorage.getItem(key) || '0', 10);
  current += 1;
  localStorage.setItem(key, String(current));
  el.textContent = current.toLocaleString('en-IN');
})();

// Mailbox form: opens user's email app with message.
(function () {
  var form = document.getElementById('contactForm');
  if (!form) return;
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var name = document.getElementById('mailName').value.trim();
    var email = document.getElementById('mailEmail').value.trim();
    var message = document.getElementById('mailMessage').value.trim();
    var subject = encodeURIComponent('Message from drbschakravarthy.com');
    var body = encodeURIComponent(
      'Name: ' + name + '\n' +
      'Email / Phone: ' + email + '\n\n' +
      message
    );
    window.location.href = 'mailto:bhimisetti@gmail.com?subject=' + subject + '&body=' + body;
  });
})();
