//queryselector permite elegir el llamado select del form
let seleccionar = document.querySelector('select');
//addEventListner es un listado de eventos (biblioteca) que lista al evento CHANGE y carga la funcion llamada elegir
seleccionar.addEventListener('change', elegir);

function elegir() {
    /*variable que lleva el valor seleccionado por el usuario*/
    let eleccion = seleccionar.value;

    if (eleccion == 0) {
        descripcion.innerHTML = '';

    }
    if (eleccion == 1) {
        descripcion.innerHTML = 'El Koenigsegg Jesko es un hiperdeportivo sueco que lleva el nombre del padre del fundador de la compañía, Christian von Koenigsegg. Presentado en el Salón del Automóvil de Ginebra en 2019, el Jesko es una obra maestra de la ingeniería con un motor V8 biturbo de 5.0 litros que produce más de 1,600 caballos de fuerza. Destaca por su aerodinámica avanzada, su chasis ligero y su enfoque en la velocidad extrema, con una velocidad máxima teórica de más de 480 km/h.'; 

    } else if (eleccion == 2) {
        descripcion.innerHTML = 'Fabricado por la icónica marca de automóviles francesa Bugatti, el Chiron es uno de los hiperdeportivos más reconocidos del mundo. Equipado con un motor W16 quad-turbo de 8.0 litros que produce alrededor de 1,500 caballos de fuerza, el Chiron es conocido por su rendimiento asombroso y su lujoso diseño. Además de su velocidad máxima limitada electrónicamente a 420 km/h, el Chiron ofrece una experiencia de conducción incomparable y una artesanía excepcional.';

    } else if (eleccion == 3) {
        descripcion.innerHTML = 'El Pagani Huayra Roadster es una versión descapotable del legendario hiperdeportivo italiano Huayra. Con un diseño exquisito y materiales de alta calidad, el Huayra Roadster combina un rendimiento impresionante con un estilo deslumbrante. Equipado con un motor V12 biturbo de 6.0 litros desarrollado por Mercedes-AMG, el Huayra Roadster produce más de 700 caballos de fuerza y ofrece una experiencia de conducción emocionante y visceral.';

    } else if (eleccion == 4) {
        descripcion.innerHTML = 'El Aston Martin Valkyrie es un hipercoche de edición limitada desarrollado en colaboración con Red Bull Racing Advanced Technologies y otras empresas de automoción de alto rendimiento. Diseñado por el renombrado ingeniero Adrian Newey, el Valkyrie cuenta con un sistema de propulsión híbrido que combina un motor V12 atmosférico de 6.5 litros con un motor eléctrico para producir más de 1,000 caballos de fuerza. Con un enfoque extremo en la aerodinámica y la ligereza, el Valkyrie promete un rendimiento impresionante tanto en carretera como en pista, convirtiéndolo en uno de los hiperdeportivos más emocionantes y exclusivos del mercado.';
    }
}