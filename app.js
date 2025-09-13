// Flower filter function
function filterFlowers(category, event) {
  const cards = document.querySelectorAll('.flower-card');
  const buttons = document.querySelectorAll('.filter-buttons button');

  // Remove active class from all buttons
  buttons.forEach(btn => btn.classList.remove('active'));

  // Add active class to clicked button if there was a click
  if (event) {
    event.target.classList.add('active');
  }

  // Show/hide cards
  cards.forEach(card => {
    if (category === 'all' || card.classList.contains(category)) {
      card.style.display = 'block';
      setTimeout(() => card.style.opacity = 1, 50); // fade in
    } else {
      card.style.opacity = 0; // fade out
      setTimeout(() => card.style.display = 'none', 300); // hide after fade
    }
  });
}

// Show all flowers on page load
window.onload = function () {
  filterFlowers('all');
};

// Fade-in on scroll
const faders = document.querySelectorAll('.fade-in');

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

// Ensure fade-in class is applied and observed
faders.forEach(fader => fader.classList.add('fade-in'));
faders.forEach(fader => appearOnScroll.observe(fader));
