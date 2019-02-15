import setTaskContent from './modules/setTaskContent.js';
import removeTask from './modules/removeTask.js';
import paginationTasksToRight from './modules/paginationTasks.js';
import { paginationTasksToLeft } from './modules/paginationTasks.js';
import filteringTasksList from './modules/filteringTasksList.js';
import returnToSavedTheLastPage from './modules/returnToSavedTheLastPage.js';

document.addEventListener("DOMContentLoaded", function() {
  const addTaskInput = document.querySelector('.to-do__add-task-input');
  const tasksContainer = document.querySelector('.tasks-container');

  const leftPagesIcon = document.querySelector('.to-do__left-arrow-icon');
  const rightPagesIcon = document.querySelector('.to-do__right-arrow-icon');

  const filteringInputLabel = document.querySelector('.to-do__filtering-input-label');
  const filteringInput = document.querySelector('.to-do__filtering-input');
  
  const savedLastPageLink = document.querySelector('.last-visited-page-alert__return-link');
  
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

  // PAGINATION
  rightPagesIcon.addEventListener('click', paginationTasksToRight, false);
  leftPagesIcon.addEventListener('click', paginationTasksToLeft, false);
  
  document.addEventListener('keyup', function(e) {
    if(e.keyCode === 39) {
      paginationTasksToRight();
    } else if(e.keyCode === 37) {
      paginationTasksToLeft();
    }
  }, false);

  // FILTERING
  filteringInputLabel.addEventListener('click', function() {
    this.classList.toggle('active');
  }, false);

  filteringInput.addEventListener('keyup', filteringTasksList, false);

  // RETURN TO SAVED LAST PAGE
  savedLastPageLink.addEventListener('click', returnToSavedTheLastPage, false);
}, false);