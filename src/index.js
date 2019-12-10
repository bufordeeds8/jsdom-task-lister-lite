document.addEventListener("DOMContentLoaded", (event) => {
  // your code here

  const taskForm = document.querySelector('#create-task-form')
  const taskList = document.querySelector('#tasks')

  taskForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const newTask = document.querySelector('#new-task-description').value;
  // const taskItem = document.createElement('li');
  // taskItem.innerText = newTask;
  // taskList.appendChild(taskItem);

  taskList.innerHTML += `
    <li>${newTask}
      <button class="delete-task">X</button>
    </li>
    `
    const button = document.getElementsByClassName('#delete')






  });
 

});
