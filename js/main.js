document.addEventListener('DOMContentLoaded', () => {

  // Smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // Header background on scroll
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (!header) return;
    if (window.scrollY > 100) {
      header.classList.add('bg-white');
      header.classList.remove('bg-white/90');
    } else {
      header.classList.add('bg-white/90');
      header.classList.remove('bg-white');
    }
  });

  // Mobile menu
  const openMenuBtn = document.getElementById('openMenu');
  const closeMenuBtn = document.getElementById('closeMenu');
  const mobileMenu = document.getElementById('mobileMenu');

  if (openMenuBtn && closeMenuBtn && mobileMenu) {
    openMenuBtn.addEventListener('click', () => mobileMenu.classList.remove('hidden'));
    closeMenuBtn.addEventListener('click', () => mobileMenu.classList.add('hidden'));

    mobileMenu.addEventListener('click', (e) => {
      if (e.target === mobileMenu) mobileMenu.classList.add('hidden');
    });
  }

});
