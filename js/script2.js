let usuarioElegido, datos, dineroIngresar, opcion;
let mostrar = document.getElementById("mostrarDatos");
let saldocuenta = document.getElementById("mostrarSaldo")

let ingresarDatos = document.getElementById("ingresarDatos");
let mostrarIngreso = document.getElementById("mostrarIngreso");
let mostrarTotal = document.getElementById("mostrarTotal");

let mostrarOpcion = document.getElementById("opcion");

function enviarInformacion(informacion) {
    usuarioElegido = document.getElementById("pagUsuario");
    usuarioElegido.textContent = "Welcome! " + informacion.nombre;
    datos = informacion;
}

function consultar() {
    mostrar.style.display = "flex";
    ingresarDatos.style.display = "none";
    saldocuenta.innerHTML = datos.saldo;
}

function calcular(e) {
    e.preventDefault();

    dineroIngresar = document.getElementById("dineroIngresar").value;


    if (opcion == "suma") {
        datos.saldo = parseInt(datos.saldo) + parseInt(dineroIngresar);
        mostrarIngreso.innerHTML = "El dinero ingresado es: " + dineroIngresar;
        mostrarTotal.innerHTML = "El dienro total es: " + datos.saldo;

    } else if (opcion == "resta") {
        datos.saldo = parseInt(datos.saldo) - parseInt(dineroIngresar);
        mostrarIngreso.innerHTML = "El dinero a retirar es: " + dineroIngresar;
        mostrarTotal.innerHTML = "El dinero total es: " + datos.saldo;

    } else {
        alert("Error");
    }
}

function ingresar() {
    ingresarDatos.style.display = "flex";
    mostrar.style.display = "none";
    opcion = "suma";
    mostrarOpcion.innerHTML = "Consignar";
}

function retirar() {
    ingresarDatos.style.display = "flex";
    mostrar.style.display = "none";
    opcion = "resta";

    mostrarOpcion.innerHTML = "Retirar";
}

function cerrar() {
    window.close();
}