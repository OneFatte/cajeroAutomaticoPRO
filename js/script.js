var cuentas = [
    { nombre: "Mali", saldo: 200, clave: "1234" },
    { nombre: "Gerard", saldo: 290, clave: "admin" },
    { nombre: "Moana", saldo: 67, clave: "12ab" }
];

let usuario1 = document.querySelector(".usuario1");
let usuario2 = document.querySelector(".usuario2");
let usuario3 = document.querySelector(".usuario3");

let usuarioElegido = document.getElementById("usuarioElegido");
let contraseña, usuarioActivo;

let pagUsuario = document.getElementById("pagUsuario");

usuario1.innerHTML = cuentas[0].nombre;
usuario2.innerHTML = cuentas[1].nombre;
usuario3.innerHTML = cuentas[2].nombre;


function openModal(usuario) {
    if (usuario === 1) {
        usuarioElegido.innerHTML = cuentas[0].nombre;
        usuarioActivo = cuentas[0];

    } if (usuario === 2) {
        usuarioElegido.innerHTML = cuentas[1].nombre;
        usuarioActivo = cuentas[1];

    } if (usuario === 3) {
        usuarioElegido.innerHTML = cuentas[2].nombre;
        usuarioActivo = cuentas[2];

    }
    var modal = document.getElementById("modal");
    modal.style.display = "flex";
}

function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}

function comparar() {
    if (contraseña == usuarioActivo.clave) {
        pagUsuario = window.open("usuario.html");
        pagUsuario.onload = function () {
            pagUsuario.enviarInformacion(usuarioActivo);
        };
        closeModal();
    } else {
        alert("Contraseña incorrecta. Inténtelo de nuevo.");
    }
}

function handleSubmit(event) {
    event.preventDefault();

    contraseña = document.getElementById("clave").value;
    comparar();
    contraseña = document.getElementById("clave"); contraseña.value = "";
}




