import tasks from './tasks.js';
import { paginationData } from './paginationTasks.js';
import paginationTasksToRight from './paginationTasks.js';
import { lastVisitedPage } from './setTaskContent.js';
import generateLastPageNumber from './setTaskContent.js';
import { hidePageAlertDiv } from './setTaskContent.js';

const returnToSavedTheLastPage = function() {
  const pageAlertDiv = document.querySelector('.last-visited-page-alert');
  const pageNumberEl = document.querySelector('.last-visited-page-alert__page-number');

  if(paginationData.pageNumber <= 1) {

    if(lastVisitedPage===1) {
      for(let i = 0; i < lastVisitedPage; i++) {
        paginationTasksToRight();
      }
    } else {
      for(let i = 0; i < lastVisitedPage-1; i++) {
        paginationTasksToRight();
      }
    }

    pageAlertDiv.classList.remove('visible');
    clearTimeout(hidePageAlertDiv);
  }
}

export default returnToSavedTheLastPage;