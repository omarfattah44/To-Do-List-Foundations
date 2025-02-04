console.log('My code is running!');
// These will be the element on the page that will be interacted with as variables
const taskInput = document.getElementById('todo-input');
const addButton = document.getElementById('add-button');
const Tasks = document.getElementById('Tasks');

// This will add the event listeners: 
addButton.addEventListener('click', addtask); // this one is used for the clicker

taskInput.addEventListener('keypress', function (event) {// this one is used for the enter key
  if (event.key === 'Enter') {
    addtask();
  }
}); 