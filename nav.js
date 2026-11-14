/* Mobile navigation toggle. Shows and hides the stacked nav panel below 820px. */
(function () {
  'use strict';
  var btn = document.querySelector('.menu-btn');
  var panel = document.getElementById('navlinks');
  if (!btn || !panel) return;

  function set(open) {
    panel.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', String(open));
    btn.textContent = open ? 'Close' : 'Menu';
  }

  btn.addEventListener('click', function () {
    set(btn.getAttribute('aria-expanded') !== 'true');
  });

  panel.addEventListener('click', function (e) {
    if (e.target.closest && e.target.closest('a')) set(false);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && btn.getAttribute('aria-expanded') === 'true') {
      set(false);
      btn.focus();
    }
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth > 820) set(false);
  });
})();
