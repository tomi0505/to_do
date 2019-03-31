import setTaskContent from './modules/setTaskContent.js';
import removeTask from './modules/removeTask.js';
import paginationTasksToRight from './modules/paginationTasks.js';
import { paginationTasksToLeft } from './modules/paginationTasks.js';
import filteringTasksList from './modules/filteringTasksList.js';
import returnToSavedTheLastPage from './modules/returnToSavedTheLastPage.js';
import selectTasks from './modules/selectTasks.js';
import { showSelectedTasksOperationPanel } from './modules/selectTasks.js';
import { selectedTasksLength } from './modules/selectTasks.js';
import  sortTasks from './modules/sortingTasks.js';
import  removeSelectedTasks from './modules/removeSelectedTasks.js';
import  { viewResultFilteringInputTooltip } from './modules/filteringTasksList.js';

const moveToDoBox = action => {
  const toDoBox = document.querySelector('.to-do');
  if(action === "add") {
    toDoBox.classList.add('active');
  } else if (action === "remove") {
    toDoBox.classList.remove('active');
  }
}

document.addEventListener("DOMContentLoaded", function() {
  const addTaskInput = document.querySelector('.to-do__add-task-input');
  const tasksContainer = document.querySelector('.tasks-container');

  const leftPagesIcon = document.querySelector('.to-do__left-arrow-icon');
  const rightPagesIcon = document.querySelector('.to-do__right-arrow-icon');

  const filteringInputLabel = document.querySelector('.to-do__filtering-input-label');
  const filteringInput = document.querySelector('.to-do__filtering-input');
  const resultFilteringInputTooltip = document.querySelector('.filtering-input-result');
  
  const savedLastPageLink = document.querySelector('.last-visited-page-alert__return-link');

  const selectTasksPanel = document.querySelector('.to-do__select-tasks-panel');
  
  const sortingTasksBtn = document.querySelector('.to-do__sorting-tasks-btn');

  const removeSelectedTasksBtn = document.querySelector('.to-do__remove-selected-tasks-btn');

  addTaskInput.addEventListener('focus', () => {
    moveToDoBox("add");
  }, false);
  
  addTaskInput.addEventListener('keyup', function(e) {
    if(e.keyCode === 13) {
      e.preventDefault();
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
      if(filteringInput.value.trim() !== "") {
        filteringTasksList.call(filteringInput);
      }
    }
  }, false);

  // PAGINATION
  rightPagesIcon.addEventListener('click', paginationTasksToRight, false);
  leftPagesIcon.addEventListener('click', paginationTasksToLeft, false);
  
  document.addEventListener('keyup', function(e) {
    if(document.activeElement !== filteringInput) {
      if(e.keyCode === 39) {
        paginationTasksToRight();
      } else if(e.keyCode === 37) {
        paginationTasksToLeft();
      }
    }
  }, false);

  // SORTING TASKS BTN
  sortingTasksBtn.addEventListener('click', sortTasks, false);

  // FILTERING
  document.addEventListener('click', function(e) {
    if(e.target.classList[0] === 'to-do__filtering-input') {
      filteringInput.classList.add('active');
      viewResultFilteringInputTooltip(filteringInput);
    } else {
      filteringInput.classList.remove('active');
      resultFilteringInputTooltip.classList.remove('visible');
    }
  }, false);

  filteringInput.addEventListener('input', filteringTasksList, false);

  // RETURN TO SAVED LAST PAGE
  savedLastPageLink.addEventListener('click', returnToSavedTheLastPage, false);

  // REMOVE SELECTED TASKS
  removeSelectedTasksBtn.addEventListener('click', removeSelectedTasks, false);

  // SELECT TASKS PANEL
  selectTasksPanel.addEventListener('change', selectTasks, false);
}, false);

export default moveToDoBox;