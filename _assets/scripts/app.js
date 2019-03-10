import setTaskContent from './modules/setTaskContent.js';
import removeTask from './modules/removeTask.js';
import paginationTasksToRight from './modules/paginationTasks.js';
import { paginationTasksToLeft } from './modules/paginationTasks.js';
import filteringTasksList from './modules/filteringTasksList.js';
import returnToSavedTheLastPage from './modules/returnToSavedTheLastPage.js';
import selectTasks from './modules/selectTasks.js';
import { showSelectedTasksOperationPanel } from './modules/selectTasks.js';
import { selectedTasksLength } from './modules/selectTasks.js';
import  renderTasksDOM from './modules/sortingTasks.js';

document.addEventListener("DOMContentLoaded", function() {
  const addTaskInput = document.querySelector('.to-do__add-task-input');
  const tasksContainer = document.querySelector('.tasks-container');

  const leftPagesIcon = document.querySelector('.to-do__left-arrow-icon');
  const rightPagesIcon = document.querySelector('.to-do__right-arrow-icon');

  const filteringInputLabel = document.querySelector('.to-do__filtering-input-label');
  const filteringInput = document.querySelector('.to-do__filtering-input');
  
  const savedLastPageLink = document.querySelector('.last-visited-page-alert__return-link');

  const selectTasksPanel = document.querySelector('.to-do__select-tasks-panel');
  
  const sortingTasksBtn = document.querySelector('.to-do__sorting-tasks-btn');
  
  addTaskInput.addEventListener('keyup', function(e) {
    if(e.keyCode === 13) {
      setTaskContent();
    }
  }, false);

  tasksContainer.addEventListener('click', function(e) {
    const removeTaskBtn = e.target.classList.contains('tasks-container__remove-task-item');

    const checkboxItem = e.target.classList.contains('tasks-container__task-checked-item');
    
    if(removeTaskBtn) {
      removeTask(e.target);
    }

    if(checkboxItem) {
      showSelectedTasksOperationPanel();
      selectedTasksLength();
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

  // SORTING TASKS BTN
  sortingTasksBtn.addEventListener('click', renderTasksDOM, false);

  // FILTERING
  document.addEventListener('click', function(e) {
    if(e.target.classList[0] === 'to-do__filtering-input') {
      filteringInput.classList.add('active');
    } else {
      filteringInput.classList.remove('active');
    }
  }, false);

  filteringInput.addEventListener('input', e => {
    // if(!(e.keyCode >= 37) || !(e.keyCode <= 40)) {
      filteringTasksList(e);
    // }
  }, false);

  // RETURN TO SAVED LAST PAGE
  savedLastPageLink.addEventListener('click', returnToSavedTheLastPage, false);

  // SELECT TASKS PANEL
  selectTasksPanel.addEventListener('change', selectTasks, false);
}, false);