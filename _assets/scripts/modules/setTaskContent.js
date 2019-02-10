import tasks from './tasks.js';
import addTask from './addTask.js';
import { paginationData } from './paginationTasks.js';
import { paginationTasksToLeft } from './paginationTasks.js';

const setTaskContent = function() {
  const addTaskInput = document.querySelector('.to-do__add-task-input');
  
  tasks.push(addTaskInput.value.trim());
  addTaskInput.value = '';

  if(paginationData.pageNumber > 1) {
    paginationTasksToLeft();
    console.log('ok');
  }

  addTask();
}

export default setTaskContent;