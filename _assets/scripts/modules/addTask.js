import tasks from './tasks.js';
import removeTask from './removeTask.js';

const addTask = function() {
  const tasksContainer = document.querySelector('.tasks-container');
  const taskItem = document.createElement('li');

  const liStringTemplate = `
    <span class="tasks-container__task-content">${tasks[tasks.length-1]}</span>
    <i class="icon icon-cancel tasks-container__remove-recyle"></i>
  `;

  taskItem.classList.add('tasks-container__task-item');
  taskItem.innerHTML = liStringTemplate;
  tasksContainer.appendChild(taskItem);
}

export default addTask;