export const tasques = [];
export function netejarText() {
    const tascaUsuari = document.getElementById("tskUs");
    if (tascaUsuari !== null) {
        tascaUsuari.value = "";
    }
}
export function afegirTasca() {
    const tascaUsuari = document.getElementById("tskUs");
    let tascaTexto = "";
    if (tascaUsuari !== null && tascaUsuari.value.trim() !== "") {
        tascaTexto = tascaUsuari.value.trim();
        const novaTasca = {
            index: tasques.length + 1,
            nombre: tascaTexto,
            completada: false,
        };
        tasques.push(novaTasca);
        mostrarTasca();
        netejarText();
    }
    else {
        alert("Debes escribir una tarea");
    }
}
export function mostrarTasca() {
    const llistaTasques = document.getElementById("showTsk");
    if (llistaTasques !== null) {
        llistaTasques.innerHTML = "";
        if (tasques.length === 0) {
            llistaTasques.innerHTML = "No hay tareas que mostrar";
        }
        else {
            tasques.forEach((tarea, index) => {
                const tareaHTML = `<div title="${tarea.nombre} ${tarea.completada ? "| Completada" : "| Pendiente"}" class="container3">   ${index + 1}    -  ${tarea.nombre}    -  ${tarea.completada ? "    Completada ✅" : "    Pendiente ❌"}</div>`;
                llistaTasques.innerHTML += tareaHTML;
            });
        }
    }
}
export function eliminarTasca() {
    const tascaUsuari = document.getElementById("tskUs");
    if (tascaUsuari !== null) {
        const indexUsuari = parseInt(tascaUsuari.value) - 1;
        if (tasques.length === 0) {
            alert("No hay tareas que eliminar");
        }
        else if (!isNaN(indexUsuari) &&
            indexUsuari >= 0 &&
            indexUsuari < tasques.length) {
            tasques.splice(indexUsuari, 1);
        }
    }
    mostrarTasca();
    netejarText();
}
export function completarTasca() {
    const tascaUsuari = document.getElementById("tskUs");
    if (tascaUsuari !== null) {
        const indexUsuari = parseInt(tascaUsuari.value) - 1;
        if (tasques.length === 0) {
            alert("No hay tareas que completar");
        }
        else if (!isNaN(indexUsuari) &&
            indexUsuari >= 0 &&
            indexUsuari < tasques.length &&
            tasques[indexUsuari] !== undefined) {
            tasques[indexUsuari].completada = true;
        }
    }
    mostrarTasca();
    netejarText();
}
