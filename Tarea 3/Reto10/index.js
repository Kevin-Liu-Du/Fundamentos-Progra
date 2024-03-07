'use strict';


//la función searchStores() realiza una búsqueda de tiendas según la entrada del usuario y muestra los resultados utilizando las imágenes asociadas a las tiendas encontradas.

function searchCars() {
    //Obtiene el valor del input de búsqueda del elemento con el id "searchInput" y lo convierte a minúsculas para hacer la búsqueda insensible a mayúsculas y minúsculas.
    let searchInput = document.getElementById("searchInput").value.toLowerCase();

    //definir arreglos de tiendas para tres ubicaciones diferentes: San José, Santa Ana y Heredia, respectivamente.

    // arreglo de tiendas o lugares
    let ferrariMarca = ["Aperta", "Enzo", "812 Superfast"];

    // arreglo de tiendas para Santa Ana
    let lamborghiniMarca = ["Huracan Performante", "Aventador", "Centenario"];

    // arreglo de tiendas para Heredia
    let mercedesMarca = ["SLS AMG", "Clase G", "AMG GT"];

    let porschesMarca = ["918 Spyder", "911 GT3 RS", "718 Cayman GT4 RS"];

    let toyotaMarca = ["GR86", "LEXUS LFA", "GR Supra"];

    let nissanMarca = ["GT-R Nismo", "Skyline R34", "350Z"];

    //crea un objeto storeImages que asocia el nombre de cada tienda con su imagen correspondiente.
    let storeImages = {
        "aperta": "laf.jpg",
        "enzo": "enzo.jpg",
        "812 superfast": "812.jpg",
        "huracan performante": "huracan.jpg",
        "aventador": "aventador.jpg",
        "centenario": "centenario.jpg",
        "sls amg": "sls.jpg",
        "clase g": "g.jpg",
        "amg gt": "amg.jpg",
        "918 spyder": "918.jpg",
        "911 gt3 rs": "911.jpg",
        "718 cayman gt4 rs": "718.jpg",
        "gr86": "86.jpg",
        "lexus lfa": "lfa.jpg",
        "gr supra": "supra.jpg",
        "gt-r nismo": "nismo.jpg",
        "skyline r34": "r34.jpg",
        "350z": "350.jpg",
    };

    //crear un arreglo vacío llamado filteredStores que contendrá las tiendas filtradas según la búsqueda del usuario.
    let filteredCars = [];

    //permite ombinar todas las tiendas de las tres ubicaciones en un solo arreglo llamado allStores.
    let allCars = [...ferrariMarca, ...lamborghiniMarca, ...mercedesMarca, ...porschesMarca, ...toyotaMarca, ...nissanMarca];

    //verificar si el campo de búsqueda está vacío, si es así, muestra una alerta indicando al usuario que debe completar el campo y termina la ejecución de la función.
    if (searchInput === "") {
        swal.fire({
            icon: "error",
            title: "Verificar la entrada de datos",
            confirmButtonText: "Intentar de nuevo",
            confirmButtonColor: "#0063be",
        });
        //alert("Debe completar el campo...")
        return;
    }


    //inicia un ciclo que recorre todas las tiendas combinadas en allStores    
    //permite verificar si el nombre de la tienda actual (en minúsculas) contiene la cadena de búsqueda (también en minúsculas). 
    //si hay una coincidencia, asigna la tienda actual al arreglo filteredStores y termina el ciclo para evitar seguir buscando.
    for (let i = 0; i < allCars.length; i++) {
        if (allCars[i].toLowerCase().includes(searchInput)) {
            // si hay coincidencia, asigna la tienda actual al arreglo filteredStores
            filteredCars = [allCars[i]];
            // termina el bucle, ya que se encontró una coincidencia para que no siga iterando y consumiendo memoria
            break;
        }
    }

    //si no se encontró una coincidencia específica, buscar por ubicación general
    //San José, Santa Ana o Heredia) y asigna las tiendas correspondientes a filteredStores.

    if (filteredCars.length === 0) {
        if (searchInput === "ferrari") {
            filteredCars = ferrariMarca;
        } else if (searchInput === "lamborghini") {
            filteredCars = lamborghiniMarca;
        } else if (searchInput === "mercedes") {
            filteredCars = mercedesMarca;
        } else if (searchInput === "porsche") {
            filteredCars = porschesMarca;
        } else if (searchInput === "toyota") {
            filteredCars = toyotaMarca;
        } else if (searchInput === "nissan") {
            filteredCars = nissanMarca;
        }
    }

    //cargar la función displayResults() pasando como argumentos el arreglo de tiendas filtradas(filteredStores) y el objeto storeImages que contiene las imágenes correspondientes a las tiendas.
    displayResults(filteredCars, storeImages);
}


//la función displayResults() toma las tiendas filtradas y las imágenes asociadas a esas tiendas, y las presenta en forma de tarjetas en el contenedor de resultados en la página web.
//crear tarjetas validando si estan o no estan

function displayResults(modelo, storeImages) {
    //obtiene el contenedor de resultadosdel documento HTML con el id "pResult" y lo almacena en la variable resultsContainer.
    let resultsContainer = document.getElementById("pResult");
    //limpia el contenido actual del contenedor estableciendo su propiedad innerHTML como una cadena vacía.
    resultsContainer.innerHTML = "";

    //verificar si el arreglo de tiendas stores está vacío. Si no se encontraron tiendas para la ubicación especificada, se establece el contenido del contenedor 
    //resultsContainer con un mensaje indicando que no se encontraron tiendas para esa ubicación.
    if (modelo.length === 0) {
        resultsContainer.innerHTML = "<p>NO se encontraron el modelo escrito. </p>";
        // sino 
    } else {
        // recorre sobre las tiendas y crea tarjetas para cada una
        //si se encontraron tiendas, la función recorre el arreglo de tiendas stores utilizando un ciclo for y crea una tarjeta (card) para cada tienda.
        for (let i = 0; i < modelo.length; i++) {
            // obtiene la ruta de la imagen correspondiente al local actual
            let imageSrc = storeImages[modelo[i].toLowerCase()] || "ruta_por_defecto.jpg";

            // crea una tarjeta (card) para la tienda actual
            let card = document.createElement("div");
            // clase de Bootstrap para tarjetas con margen inferior
            card.className = "card mb-3";
            // establece el ancho maximo de la tarjeta al 100%
            card.style.maxWidth = "100%";

            //crear dinámicamente la estructura de la tarjeta (card) utilizando HTML y la propiedad innerHTML. 
            //la tarjeta incluye la imagen de la tienda, el nombre de la tienda, una descripción breve y la fecha de la última actualización.
            card.innerHTML = `
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${imageSrc}" class="img-fluid rounded-start" alt="Modelo ${modelo[i]}">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Modelo ${modelo[i]}</h5>
                            <p class="card-text">Pollo Granjero y Don Pollo ya son parte del sabor local en Centroamérica, en una estrategia con una amplia visión de expansión y liderazgo de nuestro Presidente.
                            Pasá a tu punto de venta favorito para disfrutar nuestras increíbles promociones.
                            </p>
                            <p class="card-text"><small class="text-body-secondary">Última actualización 10 de enero 2024</small></p>
                        </div>
                    </div>
                </div>
            `;

            //añade cada tarjeta creada al contenedor de resultados resultsContainer utilizando appendChild().
            resultsContainer.appendChild(card);
        }
    }
}