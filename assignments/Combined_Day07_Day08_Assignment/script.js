document.getElementById('greet-btn').addEventListener('click', () => {
    const name = document.getElementById('name-input').value;
    const message = name ? `Hello, ${name}! Welcome to your interactive page.` : "Please enter your name.";
    document.getElementById('greeting-message').textContent = message;
  });
  document.querySelectorAll('.calc-btn').forEach(button => {
    button.addEventListener('click', () => {
      const num1 = parseFloat(document.getElementById('num1').value);
      const num2 = parseFloat(document.getElementById('num2').value);
      const resultElement = document.getElementById('calc-result');
      if (isNaN(num1) || isNaN(num2)) {
        resultElement.textContent = "Please enter valid numbers.";
        return;
      }
      let result;
    switch (button.id) {
      case 'add-btn': result = num1 + num2; break;
      case 'subtract-btn': result = num1 - num2; break;
      case 'multiply-btn': result = num1 * num2; break;
      case 'divide-btn': result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero"; break;
    }
    resultElement.textContent = `Result: ${result}`;
  });
});
document.getElementById('add-task-btn').addEventListener('click', () => {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();
    if (!taskText) return;
    const taskList = document.getElementById('task-list');
    const listItem = document.createElement('li');
    listItem.textContent = taskText;
    const doneBtn = document.createElement('button');
    doneBtn.textContent = "Done";
    doneBtn.className = "task-btn done";
    doneBtn.addEventListener('click', () => listItem.classList.toggle('completed'));
  
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "task-btn delete";
    deleteBtn.addEventListener('click', () => taskList.removeChild(listItem));
    listItem.appendChild(doneBtn);
    listItem.appendChild(deleteBtn);
  
    taskList.appendChild(listItem);
    taskInput.value = "";
  });
  document.getElementById('dark-mode-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });    