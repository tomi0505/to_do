import tasks from './tasks.js';
import removeTask from './removeTask.js';

const addTask = function() {
  const tasksContainer = document.querySelector('.to-do__tasks');
  const taskItem = document.createElement('li');

  const liStringTemplate = `
    <span>${tasks[tasks.length-1]}</span>
    <i class="icon icon-bin2 remove-recyle"></i>
  `;

  taskItem.classList.add('task-item');
  taskItem.innerHTML = liStringTemplate;
  tasksContainer.appendChild(taskItem);
}

export default addTask;