import tasks from './tasks.js';

let elementsOnPage;
let pageCounter = tasks.length / 5;

const paginationData = {
  pageNumber: 1
}

const paginationTasks = () => {
  let tasksItem = document.querySelectorAll('.tasks-container__task-item');
  tasksItem = [...tasksItem];

  if(tasks.length > 5*paginationData.pageNumber) {
    tasksItem.forEach((task, index)=> {
      task.classList.add('hidden');
      if(index+1 > 5*paginationData.pageNumber && index+1 <= 5*(paginationData.pageNumber+1)) {
        task.classList.remove('hidden');
      }
    });

    ++paginationData.pageNumber;
  }
}

export default paginationTasks;
export { paginationData };