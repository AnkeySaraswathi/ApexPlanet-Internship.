// Form Validation
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const formMessage = document.getElementById('formMessage');
  const name = this.name.value.trim();
  const email = this.email.value.trim();
  const message = this.message.value.trim();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !email || !message) {
    formMessage.textContent = 'All fields are required!';
  } else if (!emailRegex.test(email)) {
    formMessage.textContent = 'Enter a valid email address!';
  } else {
    formMessage.style.color = 'green';
    formMessage.textContent = 'Form submitted successfully!';
    this.reset();
  }
});

// To-Do List
const addTaskBtn = document.getElementById('addTask');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    const li = document.createElement('li');
    li.textContent = taskText;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Remove';
    deleteBtn.addEventListener('click', () => {
      li.remove();
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    taskInput.value = '';
  }
});

