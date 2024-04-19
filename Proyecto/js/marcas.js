document.getElementById('menuOpciones').addEventListener('change', galeria);

function galeria() {
    var opciones = document.getElementById('menuOpciones').value;
    switch (opciones) {
        //filtro de categorias
        case "bugatti":
            document.querySelector('.galeriaBugatti').style.display = "block"
            document.querySelector('.galeriaKoe').style.display = "none"
            document.querySelector('.galeriaVenom').style.display = "none"
            document.querySelector('.galeriaSSC').style.display = "none"
            document.querySelector('.galeriaRimac').style.display = "none"
            document.querySelector('.galeriaMcLaren').style.display = "none"
            break;
        case "koenigsegg":
            document.querySelector('.galeriaBugatti').style.display = "none"
            document.querySelector('.galeriaKoe').style.display = "block"
            document.querySelector('.galeriaVenom').style.display = "none"
            document.querySelector('.galeriaSSC').style.display = "none"
            document.querySelector('.galeriaRimac').style.display = "none"
            document.querySelector('.galeriaMcLaren').style.display = "none"
            break;
        case "venom":
            document.querySelector('.galeriaBugatti').style.display = "none"
            document.querySelector('.galeriaKoe').style.display = "none"
            document.querySelector('.galeriaVenom').style.display = "block"
            document.querySelector('.galeriaSSC').style.display = "none"
            document.querySelector('.galeriaRimac').style.display = "none"
            document.querySelector('.galeriaMcLaren').style.display = "none"
            break;
        case "ssc":
            document.querySelector('.galeriaBugatti').style.display = "none"
            document.querySelector('.galeriaKoe').style.display = "none"
            document.querySelector('.galeriaVenom').style.display = "none"
            document.querySelector('.galeriaSSC').style.display = "block"
            document.querySelector('.galeriaRimac').style.display = "none"
            document.querySelector('.galeriaMcLaren').style.display = "none"
            break;
        case "rimac":
            document.querySelector('.galeriaBugatti').style.display = "none"
            document.querySelector('.galeriaKoe').style.display = "none"
            document.querySelector('.galeriaVenom').style.display = "none"
            document.querySelector('.galeriaSSC').style.display = "none"
            document.querySelector('.galeriaRimac').style.display = "block"
            document.querySelector('.galeriaMcLaren').style.display = "none"
            break;
        case "mclaren":
            document.querySelector('.galeriaBugatti').style.display = "none"
            document.querySelector('.galeriaKoe').style.display = "none"
            document.querySelector('.galeriaVenom').style.display = "none"
            document.querySelector('.galeriaSSC').style.display = "none"
            document.querySelector('.galeriaRimac').style.display = "none"
            document.querySelector('.galeriaMcLaren').style.display = "block"
            break;
        default:
            document.querySelector('.galeriaBugatti').style.display = "none"
            document.querySelector('.galeriaKoe').style.display = "none"
            document.querySelector('.galeriaVenom').style.display = "none"
            document.querySelector('.galeriaSSC').style.display = "none"
            document.querySelector('.galeriaRimac').style.display = "none"
            document.querySelector('.galeriaMcLaren').style.display = "none"
    }
}