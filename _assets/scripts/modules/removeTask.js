import tasks from './tasks.js';
import { paginationData } from './paginationTasks.js';
import { paginationTasksToLeft } from './paginationTasks.js';
import { updateTasksLengthCounter } from './addTask.js';
import { decreasePagesLength } from './updatePagesLength.js';
import { showInfoPanel, showSettingsPanel } from './addTask.js';
import { selectedTasksLength } from './selectTasks.js';
import { selectedTasks } from './selectTasks.js';
import { showSelectedTasksOperationPanel } from './selectTasks.js';

const changeSelectedTasksValueObj = removeTaskBtn => {
  const checkboxItem = removeTaskBtn.parentNode.querySelector('.tasks-container__task-checked-item');

  checkboxItem.checked? checkboxItem.checked = false : null;

  --selectedTasks.selected;
}

const updateTasksOnPage = function(removeTaskIndex) {
  let tasksItem = document.querySelectorAll('.tasks-container__task-item');
  tasksItem = [...tasksItem];

  if(tasksItem[paginationData.pageNumber*paginationData.itemsOnPage-1] !== undefined) {
    tasksItem[paginationData.pageNumber*paginationData.itemsOnPage-1].classList.remove('hidden');
  }

  if(tasksItem[removeTaskIndex-1] !== undefined && tasksItem[removeTaskIndex-1].classList.contains('hidden') && tasksItem[removeTaskIndex] === undefined) {
    paginationTasksToLeft();
  }
}

const removeTask = function(removeTaskBtn) {
  let taskItems = document.querySelectorAll('.tasks-container__task-item');
  taskItems = [...taskItems];

  const removeTaskIndex = taskItems.indexOf(removeTaskBtn.parentNode);

  tasks.splice(removeTaskIndex, 1);

  changeSelectedTasksValueObj(removeTaskBtn);
  showSelectedTasksOperationPanel();
  selectedTasksLength();

  removeTaskBtn.parentNode.parentNode.removeChild(removeTaskBtn.parentNode);

  updateTasksLengthCounter();
  updateTasksOnPage(removeTaskIndex);

  if(tasks.length < 1) {
    showInfoPanel(); 
    showSettingsPanel();
  }

  // UPDATE PAGES LENGTH
  if(tasks.length % paginationData.itemsOnPage === 0) {
    decreasePagesLength();
  }
}

export default removeTask;