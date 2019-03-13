import tasks from './tasks.js';

let activeArray = tasks;
let sortOn = false;

const sortTasks = () => {
  const tasksContainer = document.querySelector('.tasks-container');
  let taskItems = document.querySelector('.tasks-container').children;
  taskItems = [...taskItems];

  taskItems.sort((a, b)=> {
    return a.querySelector('.tasks-container__task-content-container > .tasks-container__task-text-item').textContent.replace(/\s/g, "").localeCompare(b.querySelector('.tasks-container__task-content-container > .tasks-container__task-text-item').textContent.replace(/\s/g, ""), undefined, {numeric: true, sensitivity: 'base'});
  });

  tasksContainer.innerHTML = "";

  taskItems.forEach((taskItem) => {
    tasksContainer.appendChild(taskItem);
  });

  activeArray = taskItems.map((taskItem) => {
    return taskItem.querySelector('.tasks-container__task-content-container > .tasks-container__task-text-item').textContent;
  });

  sortOn = true;
}

export default sortTasks;
export { activeArray };
export { sortOn };