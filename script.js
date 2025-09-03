// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('site-nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const expanded = nav.getAttribute('aria-expanded') === 'true';
    nav.setAttribute('aria-expanded', String(!expanded));
  });
}

// Contact form (demo feedback only)
const form = document.getElementById('contact-form');
const msg = document.getElementById('msg');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form));
    msg.textContent = `Thanks ${data.name || ''}! We'll reach out to ${data.email}.`;
    form.reset();
  });
}
