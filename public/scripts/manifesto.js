'use strict';

const LOAD_EVENT = 'load';
const SCROLL_EVENT = 'scroll';
const LOADING_CLASS = 'loading';

const fontLinkEl = document.getElementById('font-stylesheet');
const imgEls = document.querySelectorAll('img.lazy-load');

fontLinkEl.rel = 'stylesheet';

imgEls.forEach((el) => {
  const url = el.dataset.src;
  const eventHandler = (event) => {
    event.target.classList.remove(LOADING_CLASS);
    event.target.removeEventListener(LOAD_EVENT, eventHandler);
  };

  el.classList.add(LOADING_CLASS);
  el.addEventListener(LOAD_EVENT, eventHandler);
  el.src = url;
  el.dataset.src = null;
});

const SCROLL_THRESHOLD = parseFloat(getComputedStyle(document.body).fontSize) * 2.8125;
const SCROLL_CLASS = 'scrolled';
let isPastThreshold = false;

window.addEventListener(SCROLL_EVENT, (event) => {
  if (!isPastThreshold && document.scrollingElement.scrollTop >= SCROLL_THRESHOLD) {
    isPastThreshold = true;
    document.documentElement.classList.add(SCROLL_CLASS);
  } else if (isPastThreshold && document.scrollingElement.scrollTop < SCROLL_THRESHOLD) {
    isPastThreshold = false;
    document.documentElement.classList.remove(SCROLL_CLASS);
  }
});
