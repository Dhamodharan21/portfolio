// Contact Form
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you! Your message has been sent.');
    this.reset();
  });
}

// Page Transition Effect
const transitionEl = document.querySelector('.page-transition');

window.addEventListener('load', () => {
  setTimeout(() => {
    transitionEl.classList.add('hidden');
  }, 100);
});

// Smooth page transition for internal links only
document.querySelectorAll('a[href]').forEach(anchor => {
  const href = anchor.getAttribute('href');

  // Skip external links, mailto, tel, and same-page anchors
  const isExternal = href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('#');
  
  if (!isExternal) {
    anchor.addEventListener('click', e => {
      e.preventDefault();
      transitionEl.classList.remove('hidden');
      setTimeout(() => {
        window.location.href = href;
      }, 600);
    });
  }
});
