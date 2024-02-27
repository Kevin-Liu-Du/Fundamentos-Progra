/*conexion con HTML usando el id btn-login y cargando la funcion llamada login */
document.getElementById("btn-login").addEventListener("click", login);

/*funcion que valida el login*/
function validation_alert(ptext) {
    swal.fire({
        /*icon: "error",*/
        title: "Verificar la entrada de datos",
        text: ptext,
        confirmButtonText: "Intentar de nuevo",
        confirmButtonColor: "#0063be",
        html: '<iframe src="https://lottie.host/embed/ad132777-cf17-4738-9ba3-a9a319c09343/s64MFq8jiC.json"></iframe> <br><p>' + ptext + " <p>",
    });
}

//funcion login
function login() {
    let user_input =document.getElementById("in-txt-user").value;
    let pass_input =document.getElementById("in-txt-pass").value;
    //declaracion de los datos usuario y password respectivamente
    let username = "cenfo";
    let password = "123";
    //identificadores de los campors username y password
    let input = [user_input, pass_input];
    let input_id = ["in-txt-user", "in-txt-pass"];
    let error_count = 0;
    let text = "";
    //ciclo FOR que hace un recorrido con la clase llamada error que permite poner la franja roja del error
    for (let i = 0; i < input.length; i++) {
        document.getElementById(input_id[1]).classList.remove("error");
        //si estan vacios los campos de entradas
        if (input[i] == "") {
            //aparece el texto que lleva el perimetro de la funcion validacion_alert
            text = "Los campos requeridos NO pueden estar vacio.";
            validation_alert(text);
            document.getElementById(input_id[i]).classList.add("error");
            error_count++;
        }
    }

    //validacion si los campos username y password son iguales
    if (error_count == 0) {
        if (user_input == username && pass_input == password) {
            swal.fire({
                //icon: "success",
                title: "Credenciales correctas",
                showConfirmButton: false,
                //milisegundos equivalen a 5seg
                timer: 5000,
                html: '<iframe width="320" height="240" src="https://lottie.host/embed/afba84d4-bd1e-41b3-a268-9093d53892bc/aTVTvwftNt.json"></iframe> <br><br><p>Un momento!</p>',

            }).then(() => {
                window.location.href = "https://ucenfotec.ac.cr/", "blank";
            });
        } else {
            text = "Usuario o contraseña incorrecta.";
            //carga la funcion de arriba
            validation_alert(text);
        }
    }
}