const fs=require("fs");
let div = document.querySelector("#task");
let input = document.querySelector("#input");
let tasks = [];

input.addEventListener("keypress", (e) => {
  let task = {};
  if (e.key == "Enter") {
    task.name = input.value;
    task.id = 1; // Use a timestamp as a unique ID
    task.status = "pending";
    AddToui(task);
    tasks.push(task);
    AddToFile(tasks); // Pass the tasks array to the storage function
    input.value = ""; // Clear the input field
    id++;
  }
});

function AddToui(task) {
  let p = document.createElement("p");
  p.innerHTML = task.name;
  div.appendChild(p);

  let checkBox = document.createElement("input");
  checkBox.setAttribute("type", "checkbox");
  p.appendChild(checkBox);

  if (task.status == "completed") {
    p.style.textDecoration = "line-through";
    checkBox.checked = true;
  }

  checkBox.addEventListener("click", (e) => {
    if (e.target.checked) {
      task.status = "completed";
      p.style.textDecoration = "line-through";
    } else {
      task.status = "pending";
      p.style.textDecoration = "none";
    }
    AddToFile(tasks); // Update local storage when the checkbox is clicked
  });

  var span = document.createElement("input");
  span.setAttribute("type", "image");
  span.setAttribute("src", "cross.jpeg");
  span.setAttribute("height", "10px");
  span.setAttribute("width", "10px");
  p.appendChild(span);

  span.addEventListener("click", () => {
    p.remove();
    tasks = tasks.filter((ele) => {
      return ele.id != task.id;
    });
    AddToFile(tasks); // Update local storage when a task is removed
  });
}

function AddToFile(tasks) {
    
}

function getLocalStorage() {
  if (localStorage.getItem("ToDoTasks")) {
    tasks = JSON.parse(localStorage.getItem("ToDoTasks"));
    tasks.forEach((ele) => {
      AddToui(ele);
    });
  }
}

getLocalStorage();
