import tasks from './tasks.js';
import addTask from './addTask.js';

const sortTasks = () => {
  const mainArr = [];

  const someNumbersArr = [];
  const firstNumbersArr = [];
  const someStringsArr = [];

  const patternStr1 = /^[0-9]/;
  const patternStr2 = /^[0-9]+[\s]/;
  const patternStr3 = /^[0-9]+[\S]/;


  tasks.map((item, index, originalArr)=> {
    if(Number(item) || Number(item) === 0 || Number(item) === -0) {
      someNumbersArr.push(item);
    } else if(patternStr1.test(item)) {
      firstNumbersArr.push(item);
    } else {
      someStringsArr.push(item);
    }
  });

  // I
  someNumbersArr.sort((a, b) => a-b);

  // II
  // firstNumbersArr.sort((a, b) => {
  //   if(patternStr1.test(a)) {
  //     if(patternStr2.test(a) && patternStr3.test(b) || patternStr2.test(b) && patternStr3.test(a)) {
  //       if(a[1] < b[2]) {
  //         return -1;
  //       }
  //     }  
  //   }
  // });

  firstNumbersArr.sort();

  // III
  someStringsArr.sort();

  console.log('someNumbersArr: ', someNumbersArr);
  console.log('firstNumbersArr: ', firstNumbersArr);
  console.log('someStringsArr: ', someStringsArr);

  console.log('mainArr: ', mainArr);
}

const sortingTasks = () => {
  const tasksContainer = document.querySelector('.tasks-container');
  const tasksContent = document.querySelectorAll('.tasks-container > .tasks-container__task-item > .tasks-container__task-content-container > .tasks-container__task-text-item');

  sortTasks();

  
  let i = 0;

  for(let taskText of tasksContent) {
    taskText.innerHTML = tasks[i];
    i++;
  }
}

export default sortingTasks;