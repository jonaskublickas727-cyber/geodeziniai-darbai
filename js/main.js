document.addEventListener('DOMContentLoaded', () => {

  // ---- Header scroll state ----
  const header = document.getElementById('siteHeader');
  const onScroll = () => {
    header.classList.toggle('is-scrolled', window.scrollY > 20);
    backToTop.classList.toggle('show', window.scrollY > 500);
  };
  window.addEventListener('scroll', onScroll, { passive: true });

  // ---- Mobile nav ----
  const navToggle = document.getElementById('navToggle');
  const mobileNav = document.getElementById('mobileNav');
  const mobileNavClose = document.getElementById('mobileNavClose');
  const navOverlay = document.getElementById('navOverlay');

  const openNav = () => { mobileNav.classList.add('open'); navOverlay.classList.add('show'); document.body.style.overflow = 'hidden'; };
  const closeNav = () => { mobileNav.classList.remove('open'); navOverlay.classList.remove('show'); document.body.style.overflow = ''; };

  navToggle.addEventListener('click', openNav);
  mobileNavClose.addEventListener('click', closeNav);
  navOverlay.addEventListener('click', closeNav);
  mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeNav));

  // ---- Active nav link on scroll ----
  const sections = document.querySelectorAll('section[id], div.stats-band[id]');
  const navLinks = document.querySelectorAll('.main-nav a');
  const sectionIds = ['pradzia','paslaugos','apie','eiga','atsiliepimai','duk','kontaktai'];
  const observedSections = sectionIds.map(id => document.getElementById(id)).filter(Boolean);

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id);
        });
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px' });

  observedSections.forEach(sec => sectionObserver.observe(sec));

  // ---- Reveal on scroll ----
  const revealEls = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach(el => revealObserver.observe(el));

  // ---- Back to top ----
  const backToTop = document.getElementById('backToTop');

  // ---- FAQ accordion ----
  document.querySelectorAll('.faq-item').forEach(item => {
    const q = item.querySelector('.faq-q');
    const a = item.querySelector('.faq-a');
    q.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(openItem => {
        openItem.classList.remove('open');
        openItem.querySelector('.faq-a').style.maxHeight = null;
      });
      if (!isOpen) {
        item.classList.add('open');
        a.style.maxHeight = a.scrollHeight + 'px';
      }
    });
  });

  // ---- Quote form (client-side only demo) ----
  const form = document.getElementById('quoteForm');
  const formSuccess = document.getElementById('formSuccess');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    // NOTE: This is a front-end demo only. Connect this form to a backend
    // or a service such as Formspree / EmailJS to actually receive submissions.
    formSuccess.classList.add('show');
    form.reset();
    formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });

  // ---- Footer year ----
  document.getElementById('year').textContent = new Date().getFullYear();
});
