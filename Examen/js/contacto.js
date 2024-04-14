'use extrict';

//carga de la funcion init y se ejecuta al entrar a la web load
window.addEventListener('load', init, false);

//funcion inicial
function init() {
    let nombre = document.getElementById('nombreTxt');
    let apellido = document.getElementById('apellidoTxt');
    let email = document.getElementById('emailTxt');
    let numero = document.getElementById('numberTxt');
    let mensaje = document.getElementById('mensajeTxt');
    let alerta = document.getElementById('mensajeAlert');
    let btnEnviar = document.getElementById('btnSend');
    let expressionEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

    //funcion del boton Enviar
    btnEnviar.onclick = function() {
        nombre = nombreTxt.value;
        apellido = apellidoTxt.value;
        email = emailTxt.value;
        numero = numberTxt.value;
        mensaje = mensajeTxt.value;

        //condicionales anidadas para validar cada campo del form 
        if (nombre === '' && apellido === '' && email === '' && numero === '' && mensaje === '') {
            alerta.textContent = 'Debe llenar todos los campos';
            alerta.classList.add('alertaRoja');
            alerta.classList.remove('alertaVerde');
        } else if (nombre === '') {
            alerta.textContent = 'El campo nombre esta vacío';
            alerta.classList.add('alertaRoja');
            alerta.classList.remove('alertaVerde');
        } else if (apellido === '') {
            alerta.textContent = 'El campo apellido esta vacío';
            alerta.classList.add('alertaRoja');
            alerta.classList.remove('alertaVerde');
        } else if (email === '') {
            alerta.textContent = 'El campo email esta vacío';
            alerta.classList.add('alertaRoja');
            alerta.classList.remove('alertaVerde');
        } else if (expressionEmail.test(email) === false) {
            alerta.textContent = 'Email invalido';
            alerta.classList.add('alertaRoja');
            alerta.classList.remove('alertaVerde');
        } else if (numero === '') {
            alerta.textContent = 'El campo teléfono esta vacío';
            alerta.classList.add('alertaRoja');
            alerta.classList.remove('alertaVerde');

        } else if (mensaje === '') {
            alerta.textContent = 'El campo mensaje esta vacío';
            alerta.classList.add('alertaRoja');
            alerta.classList.remove('alertaVerde');

        } else {
            //si NO existe error en los campos validados se envian los datos al servidor de correo 
            alerta.textContent = 'Mensaje enviado';
            alerta.classList.add('alertaVerde');
            alerta.classList.remove('alertaRoja');
            //service ID/template ID/ID form/public key cuenta
            //el id del formulario es #form1
            //dejarlos vacios para luego completarlos...
            emailjs.sendForm("service_1jmgqra","template_pohsmz4","#form", "Eu8tNcpsGjTkLB_YM");
            //carga de la funcion limpiar
            limpiar();
        }
    }

    function limpiar() {
        nombreTxt.value = '';
        apellidoTxt.value = '';
        emailTxt.value = '';
        numberTxt.value = '';
        mensajeTxt.value = '';
    }
}