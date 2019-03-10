const pagesLengthEl = document.querySelector('.to-do__page-length');

let pagesLengthCounter = 0;

const increasePagesLength = () => {
  ++pagesLengthCounter;
  pagesLengthEl.innerHTML = pagesLengthCounter;
}

const decreasePagesLength = () => {
  --pagesLengthCounter;
  pagesLengthEl.innerHTML = pagesLengthCounter;
}

export default increasePagesLength;
export { decreasePagesLength };
export { pagesLengthCounter };