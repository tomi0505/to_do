import tasks from './tasks.js';
import addTask from './addTask.js';

const setTaskContent = function() {
  const setText = document.querySelector('.to-do__set-text');
  
  tasks.push(setText.value);
  setText.value = '';

  addTask();
}

export default setTaskContent;