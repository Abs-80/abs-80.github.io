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
  // Offer LinkedIn and GitHub contact options until a public business email is provided.
  // LinkedIn remains available alongside the email once one is set.
  if (target) {
    if (!cfg.contactEmail) target.replaceChildren();
    const socials = document.createElement('div');
    socials.className = 'contact-socials';
    const links = [
      [cfg.linkedinProfile, 'Connect on LinkedIn ↗'],
      [cfg.githubProfile, 'View GitHub ↗']
    ];
    links.forEach(([url, label]) => {
      if (!url || !/^https:\/\//.test(url)) return;
      const a = document.createElement('a');
      a.className = 'button button-secondary contact-github';
      a.href = url;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      a.textContent = label;
      socials.appendChild(a);
    });
    target.appendChild(socials);
    if (!cfg.contactEmail) {
      const note = document.createElement('p');
      note.className = 'contact-note';
      note.textContent = 'You can reach out through LinkedIn while I set up a dedicated project inbox.';
      target.appendChild(note);
    }
  }
  // Native dialogs keep the project grid stable and support keyboard Escape to close.
  document.querySelectorAll('[data-case-dialog]').forEach(trigger => {
    const dialog = document.getElementById(trigger.dataset.caseDialog);
    if (!dialog || typeof dialog.showModal !== 'function') return;
    trigger.addEventListener('click', () => dialog.showModal());
    dialog.querySelectorAll('.case-modal-close').forEach(button => {
      button.addEventListener('click', () => dialog.close());
    });
    dialog.addEventListener('click', event => {
      if (event.target !== dialog) return;
      const rect = dialog.getBoundingClientRect();
      if (event.clientX < rect.left || event.clientX > rect.right ||
          event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
    });
  });
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
