import { activeArray } from './sortingTasks.js';

const checkedTasksObjData = {
  checkedTasks: [],
  uncheckedTasks: []
}

const viewResultFilteringInputTooltip = inputEl => {
  const resultFilteringInputTooltip = document.querySelector('.filtering-input-result');

  if(inputEl.value.trim() !== "") {
    resultFilteringInputTooltip.classList.add('visible');
  } else {
    resultFilteringInputTooltip.classList.remove('visible');
  }
}

const checkedOrUnchecked = (i) => {
  const tasksContainer = document.querySelector('.tasks-container');

  let tasksContainerChildrens = tasksContainer.children;
  tasksContainerChildrens = [...tasksContainerChildrens];

  tasksContainerChildrens.reverse();

  let checkboxItem = tasksContainerChildrens[i].querySelector('.tasks-container__task-content-container > .tasks-container__task-checked-item');

  return checkboxItem.checked;
}

const filteringTasksList = function() {
  const checkedTasksResultByFilter = document.querySelector('.filtering-input-result__checked-tasks');

  const uncheckedTasksResultByFilter = document.querySelector('.filtering-input-result__unchecked-tasks');

  viewResultFilteringInputTooltip(this);

  checkedTasksObjData.checkedTasks.splice(0);
  checkedTasksObjData.uncheckedTasks.splice(0);

  activeArray.filter((item, index) => {
    if(item.indexOf(this.value) !== -1) {
      if(checkedOrUnchecked(index)) {
        checkedTasksObjData.checkedTasks.push(item);
      } else {
        checkedTasksObjData.uncheckedTasks.push(item);
      }
    }
  });

  checkedTasksResultByFilter.innerHTML = checkedTasksObjData.checkedTasks;
  uncheckedTasksResultByFilter.innerHTML = checkedTasksObjData.uncheckedTasks;
}

export default filteringTasksList;
export { viewResultFilteringInputTooltip };
export { checkedTasksObjData };