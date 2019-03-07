import tasks from './tasks.js';
import addTask from './addTask.js';

const sortTasks = () => {

  const tasksWithoutWhiteSpace = tasks.map((item)=> {
      return item.replace(/\s/g, "");
    });

  tasksWithoutWhiteSpace.sort((a, b)=> {
    return a.localeCompare(b, undefined, {numeric: true, sensitivity: 'base'});
  });

  return tasksWithoutWhiteSpace;

}

const sortingTasks = () => {
  const tasksContainer = document.querySelector('.tasks-container');
  const tasksContent = document.querySelectorAll('.tasks-container > .tasks-container__task-item > .tasks-container__task-content-container > .tasks-container__task-text-item');

  const sortedTasksArr = sortTasks();

  
  let i = 0;

  for(let taskText of tasksContent) {
    taskText.innerHTML = sortedTasksArr[i];
    i++;
  }
}

export default sortingTasks;