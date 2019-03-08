import { activeArray } from './sortingTasks.js';

let t = false;

const filteringTasksList = function() {
  const tasksContainer = document.querySelector('.tasks-container');
  let tasksItem = document.querySelectorAll('.tasks-container > .tasks-container__task-item');

  tasksItem = [...tasksItem];


  tasksItem.forEach((taskSimple) => {
    taskSimple.classList.add('filterOff');
  });

  activeArray.reverse();

  activeArray.filter((item, index) => {
    
    if(item.indexOf(this.value) !== -1) {
      tasksItem[index].classList.remove('hidden');
      tasksItem[index].classList.remove('filterOff');

      if(tasksItem.length > 5 && t) {
        tasksItem[index].classList.add('hidden');
        console.log("tescik");

        t = false;
      }

      if(index >= 5) {
        t = true;
      }

    } else {
      console.log('ass2');
    }

  });
}

export default filteringTasksList;