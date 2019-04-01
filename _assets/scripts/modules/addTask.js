import tasks from './tasks.js';
import removeTask from './removeTask.js';
import { paginationData } from './paginationTasks.js';
import increasePagesLength from './updatePagesLength.js';
import { updatePageNumber } from './paginationTasks.js';
import { sortOn } from './sortingTasks.js';
import filteringTasksList from './filteringTasksList.js';

let taskId = 0;
let firstUpdatePageNumber = true;
let activeArray = tasks;

const updateTasksLengthCounter = () => {
  const tasksLengthEl = document.querySelector('.to-do__tasks-length');
  tasksLengthEl.innerHTML = tasks.length;
}

const counterItemTasks = paginationData => {
  let tasksItem = document.querySelectorAll('.tasks-container__task-item');
  tasksItem = [...tasksItem];

  if(tasks.length-1 > (paginationData.itemsOnPage * paginationData.pageNumber)-1) {
    tasksItem.forEach((task, index)=> {
      if(index > (paginationData.itemsOnPage * paginationData.pageNumber)-1) {
        task.classList.add('hidden');
      }
    });
  }
}

const addBottomMarginForAddTasksForm = () => {
  const addTasksForm = document.querySelector('.to-do__add-tasks-form');
  addTasksForm.classList.toggle('active');
}

const showInfoPanel = () => {
  const infoPanel = document.querySelector('.to-do__info-panel');
  infoPanel.classList.toggle('visible');
}

const showSettingsPanel = () => {
  const settingsPanel = document.querySelector('.to-do__settings-panel');
  settingsPanel.classList.toggle('visible');
}

const addTask = function() {
  const tasksContainer = document.querySelector('.tasks-container');
  const taskItem = document.createElement('li');

  const filteringInput = document.querySelector('.to-do__filtering-input');

  let liStringTemplate;

  if(sortOn) {
    liStringTemplate = `
      <form class="tasks-container__task-content-container">
        <input type="checkbox" class="tasks-container__task-checked-item" id="checkedTask${taskId}">
        <label class="tasks-container__task-text-item" for="checkedTask${taskId}">${tasks[0]}</label>
      </form>
      <span class="icon icon-bin tasks-container__remove-task-item"></span>
    `;

  } else {
    liStringTemplate = `
      <form class="tasks-container__task-content-container">
        <input type="checkbox" class="tasks-container__task-checked-item" id="checkedTask${taskId}">
        <label class="tasks-container__task-text-item" for="checkedTask${taskId}">${tasks[tasks.length-1]}</label>
      </form>
      <span class="icon icon-bin tasks-container__remove-task-item"></span>
    `;
  }

  taskId++;

  taskItem.classList.add('tasks-container__task-item');
  taskItem.innerHTML = liStringTemplate;
  tasksContainer.prepend(taskItem);

  if(firstUpdatePageNumber) {
    updatePageNumber();
    firstUpdatePageNumber = false;
  }

  counterItemTasks(paginationData);

  if(tasks.length <= 1) {
    showInfoPanel(); 
    showSettingsPanel();
    addBottomMarginForAddTasksForm();
  }

  updateTasksLengthCounter();

  // UPDATE THE FILTERING INPUT
  // IF IS NOT EMPTY
  if(filteringInput.value.trim() !== "") {
    filteringTasksList.call(filteringInput);
  }

  // UPDATE PAGES LENGTH
  if(tasks.length % paginationData.itemsOnPage === 1) {
    increasePagesLength();
  }
}

export default addTask;
export { updateTasksLengthCounter };
export { showInfoPanel, showSettingsPanel };
export { activeArray };
export { addBottomMarginForAddTasksForm };