import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { auth } from './firebase.js';
import { alertMessagePopUps } from './messageLogin.js';

const sesionIn_form = document.querySelector('#sesionIn_form')
console.log(sesionIn_form)
console.log("hola mundo login")

function redireccionar() {
    try {
        // Aquí rediriges a la página de inicio
        setTimeout(function () {
            // Aquí rediriges a la página de inicio
            window.location.href = "welcome.html";
        }, 1500);

    } catch (error) {
        console.error("Ha ocurrido un error", error);
    }
}

sesionIn_form.addEventListener('submit', async (e) => {
    e.preventDefault()
    const email = sesionIn_form['login-email'].value
    const contraseña = sesionIn_form['login-password'].value


    try {
        const credentialLogin = await signInWithEmailAndPassword(auth, email, contraseña)
        console.log(credentialLogin)
        alertMessagePopUps("Has Iniciado Sesion " + credentialLogin.user.email, "success")
        redireccionar();


    } catch (error) {
        console.log(error)
        console.log(error.code)
        /* informacion de errores de firebase en consola */
        if (error.code === "auth/user-not-found") {
            console.log("Correo no esta registrado en la plataforma");
            alertMessagePopUps('Correo no esta registrado en la plataforma', "error")
        } else if
            (error.code === "auth/invalid-email") {
            console.log("Correo no es valido");
            alertMessagePopUps('Porfavor rellene los campos requeridos', "error")
        } else if
            (error.code === "auth/wrong-password") {
            console.log("La contraseña es incorrecta");
            alertMessagePopUps('contraseña erronea', "error")
        } else if
            (error.code === "auth/missing-password") {
            console.log("Campo de la contraseña esta vacio");
            alertMessagePopUps(' No hay nada en el campo de contraseña', "error")
        } else if
            (error.code) {
            console.log("Error desconocido");
            alertMessagePopUps('Error desconocido', "error")
        }
    }
})

