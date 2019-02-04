import tasks from './tasks.js';

const removeTask = function(recyle) {
  let taskItems = document.querySelectorAll('.task-item');
  taskItems = [...taskItems];

  const removeTaskIndex = taskItems.indexOf(recyle.parentNode);

  tasks.splice(removeTaskIndex, 1);
  recyle.parentNode.parentNode.removeChild(recyle.parentNode);

  console.log(tasks);
}

export default removeTask;