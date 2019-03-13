import tasks from './tasks.js';
import { paginationData } from './paginationTasks.js';
import { paginationTasksToLeft } from './paginationTasks.js';
import { updateTasksLengthCounter } from './addTask.js';
import { decreasePagesLength } from './updatePagesLength.js';
import { pagesLengthCounter } from './updatePagesLength.js';
import { showInfoPanel, showSettingsPanel } from './addTask.js';
import { selectedTasksLength } from './selectTasks.js';
import { selectedTasks } from './selectTasks.js';
import { showSelectedTasksOperationPanel } from './selectTasks.js';
import filteringTasksList from './filteringTasksList.js';
import { checkedTasksObjData } from './filteringTasksList.js';
import { activeArray } from './sortingTasks.js';
import { sortOn } from './sortingTasks.js';

const updateFilterResultsByFilterInput = () => {
  const filteringInput = document.querySelector('.to-do__filtering-input');
  
  if(filteringInput.value.trim() !== "") {
    filteringTasksList.call(filteringInput);
  }
}

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

  if(tasks.length % 5 === 0 && paginationData.pageNumber === pagesLengthCounter) {
    paginationTasksToLeft();
  }
}

const removeTask = function(removeTaskBtn) {
  let taskItems = document.querySelectorAll('.tasks-container__task-item');
  taskItems = [...taskItems];

  const removeTaskIndex = taskItems.indexOf(removeTaskBtn.parentNode);
  
  if(sortOn) {
    // console.log("activeArray: ", activeArray);
    // console.log("tasks: ", tasks);
    // console.log("removeTaskIndex: ", removeTaskIndex);

    tasks.splice(removeTaskIndex, 1);
    activeArray.splice(removeTaskIndex, 1);

    // console.log("activeArray: ", activeArray);
    // console.log("tasks: ", tasks);

  } else {
    // console.log("activeArray: ", activeArray);
    // console.log("tasks: ", tasks);
    // console.log("removeTaskIndex: ", removeTaskIndex);

    tasks.reverse().splice(removeTaskIndex, 1);
    tasks.reverse();

    // console.log("activeArray: ", activeArray);
    // console.log("tasks: ", tasks);
  }

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

  updateFilterResultsByFilterInput();
}

export default removeTask;