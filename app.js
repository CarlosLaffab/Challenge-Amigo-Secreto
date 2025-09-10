// Variables 
let amigos = [];  // Lista vacía para guardar nombres
let amigoSeleccionado = '';  // Para guardar el que sale en el sorteo

// Función para agregar un amigo
function agregarAmigo() {
    // Tomar el valor del input
    let input = document.getElementById('nombreAmigo');
    let nombre = input.value.trim();  // Quitar espacios extras
    
    // Chequear si no está vacío
    if (nombre != '') {
        // Agregar al array
        amigos.push(nombre);
        
        // Limpiar el input
        input.value = '';
        
        // Actualizar la lista en la página
        actualizarLista();
    } else {
        // Si vacío, mostrar alerta
        alert('Por favor, ingresa un nombre válido.');
    }
    
    // Poner foco de nuevo en el input
    input.focus();
}

// Función para actualizar la lista en la página
function actualizarLista() {
    // Tomar la ul de la lista
    let lista = document.getElementById('listaAmigos');
    
    // Borrar lo que hay
    lista.innerHTML = '';
    
    // Recorrer el array con un loop simple
    for (let i = 0; i < amigos.length; i++) {
        // Crear un li nuevo
        let li = document.createElement('li');
        li.textContent = amigos[i];
        // Agregarlo a la lista
        lista.appendChild(li);
    }
    
    // Limpiar el resultado del sorteo anterior
    document.getElementById('resultadoSorteo').textContent = '';
}

// Función para sortear un amigo
function sortearAmigo() {
    // Chequear si hay amigos
    if (amigos.length == 0) {
        alert('No hay amigos en la lista para sortear.');
        return;  // Salir si no hay
    }
    
    // Elegir un número al azar entre 0 y la longitud -1
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    // Guardar el nombre
    amigoSeleccionado = amigos[indiceAleatorio];
    
    // Mostrar en la página
    document.getElementById('resultadoSorteo').textContent = 'Amigo seleccionado: ' + amigoSeleccionado;
}

// Función para limpiar la lista
function limpiarLista() {
    // Vaciar el array
    amigos = [];
    // Actualizar la lista en la página
    actualizarLista();
}

// Cuando la página carga, agregar eventos
window.onload = function() {
    // Poner foco en el input
    document.getElementById('nombreAmigo').focus();
    
    // Botón agregar
    document.getElementById('btnAgregar').addEventListener('click', agregarAmigo);
    
    // Botón sortear
    document.getElementById('btnSortear').addEventListener('click', sortearAmigo);
    
    // Botón limpiar
    document.getElementById('btnLimpiar').addEventListener('click', limpiarLista);
    
    // Si presiona Enter en el input, agregar
    document.getElementById('nombreAmigo').addEventListener('keypress', function(event) {
        if (event.key == 'Enter') {
            agregarAmigo();
        }
    });
};