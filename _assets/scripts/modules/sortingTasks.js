import tasks from './tasks.js';
import { paginationData } from './paginationTasks.js';
import filteringTasksList from './filteringTasksList.js';
import { updateFilterResultsByFilterInput } from './filteringTasksList.js';
import { activeArray } from './addTask.js';

let sortOn = false;

const sortTasks = () => {
  const tasksContainer = document.querySelector('.tasks-container');
  const filteringInput = document.querySelector('.to-do__filtering-input');
  let taskItems = document.querySelector('.tasks-container').children;
  taskItems = [...taskItems];

  taskItems.sort((a, b)=> {
    return a.querySelector('.tasks-container__task-content-container > .tasks-container__task-text-item').textContent.replace(/\s/g, "").localeCompare(b.querySelector('.tasks-container__task-content-container > .tasks-container__task-text-item').textContent.replace(/\s/g, ""), undefined, {numeric: true, sensitivity: 'base'});
  });

  tasksContainer.innerHTML = "";

  taskItems.forEach((taskItem, index) => {
    if(taskItem.classList.contains('hidden')) {
      taskItem.classList.remove('hidden');
    }

    tasksContainer.appendChild(taskItem);

    if(index > paginationData.itemsOnPage-1) {
      taskItem.classList.add('hidden');
    }
  });

  activeArray.splice(0);

  taskItems.map((taskItem) => {
    activeArray.push(taskItem.querySelector('.tasks-container__task-content-container > .tasks-container__task-text-item').textContent);
  });

  sortOn = true;
}

export default sortTasks;
export { activeArray };
export { sortOn };