import setTaskContent from './modules/setTaskContent.js';
import removeTask from './modules/removeTask.js';
import paginationTasksToRight from './modules/paginationTasks.js';
import { paginationTasksToLeft } from './modules/paginationTasks.js';

document.addEventListener("DOMContentLoaded", function() {
  const addTaskInput = document.querySelector('.to-do__add-task-input');
  const tasksContainer = document.querySelector('.tasks-container');

  const leftPagesIcon = document.querySelector('.to-do__left-arrow-icon');
  const rightPagesIcon = document.querySelector('.to-do__right-arrow-icon');
  
  addTaskInput.addEventListener('keyup', function(e) {
    if(e.keyCode === 13) {
      setTaskContent();
    }
  }, false);

  tasksContainer.addEventListener('click', function(e) {
    const removeTaskBtn = e.target.classList.contains('tasks-container__remove-task-item');
    
    if(removeTaskBtn) {
      removeTask(e.target);
    }
  }, false);

  rightPagesIcon.addEventListener('click', paginationTasksToRight, false);
  leftPagesIcon.addEventListener('click', paginationTasksToLeft, false);
}, false);