const taskInput = document.getElementById("task");
const submitTaskBtn = document.getElementById("sub-task");
const tasksContainer = document.querySelector(".tasks-container");

// Hold input field value
let taskVal;
taskInput.oninput = () => (taskVal = taskInput.value);

// Check If There is tasks in LocalStorage
if (window.localStorage.length >= 1) {
  for (let i = 0; i < window.localStorage.length; i++) {
    if (window.localStorage.getItem(`Task-No.${i}`)) {
      // Create Element and Set attributes
      let taskBox = document.createElement("div");
      let paragraph = document.createElement("p");
      let delTaskBtn = document.createElement("button");
      let paragrapghText = document.createTextNode(window.localStorage.getItem(`Task-No.${i}`));

      taskBox.classList.add("task", `Task-No.${i}`);
      delTaskBtn.classList.add("del-task");
      delTaskBtn.innerText = "Remove";
      paragraph.append(paragrapghText);

      taskBox.append(paragraph, delTaskBtn);

      tasksContainer.prepend(taskBox);
    } else continue;
  }
} else {
  tasksContainer.innerText = "There are no Tasks Yet ..";
}

// Add New Task
submitTaskBtn.onclick = addNewTask;

function addNewTask() {
  if (taskVal !== "" && taskVal !== undefined) {
    // Save Current Task Title to Local Storage
    window.localStorage.setItem(`Task-No.${window.localStorage.length}`, taskVal);

    // Relod Window To Refresh Tasks And clear input
    window.location.reload();
  } else {
    window.alert("Please Enter A Valid Task Title")
  }
}

function RemoveCurrentTask() {
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains("del-task")) {
      // Remove Task Data from local storage
      window.localStorage.removeItem(`${e.target.parentElement.classList.item(1)}`);
      // remove task Box HTML element
      e.target.parentElement.remove();
    }
  })
}
RemoveCurrentTask();
