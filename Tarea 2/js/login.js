/*conexion con HTML usando el id btn-login y cargando la funcion llamada login */
document.getElementById("btn-login").addEventListener("click", login);

/*funcion que valida el login*/
function validation_alert(ptext) {
    swal.fire({
        /*icon: "error",*//*estos son los que traen por default si uno no le pone ninguna micor interacion*/
        title: "Verificar la entrada de datos",
        text: ptext,
        confirmButtonText: "Intentar de nuevo",
        confirmButtonColor: "#0063be",
        html: '<iframe width="120" height="200" src="https://lottie.host/embed/d5cf2616-cf76-4bc6-8699-186aa769ff3f/4ewy6mh6At.json"></iframe> <br><p>' + ptext + " <p>",
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
                //icon: "success", /*estos son los que traen por default si uno no le pone ninguna micor interacion*/
                title: "Credenciales correctas",
                showConfirmButton: false,
                //milisegundos equivalen a 5seg
                timer: 5000,
                html: '<iframe src="https://lottie.host/embed/b8af6f86-ee71-4ba3-9ecc-bad5d7bad494/ObkAlVaZV6.json"></iframe> <br><br><p>Un momento!</p>',

            }).then(() => {
                window.location.href = "../html/landing.html", "blank";
            });
        } else {
            text = "Usuario o contraseña incorrecta.";
            //carga la funcion de arriba
            validation_alert(text);
        }
    }
}
