// Sticky Navbar Effect
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.05)';
  } else {
    navbar.style.boxShadow = 'none';
  }
});

// Hero Slider Dummy Logic (Micro-interaction)
const sliderDots = document.querySelectorAll('.slider-dots .dot');
const heroImg = document.querySelector('.hero-img');

sliderDots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    // Remove active class from all dots
    sliderDots.forEach(d => d.classList.remove('active'));
    // Add active class to clicked dot
    dot.classList.add('active');
    
    // Simple visual effect for image switch
    heroImg.style.opacity = '0';
    setTimeout(() => {
      heroImg.style.opacity = '1';
    }, 300);
  });
});

// Product Filtering
const tabBtns = document.querySelectorAll('.tab-btn');
const productCards = document.querySelectorAll('.product-card');

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove active class from all tabs
    tabBtns.forEach(b => b.classList.remove('active'));
    // Add active class to clicked tab
    btn.classList.add('active');

    const filterValue = btn.getAttribute('data-filter');

    productCards.forEach(card => {
      // Add subtle fade out effect
      card.style.opacity = '0';
      card.style.transform = 'scale(0.95)';
      
      setTimeout(() => {
        if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
          }, 50);
        } else {
          card.style.display = 'none';
        }
      }, 300);
    });
  });
});
