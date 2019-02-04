import setTaskContent from './modules/setTaskContent.js';
import removeTask from './modules/removeTask.js';

document.addEventListener("DOMContentLoaded", function() {
  const setText = document.querySelector('.to-do__set-text');
	const addTextBtn = document.querySelector('.to-do__add-btn');
  const tasksContainer = document.querySelector('.to-do__tasks');
  
  setText.addEventListener('keyup', function(e) {
    if(e.keyCode === 13) {
      setTaskContent();
    }
  }, false);

  addTextBtn.addEventListener('click', setTaskContent, false);

  tasksContainer.addEventListener('click', function(e) {
    const recyle = e.target.classList.contains('remove-recyle');
    
    if(recyle) {
      removeTask(e.target);
    }
  }, false);
}, false);