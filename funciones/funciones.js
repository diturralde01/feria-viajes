// funciones/funciones.js

// index.html
function mostrarBienvenida() {
    alert("¡Bienvenido a la Feria de Viajes 2025!");
}

// destinos.html
function resaltarDestino(id) {
    var elemento = document.getElementById(id);
    if (elemento) {
        elemento.style.backgroundColor = "#ffff99"; // amarillo claro
    }
}

// expositores.html
function filtrarExpositores(pais) {
    var tabla = document.getElementById("tablaExpositores");
    var filas = tabla.getElementsByTagName("tr");

    for (var i = 1; i < filas.length; i++) { // saltamos el encabezado
        var celdas = filas[i].getElementsByTagName("td");
        if (celdas[1].textContent.toLowerCase().includes(pais.toLowerCase())) {
            filas[i].style.display = "";
        } else {
            filas[i].style.display = "none";
        }
    }
}

// programa.html
function mostrarHoraActual() {
    var fecha = new Date();
    var hora = fecha.toLocaleTimeString();
    var divHora = document.getElementById("horaActual");
    if (divHora) {
        divHora.textContent = "Hora actual: " + hora;
    }
}

// contacto.html
function validarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var mensaje = document.getElementById("mensaje").value;

    if (nombre === "" || email === "" || mensaje === "") {
        alert("Por favor, completa todos los campos del formulario.");
        return false; // evita el envío
    } else {
        alert("Formulario enviado correctamente.");
        return true;
    }
}
