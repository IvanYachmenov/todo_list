let tasks = [];

// save in local storage
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// load to local storage
function loadTasks() {
    const list = document.getElementById("task-list");
    list.innerHTML = "";

    tasks.forEach((task,index) => {
        const li = document.createElement("li");
        li.innerHTML = `
             <label>
                <input type="checkbox" class="task-checkbox" ${task.completed ? "checked" : ""}>
            </label>
            <span class="task ${task.completed ? "completed" : ""}">${task.text}</span>
            <button class="delete-btn"></button>
        `;

        li.querySelector(".task-checkbox").addEventListener("change", (e) => {
            tasks[index].completed = e.target.checked;
            saveTasks();
            loadTasks();
        })

        li.querySelector(".delete-btn").addEventListener("click", (e) => {
            tasks.splice(index, 1);
            saveTasks();
            loadTasks();
        })

        list.appendChild(li);
    })
}

const input = document.getElementById("input-task");
const addButton = document.getElementById("add-task-button");

// add task
addButton.addEventListener("click", (e) => {
    if (input.value.trim() === "") return;

    tasks.push({text: input.value, completed : false});
    saveTasks();
    loadTasks();

    input.value = "";
})

// add-enter-press
input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addButton.click();
    }
});

document.addEventListener("DOMContentLoaded", () => {
    createDefaultTasks();
    tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    loadTasks();
})

function createDefaultTasks() {
    if (!localStorage.getItem("tasks")) {
        tasks = [
            { text: "Code a new Facebook", completed: false },
            { text: "Hack the Pentagon", completed: false },
            { text: "Install Linux", completed: false }
        ];
        saveTasks();
    }
}