interface Tasca {
  index: number;
  nombre: string;
  completada: boolean;
}
export const tasques: Tasca[] = [];

export function netejarText(): void {
  const tascaUsuari:HTMLInputElement = document.getElementById("tskUs") as HTMLInputElement;
  if (tascaUsuari !== null) {
    tascaUsuari.value = "";
  }
}

export function afegirTasca(): void {
  const tascaUsuari: HTMLInputElement = document.getElementById(
    "tskUs"
  ) as HTMLInputElement;
  let tascaTexto:string = "";
  if (tascaUsuari !== null && tascaUsuari.value.trim() !== "") {
    tascaTexto = tascaUsuari.value.trim();
    const novaTasca: Tasca = {
      index: tasques.length + 1,
      nombre: tascaTexto,
      completada: false,
    };
    tasques.push(novaTasca);
    mostrarTasca();
    netejarText();
  } else {
    alert("Debes escribir una tarea");
  }
}

export function mostrarTasca(): void {
  const llistaTasques:HTMLElement|null = document.getElementById("showTsk");
  if (llistaTasques !== null) {
    llistaTasques.innerHTML = "";
    if (tasques.length === 0) {
      llistaTasques.innerHTML = "No hay tareas que mostrar";
    } else {
    tasques.forEach((tarea, index) => {
      const tareaHTML:string = `<div title="${tarea.nombre} ${
        tarea.completada ? "| Completada" : "| Pendiente"
      }" class="container3">   ${index + 1}    -  ${tarea.nombre}    -  ${
        tarea.completada ? "    Completada ✅" : "    Pendiente ❌"
      }</div>`;
      llistaTasques.innerHTML += tareaHTML;
    });
  } 
}
}
export function eliminarTasca(): void {
  const tascaUsuari: HTMLInputElement = document.getElementById(
    "tskUs"
  ) as HTMLInputElement;
  if (tascaUsuari !== null) {
    const indexUsuari:number = parseInt(tascaUsuari.value) - 1;
    if (tasques.length === 0){
      alert("No hay tareas que eliminar");
    } else if (
      !isNaN(indexUsuari) &&
      indexUsuari >= 0 &&
      indexUsuari < tasques.length
    ) {
      tasques.splice(indexUsuari, 1);
    }
  }
  mostrarTasca();
  netejarText();
}

export function completarTasca(): void {
  const tascaUsuari:HTMLInputElement = document.getElementById(
    "tskUs"
  ) as HTMLInputElement;
  if (tascaUsuari !== null) {
    const indexUsuari:number = parseInt(tascaUsuari.value) - 1;
    if (tasques.length === 0){
      alert("No hay tareas que completar");
    } else if (
      !isNaN(indexUsuari) &&
      indexUsuari >= 0 &&
      indexUsuari < tasques.length &&
      tasques[indexUsuari] !== undefined
    ) {
      tasques[indexUsuari].completada = true;
    } 
  } else { alert("No hay tareas que completar")}
  mostrarTasca();
  netejarText();
}
