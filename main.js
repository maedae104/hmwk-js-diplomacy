'use strict';
function changeColors() {
    const colorChangeEls = document.querySelectorAll('.color-change');

    for (const el of colorChangeEls) {
      el.classList.add('red');
    }
  }


function validateNumber(evt) {
    el.preventDefault();

    const numberInput = document.querySelector('#number-input');
    const userNum = Number(numberInput.value);

    const formFeedback = document.querySelector('#formFeedback');
    if (isNaN(userNum) || userNum >= 10) {
        formFeedback.innerText = 'Please enter a smaller number';
    } else {
        formFeedback.innerText = 'You are good to go'
    }
}

document.querySelector('.color-changer').addEventListener('click', changeColor);
document.querySelector('.number-form').addEventListener('submit', validateNumber);

