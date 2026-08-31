const botonAgregar = document.getElementById('boton-agregar');
const listaTareas = document.getElementById('lista-tareas');
let contador = 2;

botonAgregar.addEventListener('click', function() {

  const nombreTarea = prompt("Ingresa el nombre de la nueva tarea:");
  

  if (nombreTarea !== null && nombreTarea.trim() !== "") {
    const nuevaTarea = document.createElement('li');
    nuevaTarea.textContent = "Tarea " + contador + ": " + nombreTarea;
    listaTareas.appendChild(nuevaTarea);
    contador++;
  }
});
