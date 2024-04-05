const modalTrigger = document.querySelector('[data-modal]');
const modal = document.querySelector('.modal');
const modalCloseBtn = document.querySelector('[data-close]');

modalTrigger.addEventListener('click', () => {
  modal.classList.add('modal--show');
  modal.classList.remove('modal--hide');
  document.body.style.overflow = 'hidden';
});

function closeModal() {
  modal.classList.add('modal--hide');
  modal.classList.remove('modal--show');
  document.body.style.overflow = '';
}

modalCloseBtn.addEventListener('click', closeModal);

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.code === 'Escape') {
    closeModal();
  }
});
