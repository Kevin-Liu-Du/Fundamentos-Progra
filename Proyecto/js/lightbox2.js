/*SOLUCION BLOQUE #1*/
/*Función ejecutar(div, video_id): 
Esta función se utiliza para revelar un lightbox y agregar la reproducción automática de un video de YouTube. 
Recibe dos parámetros: div y video_id.
Se obtiene la URL del video de YouTube utilizando el ID del video proporcionado.
Luego, se agrega el parámetro autoplay=1 a la URL del video para habilitar la reproducción automática.
Después, se muestra el elemento HTML con el ID especificado por div, lo que revela el lightbox y muestra el video.*/

//Funcion para revelar lightbox y agregar reproduccion automatica de YT
function ejecutar(div, video_id) {
    var video = document.getElementById(video_id).src;
    //adicionar el autoplay URL
    document.getElementById(video_id).src = video + '&autoplay=1';
    document.getElementById(div).style.display = 'block';
}

/*Función ocultar(div, video_id):
Esta función se utiliza para ocultar el lightbox y detener la reproducción automática del video de YouTube.
También recibe dos parámetros: div y video_id.
Al igual que en la función anterior, se obtiene la URL del video de YouTube utilizando el ID del video.
Luego, se elimina el parámetro autoplay = 1 de la URL del video para detener la reproducción automática.
A continuación, se oculta el elemento HTML con el ID especificado por div, lo que oculta el lightbox y detiene la reproducción del video.
*/

//ocutar la caja y eliminar la reproduccion automatica de YT
function ocultar(div, video_id) {
    var video = document.getElementById(video_id).src;
    //remover el autoplay URL
    var cleaned = video.replace('&autoplay=1', '')
    document.getElementById(video_id).src = cleaned;
    document.getElementById(div).style.display = 'none';
}