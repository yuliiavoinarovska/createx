const portfolioTabsNav = document.querySelector('.portfolio-tabs-nav');

portfolioTabsNav.addEventListener('click', (e) => {
  const { target } = e;
  if (target.classList.contains('.portfolio-tabs-nav__btn')) {
    console.log('asd');

    const { path } = target.dataset;

    document.querySelectorAll('.portfolio-tabs__item').forEach((el) => { el.style.display = 'none' });

    document.querySelectorAll(`[data-target="${path}"]`).forEach((el) => {
      el.classList.add('.portfolio-tabs__item--visible');
    });
  }
});
