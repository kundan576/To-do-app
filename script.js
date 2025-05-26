document.addEventListener('DOMContentLoaded', () => {
  const taskInput = document.getElementById('task-input');
  const addBtn = document.getElementById('add-btn');
  const taskList = document.getElementById('task-list');


  addBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const li = document.createElement('li');

    const span = document.createElement('span');
    span.textContent = taskText;
    span.classList.add('task-text');

    
    const checkBtn = document.createElement('button');
    checkBtn.textContent = '✔';
    checkBtn.title = 'Mark as Done';
    checkBtn.style.color = '#4CAF50';
    checkBtn.addEventListener('click', () => {
      span.classList.toggle('completed');
    });

    
    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.style.color = '#FFA500';
    editBtn.addEventListener('click', () => {
      const newText = prompt('Edit your task:', span.textContent);
      if (newText !== null && newText.trim() !== '') {
        span.textContent = newText.trim();
      }
    });

    
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.style.color = '#FF5555';
    deleteBtn.addEventListener('click', () => {
      taskList.removeChild(li);
    });

    const buttonContainer = document.createElement('div');
    buttonContainer.style.display = 'flex';
    buttonContainer.style.gap = '10px';
    buttonContainer.appendChild(checkBtn);
    buttonContainer.appendChild(editBtn);
    buttonContainer.appendChild(deleteBtn);

    li.appendChild(span);
    li.appendChild(buttonContainer);
    taskList.appendChild(li);

    taskInput.value = '';
    taskInput.focus();
  });
});

