'use extrict';

//carga de la funcion init y se ejecuta al entrar a la web load
window.addEventListener('load', init, false);

//funcion inicial
function init() {
    let nombre = document.getElementById('nombreTxt');
    let apellido = document.getElementById('apellidoTxt');
    let email = document.getElementById('emailTxt');
    let numero = document.getElementById('numberTxt');
    let cedula = document.getElementById('cedulaTxt');
    let fecha = document.getElementById('fechaTxt');
    let evento = document.getElementById('eventosTxt');
    let persona = document.getElementById('cantidadPersonas');
    let costo = document.getElementById('costoTotal');
    let alerta = document.getElementById('mensajeAlert');
    let btnEnviar = document.getElementById('btnSend');
    let expressionEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

    //funcion del boton Enviar
    btnEnviar.onclick = function() {
        nombre = nombreTxt.value;
        apellido = apellidoTxt.value;
        email = emailTxt.value;
        numero = numberTxt.value;
        cedula = cedulaTxt.value;
        fecha = fechaTxt.value;
        evento = eventosTxt.value;
        persona = cantidadPersonas.value;
        costo = costoTotal.value;

        //condicionales anidadas para validar cada campo del form 
        if (nombre === '' && apellido === '' && email === '' && numero === '' && cedula === '' && fecha === '' && evento === '' && persona === '' && costo === '') {
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

        } else if (cedula === '') {
            alerta.textContent = 'El campo cedula esta vacío';
            alerta.classList.add('alertaRoja');
            alerta.classList.remove('alertaVerde');
        } else if (fecha === '') {
            alerta.textContent = 'El campo fecha esta vacío';
            alerta.classList.add('alertaRoja');
            alerta.classList.remove('alertaVerde');
        } else if (evento === '') {
            alerta.textContent = 'El campo evento esta vacío';
            alerta.classList.add('alertaRoja');
            alerta.classList.remove('alertaVerde');
        } else if (persona === '') {
            alerta.textContent = 'El campo cantidad de personas esta vacío';
            alerta.classList.add('alertaRoja');
            alerta.classList.remove('alertaVerde');

        } else {
            //si NO existe error en los campos validados se envian los datos al servidor de correo 
            alerta.textContent = 'Reservación Enviado';
            alerta.classList.add('alertaVerde');
            alerta.classList.remove('alertaRoja');
            //service ID/template ID/ID form/public key cuenta
            //el id del formulario es #form1
            //dejarlos vacios para luego completarlos...
            emailjs.sendForm("service_1thdu2i","template_4r65xyj","#form", "Zk0pZ2Vmcm9xWyDKC");
            //carga de la funcion limpiar
            limpiar();
        }
    }

    function limpiar() {
        nombreTxt.value = '';
        apellidoTxt.value = '';
        emailTxt.value = '';
        numberTxt.value = '';
        cedulaTxt.value = '';
        fechaTxt.value = '';
        eventosTxt.value = '';
        cantidadPersonas.value = '';
        costoTotal.value = '';
    }
}

let hoy = new Date();
        let dd = String(hoy.getDate()).padStart(2, '0');
        let mm = String(hoy.getMonth() + 1).padStart(2, '0'); // Enero es 0
        let yyyy = hoy.getFullYear();
        let fechaHoy = yyyy + '-' + mm + '-' + dd;

        // Configurar el atributo 'min' de los campos de fecha para que no puedan seleccionar una fecha anterior a hoy
        let camposFecha = document.querySelectorAll('input[type="date"]');
        camposFecha.forEach(function(input) {
            input.setAttribute('min', fechaHoy);
        });


    // Precio de la entrada al museo de carros en dólares
    var precioEntrada = 10;

    // Función para calcular el costo total
    function calcularCostoTotal() {
        var cantidadPersonas = document.getElementById("cantidadPersonas").value;
        var costoTotal = cantidadPersonas * precioEntrada;
        document.getElementById("costoTotal").value = "$" + costoTotal.toFixed(2); // Mostrar el costo total con dos decimales y el símbolo "$"
    }

