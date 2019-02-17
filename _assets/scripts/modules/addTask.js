import tasks from './tasks.js';
import removeTask from './removeTask.js';
import { paginationData } from './paginationTasks.js';
import increasePagesLength from './updatePagesLength.js';

let taskId = 0;

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

const addTask = function() {
  const tasksContainer = document.querySelector('.tasks-container');
  const taskItem = document.createElement('li');
  const infoPanel = document.querySelector('.to-do__info-panel');

  const liStringTemplate = `
    <form class="tasks-container__task-content-container">
      <input type="checkbox" class="tasks-container__task-checked-item" id="checkedTask${taskId}">
      <label class="tasks-container__task-text-item" for="checkedTask${taskId}">${tasks[tasks.length-1]}</label>
    </form>
    <span class="icon icon-trash-2 tasks-container__remove-task-item"></span>
  `;

  taskId++;

  taskItem.classList.add('tasks-container__task-item');
  taskItem.innerHTML = liStringTemplate;
  tasksContainer.prepend(taskItem);

  counterItemTasks(paginationData);

  infoPanel.classList.add('visible');
  updateTasksLengthCounter();

  // UPDATE PAGES LENGTH
  if(tasks.length % paginationData.itemsOnPage === 1) {
    increasePagesLength();
  }
}

export default addTask;
export { updateTasksLengthCounter };