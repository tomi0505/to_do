import tasks from './tasks.js';
import removeTask from './removeTask.js';

let taskId = 0;

const addTask = function() {
  const tasksContainer = document.querySelector('.tasks-container');
  const taskItem = document.createElement('li');

  const liStringTemplate = `
    <form class="tasks-container__task-content-container">
      <input type="checkbox" class="tasks-container__task-checked-item" id="checkedTask${taskId}">
      <label class="tasks-container__task-text-item" for="checkedTask${taskId}">${tasks[tasks.length-1]}</label>
    </form>
    <span class="tasks-container__remove-task-item">&#10005;</span>
  `;

  taskId++;

  taskItem.classList.add('tasks-container__task-item');
  taskItem.innerHTML = liStringTemplate;
  tasksContainer.appendChild(taskItem);
}

export default addTask;