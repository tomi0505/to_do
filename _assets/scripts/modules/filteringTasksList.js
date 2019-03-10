import { activeArray } from './sortingTasks.js';

const checkedOrUnchecked = (i) => {
  const tasksContainer = document.querySelector('.tasks-container');

  let tasksContainerChildrens = tasksContainer.children;
  tasksContainerChildrens = [...tasksContainerChildrens];

  tasksContainerChildrens.reverse();

  let checkboxItem = tasksContainerChildrens[i].querySelector('.tasks-container__task-content-container > .tasks-container__task-checked-item');

  return checkboxItem.checked;
}

const filteringTasksList = function(e) { console.log("key", "e.target.value: ", e.target.value, "this: ", this);
  const checkedTasksResultByFilter = document.querySelector('.filtering-input-result__checked-tasks');

  const uncheckedTasksResultByFilter = document.querySelector('.filtering-input-result__unchecked-tasks');

  let checkedTasks = [];
  let uncheckedTasks = [];

  activeArray.filter((item, index) => {
    if(item.indexOf(e.target.value) !== -1) {
      if(checkedOrUnchecked(index)) {
        checkedTasks.push(item);
      } else {
        uncheckedTasks.push(item);
      }
    }
  });

  checkedTasksResultByFilter.innerHTML = checkedTasks;
  uncheckedTasksResultByFilter.innerHTML = uncheckedTasks;
}

//na inpucie keyup-a ze strzałkami usuń!!!, bo funkcja się wykonuje,
// gdy klikasz strzałki na sfocusowanym inpucie, haaa!!

export default filteringTasksList;