// Smooth scroll is handled by CSS scroll-behavior, but let's keep JS for older browsers or enhancement

// Navigation smooth scroll fallback
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Contact form validation and submission handling
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = this.name.value.trim();
  const phone = this.phone.value.trim();
  const email = this.email.value.trim();

  if (!name || !phone || !email) {
    showMessage('Please fill out all fields.', 'red');
    return;
  }

  const phoneRegex = /^[0-9]{10}$/;
  if (!phoneRegex.test(phone)) {
    showMessage('Please enter a valid 10-digit phone number.', 'red');
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    showMessage('Please enter a valid email address.', 'red');
    return;
  }

  showMessage(`Thank you for contacting me, ${name}!`, 'green');
  this.reset();
});

function showMessage(message, color) {
  const msg = document.getElementById('formMessage');
  msg.textContent = message;
  msg.style.color = color;
}
