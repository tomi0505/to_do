import tasks from './tasks.js';

const removeTask = function(removeTaskBtn) {
  let taskItems = document.querySelectorAll('.tasks-container__task-item');
  taskItems = [...taskItems];

  const removeTaskIndex = taskItems.indexOf(removeTaskBtn.parentNode);

  tasks.splice(removeTaskIndex, 1);
  removeTaskBtn.parentNode.parentNode.removeChild(removeTaskBtn.parentNode);
}

export default removeTask;