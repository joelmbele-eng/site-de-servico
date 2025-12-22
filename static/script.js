// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  
  // Scroll reveal animation
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.1 });

  // Observe all reveal elements
  document.querySelectorAll('.reveal').forEach(el => {
    revealObserver.observe(el);
  });

  // Create floating particles
  function createParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;
    
    const particleCount = 12;
    
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      
      // Random positioning
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      
      // Random animation delay and duration
      particle.style.animationDelay = Math.random() * 6 + 's';
      particle.style.animationDuration = (Math.random() * 4 + 4) + 's';
      
      particlesContainer.appendChild(particle);
    }
  }

  // Initialize particles
  createParticles();
  
  // Add staggered animation delays to cards
  document.querySelectorAll('.card').forEach((card, index) => {
    card.style.animationDelay = `${index * 0.15}s`;
  });

  // Smooth scroll behavior
  document.documentElement.style.scrollBehavior = 'smooth';
  
});

// Simple parallax effect
let ticking = false;
function updateParallax() {
  const scrolled = window.pageYOffset;
  const hero = document.querySelector('.hero');
  if (hero) {
    hero.style.transform = `translateY(${scrolled * 0.3}px)`;
  }
  ticking = false;
}

window.addEventListener('scroll', function() {
  if (!ticking) {
    requestAnimationFrame(updateParallax);
    ticking = true;
  }
});
