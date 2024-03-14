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
        if (document.formulario.creatividad.checked == true && document.formulario.comunicar.checked == true && document.formulario.flexibilidad.checked == true) {
            mensaje1 = "¡Gracias por confiar en nosotros y calificarnos bien en nuestros desempeño!";
        } else if (document.formulario.creatividad.checked == false || document.formulario.comunicar.checked == false || document.formulario.flexibilidad.checked == false) {
            mensaje1 = "Gracias por sus respuestas, tomaremos en cuenta sus respuestas para mejorar.";
        } else if (document.formulario.creatividad.checked == false && document.formulario.comunicar.checked == false && document.formulario.flexibilidad.checked == false) {
            mensaje1 = "Gracias por sus respuestas, lamentamos no haya tenido la mejor experiencia, lo tomaremos en cuenta para mejorar.";
        }

        var mensaje3 = "";
        if (respuesta4 == "Buena") {
            mensaje3 = "Agradecemos sinceramente su valoración positiva de nuestro desempeño. Seguiremos comprometidos en proporcionar una educación aún mejor para continuar guiando a nuestros estudiantes hacia el éxito. ";
        } else if (respuesta4 == "Regular") {
            mensaje3 = "Agradecemos su evaluación de nuestro desempeño como regular. Tomamos en serio sus comentarios y nos comprometemos a trabajar arduamente para mejorar y superar sus expectativas en el futuro.";
        } else {
            mensaje3 = "Lamentamos sinceramente su evaluación negativa de nuestro desempeño. Valoramos sus comentarios y nos comprometemos a tomar medidas inmediatas para abordar cualquier preocupación que haya surgido.";
        }

        var mensaje2 = "";
        if (respuesta3 == "Si") {
            mensaje2 = "Nos complace enormemente recibir su confirmación sobre la utilidad de nuestras evaluaciones docentes. Apreciamos sinceramente su compromiso con la mejora continua de la calidad de la enseñanza y la experiencia de aprendizaje.";
        } else {
            mensaje2 = "Agradecemos sinceramente su retroalimentación. Lamentamos que nuestras evaluaciones docentes no hayan cumplido con sus expectativas.";
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

    document.getElementById("comunicar").checked = false;
    document.getElementById("creatividad").checked = false;
    document.getElementById("flexibilidad").checked = false;
    document.getElementById("Malo").checked = false;
    document.getElementById("Regular").checked = false;
    document.getElementById("Bueno").checked = false;
    document.getElementById("Muy Bueno").checked = false;
    document.getElementById("Excelente").checked = false;

    document.getElementById("res0").innerHTML = "";
    document.getElementById("res1").innerHTML = "";
    document.getElementById("res2").innerHTML = "";
    document.getElementById("res3").innerHTML = "";

}