const inputTask = document.getElementById("inputTask");
const listContainer = document.getElementById("listContainer");
const tombol = document.getElementById("tombol");

const totalTasks = document.getElementById("totalTasks");
const completedTasks = document.getElementById("completedTasks");
const pendingTasks = document.getElementById("pendingTasks");

function updateStatistics() {
    const tasks = listContainer.querySelectorAll("li");
    const completed = listContainer.querySelectorAll("li.done");
    totalTasks.innerText = tasks.length;
    completedTasks.innerText = completed.length;
    pendingTasks.innerText = tasks.length - completed.length;
}

tombol.onclick = function () {
    if (inputTask.value === "") {
        alert("Kamu belum memasukkan to do list!");
    } else {
        let li = document.createElement("li");
        li.textContent = inputTask.value;
        listContainer.append(li);
        let span = document.createElement("span");
        span.textContent = "\u00d7";
        li.append(span);
        inputTask.value = "";
        updateStatistics();
    }
};

inputTask.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        tombol.click();
    }
});

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("done");
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
    updateStatistics();
});

updateStatistics();