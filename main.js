'use strict';
function changeColors() {
    const colorChangeEls = document.querySelectorAll('.color-change');

    for (const el of colorChangeEls) {
      el.classList.add('red');
    }
  }


