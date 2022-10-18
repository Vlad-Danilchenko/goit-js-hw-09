function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
let colorChangeIntervalId = null;
const INTERVAL_DELAY = 1000;

const startBtnRef = document.querySelector('button[data-start]');
const stopBtnRef = document.querySelector('button[data-stop]');

startBtnRef.addEventListener('click', onStartBtnClick);
stopBtnRef.addEventListener('click', onStopBtnClick);

function onStartBtnClick(event) {
  document.body.style.backgroundColor = getRandomHexColor();
  colorChangeIntervalId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, INTERVAL_DELAY);

  event.currentTarget.disabled = true;
}

function onStopBtnClick(event) {
  clearInterval(colorChangeIntervalId);
  startBtnRef.disabled = false;
}
