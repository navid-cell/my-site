document.getElementById('year').textContent = new Date().getFullYear();

const form = document.getElementById('contact-form');
const msg = document.getElementById('msg');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = new FormData(form).get('email');
  msg.textContent = `Thanks! We'll reach out to ${email}. (Demo only)`;
  form.reset();
});
