'use strict';
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() {
  menuButton.setAttribute('aria-expanded', 'false');
  navigation.classList.remove('is-open');
}
menuButton.addEventListener('click', () => {
  const expanded = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!expanded));
  navigation.classList.toggle('is-open', !expanded);
});
navigation.addEventListener('click', event => {
  if (event.target.closest('a')) closeMenu();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menuButton.focus();
  }
});
document.addEventListener('click', event => {
  if (!event.target.closest('.header')) closeMenu();
});
window.matchMedia('(min-width: 761px)').addEventListener('change', closeMenu);
const form = document.querySelector('#quote-form');
const result = document.querySelector('#form-result');
const submitButton = form.querySelector('[type="submit"]');
// Local simulation only. No fetch, storage, Netlify form registration, or analytics.
// Prevent native navigation even when JavaScript is unavailable via disabled submit below.
form.addEventListener('submit', event => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  result.hidden = false;
  submitButton.hidden = true;
  result.focus({ preventScroll: true });
  result.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'nearest' });
});
document.querySelector('#reset-demo').addEventListener('click', () => {
  form.reset();
  result.hidden = true;
  submitButton.hidden = false;
  document.querySelector('#name').focus();
});
document.querySelectorAll('[data-service]').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('#service').value = link.dataset.service;
    result.hidden = true;
    submitButton.hidden = false;
  });
});
submitButton.disabled = false;
document.querySelector('#year').textContent = new Date().getFullYear();
