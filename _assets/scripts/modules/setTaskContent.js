import tasks from './tasks.js';
import addTask from './addTask.js';
import { paginationData } from './paginationTasks.js';
import { paginationTasksToLeft } from './paginationTasks.js';

let lastVisitedPage;

const showPageAlertDiv = () => {
  const pageAlertDiv = document.querySelector('.last-visited-page-alert');
  pageAlertDiv.classList.add('visible');

  const hidePageAlertDiv = setTimeout(()=> {
    pageAlertDiv.classList.remove('visible');
  }, 10000);
  //WILL ADD THE CLEAR INTERVAL AFTER CLICK RETURN LINK!! 
}

const generateLastPageNumber = () => {
  const pageNumberEl = document.querySelector('.last-visited-page-alert__page-number');

  pageNumberEl.innerHTML = lastVisitedPage;
}

const setTaskContent = function() {
  const addTaskInput = document.querySelector('.to-do__add-task-input');
  
  tasks.push(addTaskInput.value.trim());
  addTaskInput.value = '';

  // SAVE CURRENT PAGE NUMBER
  lastVisitedPage = paginationData.pageNumber;

  if(paginationData.pageNumber > 1) {
    for(let i = 0; i < lastVisitedPage; i++) {
      paginationTasksToLeft();
    }

    showPageAlertDiv();
    generateLastPageNumber();
  }

  addTask();
}

export default setTaskContent;
export { lastVisitedPage };