import tasks from './tasks.js';
import { paginationData } from './paginationTasks.js';
import paginationTasksToRight from './paginationTasks.js';
import { lastVisitedPage } from './setTaskContent.js';
import generateLastPageNumber from './setTaskContent.js';
import { hidePageAlertDiv } from './setTaskContent.js';

const returnToSavedTheLastPage = function() {
  const pageAlertDiv = document.querySelector('.last-visited-page-alert');
  const pageNumberEl = document.querySelector('.last-visited-page-alert__page-number');
  
  console.log('paginationData.pageNumber: ', paginationData.pageNumber, 'lastVisitedPage: ', lastVisitedPage-1, 'pageNumberEl: ', pageNumberEl.textContent);

  if(paginationData.pageNumber <= 1) {

    if(lastVisitedPage===1) {
      for(let i = 0; i < lastVisitedPage; i++) {
        paginationTasksToRight();
        console.log('i');
      }
    } else {
      for(let i = 0; i < lastVisitedPage-1; i++) {
        paginationTasksToRight();
        console.log('i');
      }
    }

    pageAlertDiv.classList.remove('visible');
    clearTimeout(hidePageAlertDiv);
  }
}

export default returnToSavedTheLastPage;