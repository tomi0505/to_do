import tasks from './tasks.js';
import addTask from './addTask.js';
import { paginationData } from './paginationTasks.js';
import { paginationTasksToLeft } from './paginationTasks.js';

let lastVisitedPage;

const generateLastPageNumber = () => {
  const pageNumberEl = document.querySelector('.last-visited-page-alert__page-number');

  pageNumberEl.innerHTML = lastVisitedPage;
}

const setTaskContent = function() {
  const addTaskInput = document.querySelector('.to-do__add-task-input');
  const pageAlertDiv = document.querySelector('.last-visited-page-alert');
  
  tasks.push(addTaskInput.value.trim());
  addTaskInput.value = '';

  // SAVE CURRENT PAGE NUMBER
  lastVisitedPage = paginationData.pageNumber;

  if(paginationData.pageNumber > 1) {
    for(let i = 0; i < lastVisitedPage; i++) {
      paginationTasksToLeft();
      pageAlertDiv.classList.add('visible');
    }
    generateLastPageNumber();
  }

  addTask();
}

export default setTaskContent;
export { lastVisitedPage };