interface Task {
  index: number;
  textTask: string;
  complete: boolean;
}
export const tasks: Task[] = [];

export function cleanTextArea(): void {
  const userTask: HTMLInputElement = document.getElementById(
    "tskUs"
  ) as HTMLInputElement;
  if (userTask !== null) {
    userTask.value = "";
  }
}

export function addTask(): void {
  const userTask: HTMLInputElement = document.getElementById(
    "tskUs"
  ) as HTMLInputElement;
  let taskText: string = "";
  if (userTask !== null && userTask.value.trim() !== "") {
    taskText = userTask.value.trim();
    const newTask: Task = {
      index: tasks.length + 1,
      textTask: taskText,
      complete: false,
    };
    tasks.push(newTask);
    showTasks();
    cleanTextArea();
  } else {
    alert("Debes escribir una tarea");
  }
}

export function showTasks(): void {
  const taskList: HTMLElement | null = document.getElementById("showTsk");
  if (taskList !== null) {
    taskList.innerHTML = "";
    if (tasks.length === 0) {
      taskList.innerHTML = "No hay tareas que mostrar";
    } else {
      tasks.forEach((task, index) => {
        const tareaHTML: string = `<div title="${task.textTask} ${
          task.complete ? "| Completada" : "| Pendiente"
        }" class="container3">   ${index + 1}    -  ${task.textTask}    -  ${
          task.complete ? "    Completada ✅" : "    Pendiente ❌"
        }</div>`;
        taskList.innerHTML += tareaHTML;
      });
    }
  }
}
export function eliminarTasca(): void {
  const userTask: HTMLInputElement = document.getElementById(
    "tskUs"
  ) as HTMLInputElement;
  if (userTask !== null) {
    const userIndex: number = parseInt(userTask.value) - 1;
    if (tasks.length === 0) {
      alert("No hay tareas que eliminar");
    } else if (
      !isNaN(userIndex) &&
      userIndex >= 0 &&
      userIndex < tasks.length
    ) {
      tasks.splice(userIndex, 1);
    } else {
      alert("Indice de tarea inválido");
    }
  } else { alert("No hay tareas que eliminar");}
  showTasks();
  cleanTextArea();
}

export function completarTasca(): void {
  const userTask: HTMLInputElement = document.getElementById(
    "tskUs"
  ) as HTMLInputElement;
  if (userTask !== null) {
    const userIndex: number = parseInt(userTask.value) - 1;
    if (tasks.length === 0) {
      alert("No hay tareas que completar");
    } else if (
      !isNaN(userIndex) &&
      userIndex >= 0 &&
      userIndex < tasks.length &&
      tasks[userIndex] !== undefined
    ) {
      tasks[userIndex].complete = true;
    } else {
      alert("Indice de tarea no válido");
    }
  } else {
    alert("No hay tareas que completar");
  }
  showTasks();
  cleanTextArea();
}
