import setTaskContent from './modules/setTaskContent.js';

document.addEventListener("DOMContentLoaded", function() {
	const addTextBtn = document.querySelector('.to-do__add-btn');
  addTextBtn.addEventListener('click', setTaskContent, false);
}, false);