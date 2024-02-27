//Evento que carga la funcion automaticamente
window.onload = function() {
    document.getElementById("output-img").innerHTML = "<img src='../Reto3/img/cine.png' class='img-fluid rounded' alt='cine' />";

    //evento que permite cambiar el objeto onchange
    document.getElementById("cine").onchange = function(e) {

        //destino del valor seleccionado por el usuario
        let n = e.target.value;

        //expresiones que guardan las imagene de los estadios y la informacion de cada uno...
        let imagen = "<img src='img/combo/" + n + ".jpg' class='img-fluid img-thumbnail rounded' alt='cine' />";
        let text = [
            "<a href='https://www.novacinemas.cr/cartelera/' class='cine-link'>Avenida Escazú:</a> Ubicado en Avenida Escazú, este cine ofrece una experiencia cinematográfica moderna y cómoda, con múltiples salas equipadas con tecnología de vanguardia. Es un destino popular para los amantes del cine en la zona de Escazú.",
            "<a href='https://www.novacinemas.cr/cartelera/' class='cine-link'>Ciudad del Este Curridabat:</a> Situado en Ciudad del Este, Curridabat, este cine forma parte de la cadena Nova Cinemas. Ofrece instalaciones modernas y una amplia variedad de películas para disfrutar, atrayendo a los residentes de Curridabat y áreas circundantes.",
            "<a href='https://www.novacinemas.cr/cartelera/' class='cine-link'>Plaza Real Alajuela:</a> En Plaza Real, Alajuela, este cine de Nova Cinemas brinda una experiencia cinematográfica de alta calidad en una ubicación conveniente. Con instalaciones modernas y una selección diversa de películas, es un punto de referencia para los cinéfilos en Alajuela y sus alrededores."
        ];

            //salida de la imagenes y los texto informativos
            document.getElementById("output-img").innerHTML = imagen;
            document.getElementById("output-txt").innerHTML = text[n - 1];
    };
};

//funcion del boton reiniciar
document.getElementById("btn-clean").onclick = function() {
    document.getElementById("output-img").innerHTML = "<img src='../Reto3/img/cine.png' class='img-fluid rounded' alt='cine' />";
    //limpia los textos informativos de los estadios...
    document.getElementById("output-txt").innerHTML = "";
    //dejar el select con el texto por defecto...
    document.getElementById("cine").value = "";
};