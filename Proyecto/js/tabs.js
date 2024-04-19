//recibe el controlador de eventos y el ID de cada contenido
function opciones(evt, info) {
    //*declaracion de varables
    //i control el for
    //tabcontent control el contenido de los TABS
    //tablinks control los enlaces de los TABS
    var i, tabcontent, tablinks;

    //obtener todos los elementos con class = "tabcontent" y ocultelos
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    //apunta a todos los elementos con class = "tablinks" y elimina la clase "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    //apunta a todos los elementos con class = "tablinks" y elimine la clase "active"
    //muestre la pestana actual y agregue una clase "activa" al boton que abrio la pestana
    document.getElementById(info).style.display = "block";
    evt.currentTarget.className += " active";
}