import setTaskContent from './modules/setTaskContent.js';
import removeTask from './modules/removeTask.js';

document.addEventListener("DOMContentLoaded", function() {
  const addTaskInput = document.querySelector('.to-do__add-task-input');
  const tasksContainer = document.querySelector('.tasks-container');
  
  addTaskInput.addEventListener('keyup', function(e) {
    if(e.keyCode === 13) {
      setTaskContent();
    }
  }, false);

  tasksContainer.addEventListener('click', function(e) {
    const removeTaskBtn = e.target.classList.contains('tasks-container__remove-recyle');
    
    if(removeTaskBtn) {
      removeTask(e.target);
    }
  }, false);
}, false);