
const circle = document.querySelector('.progress');
const progressAnimation = () => {
	let precentageProgress = Math.floor(50);
	let radius = circle.getAttribute('r');
	console.log(radius);
	let circleLenth = 2 * Math.PI * radius;
	console.log(circleLenth);
	circle.setAttribute('stroke-dasharray', circleLenth);
	circle.setAttribute('stroke-dashoffset', circleLenth - circleLenth * precentageProgress / 100);

};

const circles = document.querySelectorAll('.facts-item__circle');
circles.forEach(el => {

  if (el.dataset.percentage == 'true') {
    let progress = el.querySelector('.progress');
    let valueBlock = el.querySelector('.facts-element__value');
    let radius = progress.getAttribute('r');
    let circleLength = 2 * Math.PI * radius;
    let full = el.dataset.full;
    let value = el.dataset.value;
    let percentageProgress = Math.floor(value / full * 100);
    valueBlock.textContent = value;
    progress.setAttribute('stroke-dasharray', circleLength);
    progress.setAttribute('stroke-dashoffset', circleLength - circleLength * percentageProgress / 100);
  } else {
    let progress = el.querySelector('.progress');
    let valueBlock = el.querySelector('.facts-element__value');
    let radius = progress.getAttribute('r');
    let circleLength = 2 * Math.PI * radius;
    let percent = el.dataset.percent;
    let percentageProgress = Math.floor(percent);
    valueBlock.textContent = percent + '%';
    progress.setAttribute('stroke-dasharray', circleLength);
    progress.setAttribute('stroke-dashoffset', circleLength - circleLength * percentageProgress / 100);
  }


});
