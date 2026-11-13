(() => {
  const cfg = window.PORTFOLIO_CONFIG || {};
  if (cfg.studioName) {
    const brand = document.querySelector('.brand-name');
    if (brand) brand.textContent = cfg.studioName;
  }
  if (cfg.pageTitle) document.title = cfg.pageTitle;
  const target = document.getElementById('contact-action');
  if (target && cfg.contactEmail && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cfg.contactEmail)) {
    target.replaceChildren();
    const anchor = document.createElement('a');
    anchor.className = 'button button-primary';
    anchor.href = 'mailto:' + cfg.contactEmail + '?subject=Software%20project%20inquiry';
    anchor.textContent = 'Send a project inquiry ↗';
    target.appendChild(anchor);
  }
  // Until a public contact email is available, show a useful, honest profile link.
  if (target && !cfg.contactEmail && cfg.githubProfile) {
    target.replaceChildren();
    const anchor = document.createElement('a');
    anchor.className = 'button button-secondary contact-github';
    anchor.href = cfg.githubProfile;
    anchor.target = '_blank';
    anchor.rel = 'noopener noreferrer';
    anchor.textContent = 'View my GitHub profile ↗';
    target.appendChild(anchor);
    const note = document.createElement('p');
    note.className = 'contact-note';
    note.textContent = 'A direct project inquiry email will be added before client outreach.';
    target.appendChild(note);
  }
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.navigation');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('is-open', !expanded);
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded','false');
    }));
  }
})();
