import tasks from './tasks.js';
import addTask from './addTask.js';

const setTaskContent = function() {
  const addTaskInput = document.querySelector('.to-do__add-task-input');
  
  tasks.push(addTaskInput.value);
  addTaskInput.value = '';

  addTask();
}

export default setTaskContent;