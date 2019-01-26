import tasks from './tasks.js';

const removeTask = function() {
  let removeRecyle = document.querySelectorAll('.remove-recyle');
  removeRecyle = [...removeRecyle];

  removeRecyle.forEach((recyleItem)=> {
    recyleItem.addEventListener('click', function() {
      console.log(tasks);
    }, false);
  });
}

export default removeTask;