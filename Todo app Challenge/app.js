const taskInput = document.getElementById("task");
const submitTaskBtn = document.getElementById("sub-task");
const tasksContainer = document.querySelector(".tasks-container");

// Check If There is tasks in LocalStorage
function checkForTask() {
  if (window.localStorage.length >= 1) {
    // remove no tasks message
    if (document.querySelector(".tasks-container h3") !== null) {
      document.querySelector(".tasks-container h3").remove();
    }

    // Loop on tasks to add them
    for (let i = 0; i < window.localStorage.length; i++) {
      if (window.localStorage.getItem(`Task-No.${i}`)) {
        // Create Element and Set attributes
        let taskBox = document.createElement("div");
        let paragraph = document.createElement("p");
        let delTaskBtn = document.createElement("button");
        let paragrapghText = document.createTextNode(
          window.localStorage.getItem(`Task-No.${i}`),
        );

        taskBox.classList.add("task", `Task-No.${i}`);
        delTaskBtn.classList.add("del-task");
        delTaskBtn.innerText = "Remove";
        paragraph.append(paragrapghText);

        taskBox.append(paragraph, delTaskBtn);

        tasksContainer.prepend(taskBox);
      } else continue;
    }
  } else {
    if (document.querySelector(".tasks-container h3") === null) {
      let messageH3 = document.createElement("h3");
      messageH3.innerText = "There are no Tasks Yet";
      tasksContainer.append(messageH3);
    }
  }
}
checkForTask();

// Hold input field value
let taskVal;
taskInput.oninput = () => (taskVal = taskInput.value);

// popup (modal)
let popup = document.querySelector(".popup");
let modalExitBtn = document.querySelector(".popup .exit");
let overlay = document.querySelector(".popup-overlay");
modalExitBtn.onclick = () => {
  popup.classList.remove("show");
  overlay.style.opacity = "0";

  setTimeout(() => {
    popup.style.setProperty("display", "none");
    overlay.style.setProperty("display", "none");
  }, 200);
};

// Add New Task func
function addNewTask() {
  if (taskVal !== "" && taskVal !== undefined) {
    // Save Current Task Title to Local Storage
    window.localStorage.setItem(
      `Task-No.${window.localStorage.length}`,
      taskVal,
    );

    // clear last value & clear task container
    tasksContainer.innerHTML = "";
    taskInput.value = "";
    taskVal = "";
  } else {
    popup.style.setProperty("display", "block");
    overlay.style.setProperty("display", "block");

    setTimeout(() => {
      popup.classList.add("show");
      overlay.style.opacity = "1";
    }, 200);

    // clear last value & clear task container
    tasksContainer.innerHTML = "";
    taskInput.value = "";
    taskVal = "";
  }
}
submitTaskBtn.addEventListener("click", addNewTask);
// Add task to tasks container using => checkForTask() func
submitTaskBtn.addEventListener("click", checkForTask);

// Remove done Task
function RemoveCurrentTask() {
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("del-task")) {
      // Remove Task Data from local storage
      window.localStorage.removeItem(
        `${e.target.parentElement.classList.item(1)}`,
      );
      // remove task Box HTML element
      e.target.parentElement.remove();
    }
  });
}
RemoveCurrentTask();
