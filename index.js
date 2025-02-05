console.log('My code is running!');
// These will be the element on the page that will be interacted with as variables
const todoInput = document.getElementById('todo-input');
const addButton = document.getElementById('add-button');
const todoList = document.getElementById('Todo-list');

// This will add the event listeners: 
addButton.addEventListener('click', addTodo); // this one is used for the clicker

todoInput.addEventListener('keypress', function(event) {// this one is used for the enter key
  if (event.key === 'Enter') {
    addTodo();
      // Only proceed if the user typed something
      if (taskText !== '') {
          // Create a new <li> item
          const listItem = document.createElement('li');
  
          // Create the <span> that holds the text of the task
          const taskSpan = document.createElement('span');
          taskSpan.textContent = taskText;
  
          // Toggling 'completed' class on <span> when clicked
          taskSpan.addEventListener('click', function() {
            taskSpan.classList.toggle('completed');
          });
  
          // Create a "Remove" button
          const removeButton = document.createElement('button');
          removeButton.textContent = 'Remove';
          removeButton.classList.add('remove-button');
  
          // When the "Remove" button is clicked, 
          // remove the entire <li> from the <ul>
          removeButton.addEventListener('click', function() {
            todoList.removeChild(listItem);
          });
  
          // Append the text and remove button to the new <li>
          listItem.appendChild(taskSpan);
          listItem.appendChild(removeButton);
  
          // Append the new <li> to the <ul> in the DOM
          todoList.appendChild(listItem);
  
          // Clear the input field for the next task
          todoInput.value = '';
      }
  }
}); 

// The addtask function will be used to add the task to the list
function addTodo(){
    const taskText = todoInput.value.trim();// the trim removes the white spaces
}

// Only proceed if the user typed something
if (taskText !== '') {
    // Create a new <li> item
    const listItem = document.createElement('li');

    // Create the <span> that holds the text of the task
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;

    // Toggling 'completed' class on <span> when clicked
    taskSpan.addEventListener('click', function() {
      taskSpan.classList.toggle('completed');
    });

    // Create a "Remove" button
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.classList.add('remove-button');

    // When the "Remove" button is clicked, 
    // remove the entire <li> from the <ul>
    removeButton.addEventListener('click', function() {
      todoList.removeChild(listItem);
    });

    // Append the text and remove button to the new <li>
    listItem.appendChild(taskSpan);
    listItem.appendChild(removeButton);

    // Append the new <li> to the <ul> in the DOM
    todoList.appendChild(listItem);

    // Clear the input field for the next task
    todoInput.value = '';
  }
}
