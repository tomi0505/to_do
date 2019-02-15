import tasks from './tasks.js';
import { paginationData } from './paginationTasks.js';
import paginationTasksToRight from './paginationTasks.js';
import { lastVisitedPage } from './setTaskContent.js';
import generateLastPageNumber from './setTaskContent.js';

const returnToSavedTheLastPage = function() {
  const pageAlertDiv = document.querySelector('.last-visited-page-alert');
  
  if(paginationData.pageNumber <= 1) {
    for(let i = 1; i < lastVisitedPage; i++) {
      paginationTasksToRight();
    }

    pageAlertDiv.classList.remove('visible');
  }
}

export default returnToSavedTheLastPage;