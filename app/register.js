import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { auth } from './firebase.js';
import { alertMessagePopUp } from './messages.js';


const register_form = document.querySelector('#register_form')
console.log(register_form)
console.log("Hola Mundo Register")



register_form.addEventListener('submit', async (e) => {
    e.preventDefault()

    const usuario = register_form['register_Usuario'].value
    const nombre = register_form['register_nombre'].value
    const apellido = register_form['register_apellido'].value
    const cargo = register_form['register_cargo'].value
    const email = register_form['register_email'].value
    const contraseña = register_form['register_contraseña'].value

    console.log(usuario, nombre, apellido, cargo, email, contraseña);



    try {
        const userCredentials = await createUserWithEmailAndPassword(auth, email, contraseña, usuario)
        console.log(userCredentials)

        alertMessagePopUp("Usuario Registrado " + userCredentials.user.email, "success")

    } catch (error) {
        console.log(error)
        console.log(error.code)
        /* informacion de errores de firebase en consola */
        if (error.code === "auth/email-already-in-use") {
            alertMessagePopUp('Email ya esta en uso', "error")
        } else if
            (error.code === "auth/invalid-email") {
            alertMessagePopUp('Correo es invalido', "error")
        } else if
            (error.code === "auth/weak-password") {
            alertMessagePopUp('contraseña muy debil', "error")
        } else if
            (error.code) {
            alertMessagePopUp('Error desconocido', "error")
        }

    }
}
) 