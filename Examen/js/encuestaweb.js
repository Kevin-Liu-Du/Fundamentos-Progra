function evaluarEncuesta() {

    //Preguntas 1  y 2.
    var pregunta1 = document.getElementById("r1").value
    var pregunta2 = document.getElementById("r2").value

    //Codigo para saber la opcion escogida en el input radio de la pregunta 3.
    var respuesta3 = ""
    document.getElementsByName("opinion")
        .forEach(radio => {
            if (radio.checked) {
                console.log(radio.value);
                respuesta3 = radio.value
            }
        });

    //Codigo para saber la opcion escogida en el input radio de la pregunta 4.
    var respuesta4 = ""
    document.getElementsByName("opinion2")
        .forEach(radio => {
            if (radio.checked) {
                console.log(radio.value);
                respuesta4 = radio.value
            }
        });

    //Validacion de los datos ingresados
    if (pregunta1 == "" || pregunta2 == "" || respuesta3 == "" || respuesta4 == "") {
        swal.fire({
            title: "Atención usuario",
            text: "No deje campos vacios!",
            icon: "warning",
        })
    } else {

        //condicionales que determinan las opciones seleccionadas por el cliente.
        var mensaje1 = "";
        if (document.formulario.atencion.checked == true && document.formulario.calidad.checked == true && document.formulario.servicio.checked == true) {
            mensaje1 = "¡Gracias por confiar en nosotros y calificarnos bien en nuestros servicios!";
        } else if (document.formulario.atencion.checked == false || document.formulario.calidad.checked == false || document.formulario.servicio.checked == false) {
            mensaje1 = "Gracias por sus respuestas, tomaremos en cuenta sus respuestas para mejorar.";
        } else if (document.formulario.atencion.checked == false && document.formulario.calidad.checked == false && document.formulario.servicio.checked == false) {
            mensaje1 = "Gracias por sus respuestas, lamentamos no haya tenido la mejor experiencia, lo tomaremos en cuenta para mejorar.";
        }

        var mensaje3 = "";
        if (respuesta4 == "Buena") {
            mensaje3 = "Apreciamos que califique nuestra atencion al cliente de buena manera, seguiremos brindando nuestro servicio incluso mejor para seguir complaciendo a nuestros clientes.";
        } else if (respuesta4 == "Regular") {
            mensaje3 = "Agradecemos su sinceridad acerca de nuestros servicio de atencion, vamos a trabajar para mejorarlo.";
        } else {
            mensaje3 = "Lamentamos nuestra atencion al cliente le haya decepcionado, nos ocuparemos de eso para mejorar pronto y no causar otro problema igual.";
        }

        var mensaje2 = "";
        if (respuesta3 == "Si") {
            mensaje2 = "Gracias por preferirnos y poder darnos otra posible visita.";
        } else {
            mensaje2 = "Gracias por su respuesta, intentaremos mejorar para que pueda volver a nuestro hotel y sentirse más comodo.";
        }

        //desplegable aparecera cuando el cliente da clic al boton Enviar
        swal.fire({
            title: "Respuestas enviadas",
            text: "Gracias por realizar nuestra encuesta",
            //icon: "success",
            html: "<iframe src='https://embed.lottiefiles.com/animation/123492' width='440' height='380' > < /iframe>"
        })
        //resultado de la encuesta
        document.getElementById("res0").innerHTML = "¡Gracias por sus respuestas!";
        document.getElementById("res1").innerHTML = mensaje2
        document.getElementById("res2").innerHTML = mensaje3
        document.getElementById("res3").innerHTML = mensaje1
    }
}

function limpiarFormulario() {
    document.getElementById("r1").value = "";
    document.getElementById("r2").value = "";

    var opcionesRadio3 = document.getElementsByName("opinion");
    opcionesRadio3.forEach(radio => (radio.checked = false));

    var opcionesRadio4 = document.getElementsByName("opinion2");
    opcionesRadio4.forEach(radio => (radio.checked = false));

    document.getElementById("calidad").checked = false;
    document.getElementById("atencion").checked = false;
    document.getElementById("servicio").checked = false;
    document.getElementById("radio").checked = false;
    document.getElementById("youtube").checked = false;
    document.getElementById("facebook").checked = false;
    document.getElementById("television").checked = false;
    document.getElementById("otro").checked = false;

    document.getElementById("res0").innerHTML = "";
    document.getElementById("res1").innerHTML = "";
    document.getElementById("res2").innerHTML = "";
    document.getElementById("res3").innerHTML = "";

}