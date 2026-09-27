const pages = document.querySelectorAll('.page');
const navButtons = document.querySelectorAll('[data-tab]');
const form = document.querySelector('.contact-form');
const dialog = document.querySelector('.case-dialog');

function switchPage(pageId) {
  pages.forEach((page) => page.classList.toggle('active', page.id === pageId));
  navButtons.forEach((button) => button.classList.toggle('active', button.dataset.tab === pageId));
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

navButtons.forEach((button) => button.addEventListener('click', () => switchPage(button.dataset.tab)));

document.querySelectorAll('.service-button').forEach((button) => button.addEventListener('click', () => {
  document.querySelector('select[name="service"]').value = button.dataset.service;
  switchPage('contact');
}));

document.querySelectorAll('.filter').forEach((button) => button.addEventListener('click', () => {
  document.querySelectorAll('.filter').forEach((item) => item.classList.toggle('active', item === button));
  document.querySelectorAll('.case-card').forEach((card) => {
    card.hidden = button.dataset.filter !== 'all' && card.dataset.category !== button.dataset.filter;
  });
}));

const cases = {
  crypto: ['FINTECH', 'Crypto Trading Dashboard', 'Интерактивная торговая панель, которая превращает поток сложных данных в понятные ежедневные решения.', 'React · TypeScript · WebSockets', '+45% к удержанию пользователей'],
  luxe: ['E-COMMERCE', 'Luxe Apparel Store', 'Визуально точный магазин с лёгким путём от вдохновения к покупке.', 'Next.js · Tailwind · Stripe', '+32% к конверсии'],
  pulse: ['HEALTH', 'Pulse Health Companion', 'Мобильный помощник, помогающий формировать здоровые привычки через короткие ежедневные ритуалы.', 'React Native · Node.js · Figma', '4.9/5 средняя оценка'],
};

document.querySelectorAll('.case-trigger').forEach((button) => button.addEventListener('click', () => {
  const [tag, title, description, stack, result] = cases[button.dataset.case];
  document.querySelector('.dialog-tag').textContent = tag;
  document.querySelector('.dialog-title').textContent = title;
  document.querySelector('.dialog-description').textContent = description;
  document.querySelector('.dialog-stack').textContent = stack;
  document.querySelector('.dialog-result').textContent = result;
  dialog.showModal();
}));
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
document.querySelector('.dialog-contact').addEventListener('click', () => { dialog.close(); switchPage('contact'); });
dialog.addEventListener('click', (event) => { if (event.target === dialog) dialog.close(); });
form.addEventListener('submit', (event) => { event.preventDefault(); form.reset(); form.querySelector('.form-message').textContent = 'Спасибо! Ваша заявка принята — скоро свяжусь с вами.'; });
