import tasks from './tasks.js';

const paginationData = {
  pageNumber: 1,
  itemsOnPage: 5
}

let pageCounter = tasks.length / paginationData.itemsOnPage;

const hiddenReturnToLastPageAlert = () => {
  const pageAlertDiv = document.querySelector('.last-visited-page-alert');
  const visibleEl = pageAlertDiv.classList.contains('visible');
  if(visibleEl) {
    pageAlertDiv.classList.remove('visible');
  }
}

const updatePageNumber = () => {
  const pageNumber = document.querySelector('.to-do__page-number');
  pageNumber.innerHTML = paginationData.pageNumber;
}

const paginationTasksToLeft = () => {
  let tasksItem = document.querySelectorAll('.tasks-container__task-item');
  tasksItem = [...tasksItem];

  if(paginationData.pageNumber > 1) {
    tasksItem.forEach((task, index) => {
      task.classList.add('hidden');
      if(index < paginationData.itemsOnPage*(paginationData.pageNumber-1) && index >= (paginationData.itemsOnPage*(paginationData.pageNumber-1))-paginationData.itemsOnPage) {
        
        task.classList.remove('hidden');
      }
    });

    --paginationData.pageNumber;
  }

  updatePageNumber();
  hiddenReturnToLastPageAlert();
}

const paginationTasksToRight = () => {
  let tasksItem = document.querySelectorAll('.tasks-container__task-item');
  tasksItem = [...tasksItem];

  if(tasks.length > paginationData.itemsOnPage*paginationData.pageNumber) {
    tasksItem.forEach((task, index) => {
      task.classList.add('hidden');
      if(index+1 > paginationData.itemsOnPage*paginationData.pageNumber && index+1 <= paginationData.itemsOnPage*(paginationData.pageNumber+1)) {
        task.classList.remove('hidden');
      }
    });

    ++paginationData.pageNumber;
  }

  updatePageNumber();
  hiddenReturnToLastPageAlert();
}

export { paginationData };
export default paginationTasksToRight;
export { paginationTasksToLeft };
export { updatePageNumber };