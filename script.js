let taskList = document.getElementById("taskList");
let taskInput = document.getElementById("taskInput");
let addTaskBtn = document.getElementById("addTaskBtn");

function addTask() {
  if (taskInput.value === "") {
    alert("Please enter a task.");
    return;
  }

  let task = document.createElement("li");
  task.innerHTML = taskInput.value + "<button class='deleteBtn' onclick='deleteTask(this)'>Delete</button>";
  taskList.appendChild(task);
  taskInput.value = "";
}

function deleteTask(task) {
  task.parentElement.remove();
}
