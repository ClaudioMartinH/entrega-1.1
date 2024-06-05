export const tasks = [];
export function cleanTextArea() {
    const userTask = document.getElementById("tskUs");
    if (userTask !== null) {
        userTask.value = "";
    }
}
export function addTask() {
    const userTask = document.getElementById("tskUs");
    let taskText = "";
    if (userTask !== null && userTask.value.trim() !== "") {
        taskText = userTask.value.trim();
        const newTask = {
            index: tasks.length + 1,
            textTask: taskText,
            complete: false,
        };
        tasks.push(newTask);
        showTasks();
        cleanTextArea();
    }
    else {
        alert("Debes escribir una tarea");
    }
}
export function showTasks() {
    const taskList = document.getElementById("showTsk");
    if (taskList !== null) {
        taskList.innerHTML = "";
        if (tasks.length === 0) {
            taskList.innerHTML = "No hay tareas que mostrar";
        }
        else {
            tasks.forEach((task, index) => {
                const tareaHTML = `<div title="${task.textTask} ${task.complete ? "| Completada" : "| Pendiente"}" class="container3">   ${index + 1}    -  ${task.textTask}    -  ${task.complete ? "    Completada ✅" : "    Pendiente ❌"}</div>`;
                taskList.innerHTML += tareaHTML;
            });
        }
    }
}
export function eliminarTasca() {
    const userTask = document.getElementById("tskUs");
    if (userTask !== null) {
        const userIndex = parseInt(userTask.value) - 1;
        if (tasks.length === 0) {
            alert("No hay tareas que eliminar");
        }
        else if (!isNaN(userIndex) &&
            userIndex >= 0 &&
            userIndex < tasks.length) {
            tasks.splice(userIndex, 1);
        }
        else {
            alert("Indice de tarea inválido");
        }
    }
    else {
        alert("No hay tareas que eliminar");
    }
    showTasks();
    cleanTextArea();
}
export function completarTasca() {
    const userTask = document.getElementById("tskUs");
    if (userTask !== null) {
        const userIndex = parseInt(userTask.value) - 1;
        if (tasks.length === 0) {
            alert("No hay tareas que completar");
        }
        else if (!isNaN(userIndex) &&
            userIndex >= 0 &&
            userIndex < tasks.length &&
            tasks[userIndex] !== undefined) {
            tasks[userIndex].complete = true;
        }
        else {
            alert("Indice de tarea no válido");
        }
    }
    else {
        alert("No hay tareas que completar");
    }
    showTasks();
    cleanTextArea();
}
