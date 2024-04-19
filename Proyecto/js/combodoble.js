window.onload = function() {
    //combo llamado modelo ID
    document.getElementById("modelo").onchange = function(e) {
        //destino del valor seleccionado combo1
        a = e.target.value;
        if (a == "Porsche 911") {
            var imagen = "../img/Porsche 911.png";
        } else if (a == "Porsche 918 Spyder") {
            var imagen = "../img/Porsche 918 Spyder.png";
        } else if (a == "Porsche Carrera GT") {
            var imagen = "../img/Porsche Carrera GT.png";
        } else if ( a == "Porsche Panamera") {
            var imagen = "../img/Porsche Panamera.png";
        }
        //agrega la imagen del carro modelo
        document.getElementById("imagen").src = imagen;
        }
        //combo llamado version
    document.getElementById("version").onchange = function(es) {
        //destiono del valor seleccionado combo2
        n = es.target.value;
    }
}

function calcular() {
    var montoCuota = 0;

    switch (a) {
        case "Porsche 911":
            if (n == "GT3") montoCuota = 1000;
            else montoCuota = 1500;
            break;
        case "Porsche 918 Spyder":
            if (n == "GT3") montoCuota = 1000;
            else montoCuota = 1500;
            break;
        case "Porsche Carrera GT":
            if (n == "GT3") montoCuota = 1000;
            else montoCuota = 1500;
            break;
        case "Porsche Panamera":
            if (n == "GT3") montoCuota = 1000;
            else montoCuota = 1500;
            break;
    }
    let imagenDireccion = "../img/" + a.toLowerCase() + ".png"

    //el resultado se muestra en un desplegable
    swal.fire({
        //la variable se encarga de elegir la imagen del carro
        imageUrl: imagenDireccion,
        html: "<p> Mira la cuota mensual del " +
            a +
            " " +
            n + 
            "<br><br> <strong>Cuota mensual:</strong></p> " +
            "$" + 
            montoCuota,
        imageWidth: 600,
        imageHeight: 250,
        imageAlt: "Vehiculo " + a,
    })
}