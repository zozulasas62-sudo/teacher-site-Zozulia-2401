
const elements = document.querySelectorAll('.fact-card, .presentation-card, .news-card');

const showOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;

  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < triggerBottom) {
      el.classList.add('visible');
    } else {
      el.classList.remove('visible');
    }
  });
};

window.addEventListener('scroll', showOnScroll);
showOnScroll();


// script.js
document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const mainNav = document.querySelector('.main-nav');
  
    // Open/close mobile nav
    navToggle && navToggle.addEventListener('click', () => {
      const opened = mainNav.classList.toggle('open');
      navToggle.classList.toggle('open', opened);
      navToggle.setAttribute('aria-expanded', opened ? 'true' : 'false');
    });
  
    // For mobile: toggle dropdowns on click (desktop uses hover)
    document.querySelectorAll('.menu-item.has-dropdown > a').forEach(link => {
      // create click handler only for touch / narrow screens
      link.addEventListener('click', (e) => {
        const isMobile = window.matchMedia('(max-width:900px)').matches;
        if (!isMobile) return; // desktop: let hover work normally
        // prevent following the top-level link on mobile if it has dropdown
        e.preventDefault();
        const parent = link.parentElement;
        const isOpen = parent.classList.toggle('open');
  
        // close others at same level
        parent.parentElement.querySelectorAll(':scope > .menu-item.open').forEach(sib => {
          if (sib !== parent) sib.classList.remove('open');
        });
      });
    });
  
    // Close mobile nav when clicking outside
    document.addEventListener('click', (e) => {
      const nav = document.querySelector('.main-nav');
      const toggle = document.querySelector('.nav-toggle');
      if (!nav) return;
      if (nav.classList.contains('open')) {
        const insideNav = nav.contains(e.target) || toggle.contains(e.target);
        if (!insideNav) {
          nav.classList.remove('open');
          toggle.classList.remove('open');
          toggle.setAttribute('aria-expanded', 'false');
        }
      }
    });

    // Мобільне меню (якщо додаєш гамбургер)
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.main-nav');

toggle?.addEventListener('click', () => {
  nav.classList.toggle('open');
});
  
    // Improve keyboard navigation: open dropdown on focus, close on blur
    document.querySelectorAll('.menu-item.has-dropdown').forEach(item => {
      const link = item.querySelector('.menu-link') || item.querySelector('a');
      link.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          // toggle on Enter / Space for accessibility
          const isMobile = window.matchMedia('(max-width:900px)').matches;
          if (isMobile) {
            e.preventDefault();
            item.classList.toggle('open');
          }
        }
      });
    });
  });

 

