import { activeArray } from './sortingTasks.js';

const filteringTasksList = function() {
  const tasksContainer = document.querySelector('.tasks-container');
  let tasksItem = document.querySelectorAll('.tasks-container > .tasks-container__task-item');
  let tasksContent = document.querySelectorAll('.tasks-container > .tasks-container__task-item > .tasks-container__task-content-container > .tasks-container__task-text-item');

  tasksContent = [...tasksContent];
  tasksItem = [...tasksItem];

  const filteredTasks = activeArray.filter((item, index) => {
    return item.indexOf(this.value) !== -1;
  });

  console.log("filteredTasks: ", filteredTasks);

  tasksContent.forEach((itemContent) => {
    filteredTasks.forEach((filteredItem) => {
      if(itemContent.textContent === filteredItem) {}
    });
  });
}

export default filteringTasksList;