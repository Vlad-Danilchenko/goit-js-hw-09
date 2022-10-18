import Notiflix from 'notiflix';

const formEl = document.querySelector('.form');
const delayEl = document.querySelector('[name="delay"]');
const stepEl = document.querySelector('[name="step"]');
const amountEl = document.querySelector('[name="amount"]');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(evt) {
  evt.preventDefault();
  let delayPromise = Number(delayEl.value);

  for (let i = 1; i <= amountEl.value; i += 1) {
    createPromise(i, delayPromise).then(onSuccess).catch(onError);
    delayPromise += Number(stepEl.value);
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      }
      reject(`❌ Rejected promise ${position} in ${delay}ms`);
    }, delay);
  });
}

function onSuccess(result) {
  Notiflix.Notify.success(result);
}

function onError(error) {
  Notiflix.Notify.failure(error);
}
