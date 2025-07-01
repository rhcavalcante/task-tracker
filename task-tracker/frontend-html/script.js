async function addTask() {
  const title = document.getElementById('title').value;
  const status = document.getElementById('status').value;

  await fetch('http://localhost:7777/tasks', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, status })
  });

  loadTasks();
}

async function loadTasks() {
  const res = await fetch('http://localhost:7777/tasks');
  const tasks = await res.json();
  const list = document.getElementById('taskList');
  list.innerHTML = '';
  tasks.forEach(task => {
    const li = document.createElement('li');
    li.textContent = `${task.title} - ${task.status}`;
    list.appendChild(li);
  });
}

loadTasks();
