


//declaracion de constantes usando el metodo querySelector

//permite guardar el enlace el selecto <a> del html
const link = document.querySelectorAll('a');


const langEl = document.querySelector('.langWrap');
const logoText = document.querySelector('.logoText');
const menuHome = document.querySelector('.menuHome');
const menuNosotros = document.querySelector('.menuNosotros');
const menuColeccion = document.querySelector('.menuColeccion');
const menuEspecial = document.querySelector('.menuEspecial');
const menuTecno = document.querySelector('.menuTecno');
const menuCultura = document.querySelector('.menuCultura');
const menuExp = document.querySelector('.menuExp');
const titulo1 = document.querySelector('.titulo1');
const titulo2 = document.querySelector('.titulo2');
const p1 = document.querySelector('.p1');
const titulocorto = document.querySelector('.titulocorto');
const titulo4 = document.querySelector('.titulo4');
const p2 = document.querySelector('.p2');
const titulo5 = document.querySelector('.titulo5');
const p3 = document.querySelector('.p3');
const titulo6 = document.querySelector('.titulo6');
const p4 = document.querySelector('.p4');
const titulo7 = document.querySelector('.titulo7');
const p5 = document.querySelector('.p5');
const titulo8 = document.querySelector('.titulo8');
const p6 = document.querySelector('.p6');
const p7 = document.querySelector('.p7');
const titulo9 = document.querySelector('.titulo9');



//recorrido del ciclo for-Each usando la funcion flecha
//link parece ser una colección de elementos HTML, obtenida mediante el uso de querySelectorAll.
/*El ciclo forEach se utiliza para aplicar en cada elemento en la colección .
Para cada elemento r, se agrega un event listener que espera un click (addEventListener('click', ...)).*/
/*dentro del addEeventListener, se obtiene el valor del atributo language del elemento actual mediante getAttribute('language') 
y se almacena en la constante attr.*/


link.forEach(r => {
    r.addEventListener('click', () => {
        const attr = r.getAttribute('language');
        //permite acceder a un objeto changeLanguage con diferentes traducciones
        //usando la const de attr, el código accede a las propiedades logoText, tp2 y menuHome del objeto changeLanguage y asi sucesivamente...
        //textContent permite actualizar los contenidos de los elementos HTML        
        logoText.textContent = changeLanguage[attr].logoText;
        menuHome.textContent = changeLanguage[attr].menuHome;
        menuNosotros.textContent = changeLanguage[attr].menuNosotros;
        menuColeccion.textContent = changeLanguage[attr].menuColeccion;
        menuEspecial.textContent = changeLanguage[attr].menuEspecial;
        menuTecno.textContent = changeLanguage[attr].menuTecno;
        menuCultura.textContent = changeLanguage[attr].menuCultura;
        menuExp.textContent = changeLanguage[attr].menuExp;
        titulo1.textContent = changeLanguage[attr].titulo1;
        titulo2.textContent = changeLanguage[attr].titulo2;
        p1.textContent = changeLanguage[attr].p1;
        titulocorto.textContent = changeLanguage[attr].titulocorto;
        titulo4.textContent = changeLanguage[attr].titulo4;
        p2.textContent = changeLanguage[attr].p2;
        titulo5.textContent = changeLanguage[attr].titulo5;
        p3.textContent = changeLanguage[attr].p3;
        titulo6.textContent = changeLanguage[attr].titulo6;
        p4.textContent = changeLanguage[attr].p4;
        titulo7.textContent = changeLanguage[attr].titulo7;
        p5.textContent = changeLanguage[attr].p5;
        titulo8.textContent = changeLanguage[attr].titulo8;
        p6.textContent = changeLanguage[attr].p6;
        p7.textContent = changeLanguage[attr].p7;
        titulo9.textContent = changeLanguage[attr].titulo9;
    });
});


//objeto de json que asigna los valores a cada clase en español usando el atributo "espanish"
let changeLanguage = {

    "espanish":
    {
        "logoText": "MotorMajesty Hub",
        "menuHome": "Inicio",
        "menuNosotros": "Nosotros",
        "menuColeccion": "Colección",
        "menuEspecial": "Especial",
        "menuTecno": "Tecnología",
        "menuCultura": "Cultura",
        "menuExp": "Experiencias",
        "titulo1": "¡Bienvenido al Museo de Carros MotorMajesty Hub!",
        "titulo2": "Explora la historia sobre ruedas",
        "p1": "Sumérgete en el emocionante mundo de la historia automotriz mientras exploras nuestras colecciones cuidadosamente seleccionadas de automóviles icónicos y fascinantes. Desde los primeros modelos que cambiaron la forma en que nos movemos hasta los últimos avances en tecnología automotriz, nuestro museo ofrece una ventana única al pasado, presente y futuro del mundo del automóvil.",
        "titulocorto": "Descubre la historia en cada detalle: bienvenido al museo donde los automóviles narran su propia leyenda.",
        "titulo4": "Introducción",
        "p2": "El automóvil, desde su nacimiento, ha sido mucho más que un simple medio de transporte. Ha sido un símbolo de innovación, libertad y progreso. Desde los primeros modelos primitivos hasta los vehículos de alta tecnología de hoy en día, la historia del automóvil es un viaje fascinante a través del tiempo, marcado por inventores visionarios, avances tecnológicos y cambios culturales significativos. En esta página, te invitamos a embarcarte en un emocionante recorrido por la historia del automóvil, explorando sus orígenes humildes, su evolución a lo largo de los siglos y su impacto duradero en nuestras vidas.",
        "titulo5": "Los primeros pasos",
        "p3": "En los albores del siglo XIX, la idea de un vehículo que pudiera moverse sin la ayuda de caballos era poco más que un sueño. Sin embargo, visionarios como Nicolas-Joseph Cugnot y su 'Fardier à vapeur' sentaron las bases para lo que vendría después. Fue Karl Benz, en 1885, quien construyó el primer automóvil propulsado por un motor de combustión interna, sentando así las bases de la industria automotriz moderna. Con el tiempo, surgieron otros pioneros como Henry Ford, cuya visión de la producción en masa hizo que los automóviles fueran accesibles para el público en general.",
        "titulo6": "La Era Dorada",
        "p4": "El siglo XX presenció el auge de la industria automotriz, con la proliferación de marcas icónicas y modelos legendarios. La producción en masa permitió que los automóviles pasaran de ser un lujo exclusivo a una necesidad cotidiana. Modelos como el Ford Modelo T y el Volkswagen Beetle se convirtieron en símbolos de una nueva era de movilidad. La introducción de la línea de montaje por Henry Ford revolucionó la fabricación de automóviles, haciendo que la producción fuera más eficiente y económica que nunca antes.",
        "titulo7": "Guerras y Avances Tecnológicos",
        "p5": "Durante las guerras mundiales del siglo XX, el automóvil desempeñó un papel crucial en los esfuerzos militares, impulsando la demanda de vehículos resistentes y confiables. Estos conflictos también llevaron a importantes avances tecnológicos, como la introducción de la tracción en las cuatro ruedas y el desarrollo de vehículos blindados. Después de la Segunda Guerra Mundial, la industria automotriz experimentó un período de rápido crecimiento y expansión, con innovaciones como la dirección asistida y la transmisión automática.",
        "titulo8": "La Era Moderna",
        "p6": "En el siglo XXI, la industria automotriz se encuentra en medio de una revolución tecnológica sin precedentes. La electrificación, la conducción autónoma y la conectividad están transformando la forma en que concebimos y utilizamos los automóviles. Empresas como Tesla están liderando el camino hacia un futuro de movilidad sostenible, mientras que otras están explorando nuevas fronteras en la innovación y el diseño. A medida que avanzamos hacia un mundo cada vez más automatizado y conectado, el automóvil sigue siendo un símbolo perdurable de progreso y posibilidad.",
        "p7": "La historia del automóvil es mucho más que una cronología de inventos y avances tecnológicos. Es una historia de ingenio humano, determinación y visión. A lo largo de los siglos, el automóvil ha sido un catalizador de cambio, dando forma a nuestras ciudades, nuestras economías y nuestras vidas de maneras inimaginables. En el museo de carros, celebramos esta rica herencia histórica, preservando los logros del pasado mientras miramos hacia un futuro de innovación y descubrimiento continuo. Únete a nosotros en este emocionante viaje a través del tiempo, donde cada carro cuenta una historia única y nos recuerda el poder transformador de la creatividad humana.",
        "titulo9": "Visítanos en:",
    },

  //objeto de json que asigna los valores a cada clase en ingles usando el atributo "english"
    "english":
    {
        "logoText": "MotorMajesty Hub",
        "menuHome": "Home",
        "menuNosotros": "About Us",
        "menuColeccion": "Collection",
        "menuEspecial": "Special",
        "menuTecno": "Tecnology",
        "menuCultura": "Culture",
        "menuExp": "Experiences",
        "titulo1": "¡Welcome to the MotorMajesty Hub Car Museum!",
        "titulo2": "Explore history on wheels",
        "p1": "Immerse yourself in the exciting world of automotive history as you explore our carefully curated collections of iconic and fascinating automobiles. From the first models that changed the way we move to the latest advances in automotive technology, our museum offers a unique window into the past, present and future of the automotive world.",
        "titulocorto": "Discover history in every detail: welcome to the museum where cars tell their own legend.",
        "titulo4": "Introduction",
        "p2": "The automobile, since its birth, has been much more than a simple means of transportation. It has been a symbol of innovation, freedom and progress. From the earliest primitive models to today's high-tech vehicles, the history of the automobile is a fascinating journey through time, marked by visionary inventors, technological advances and significant cultural changes. On this page, we invite you to embark on an exciting journey through the history of the automobile, exploring its humble origins, its evolution over the centuries and its lasting impact on our lives.",
        "titulo5": "The first steps",
        "p3": "At the dawn of the 19th century, the idea of ​​a vehicle that could move without the help of horses was little more than a dream. However, visionaries like Nicolas-Joseph Cugnot and his 'Fardier à vapeur' laid the foundations for what would come later. It was Karl Benz, in 1885, who built the first automobile powered by an internal combustion engine, thus laying the foundations of the modern automotive industry. Over time, other pioneers emerged such as Henry Ford, whose vision of mass production made automobiles accessible to the general public.",
        "titulo6": "The Golden Age",
        "p4": "The 20th century saw the rise of the automotive industry, with the proliferation of iconic brands and legendary models. Mass production allowed automobiles to go from an exclusive luxury to an everyday necessity. Models like the Ford Model T and the Volkswagen Beetle became symbols of a new era of mobility. The introduction of the assembly line by Henry Ford revolutionized automobile manufacturing, making production more efficient and economical than ever before.",
        "titulo7": "Wars and Technological Advances",
        "p5": "During the world wars of the 20th century, the automobile played a crucial role in military efforts, driving demand for rugged and reliable vehicles. These conflicts also led to important technological advances, such as the introduction of four-wheel drive and the development of armored vehicles. After World War II, the automotive industry experienced a period of rapid growth and expansion, with innovations such as power steering and automatic transmission.",
        "titulo8": "The Modern Era",
        "p6": "In the 21st century, the automotive industry is in the midst of an unprecedented technological revolution. Electrification, autonomous driving and connectivity are transforming the way we think about and use cars. Companies like Tesla are leading the way toward a sustainable mobility future, while others are exploring new frontiers in innovation and design. As we move towards an increasingly automated and connected world, the automobile remains an enduring symbol of progress and possibility.",
        "p7": "The history of the automobile is much more than a chronology of inventions and technological advances. It is a story of human ingenuity, determination and vision. Over the centuries, the automobile has been a catalyst for change, shaping our cities, our economies and our lives in unimaginable ways. At the car museum, we celebrate this rich historical heritage, preserving the achievements of the past while looking toward a future of continuous innovation and discovery. Join us on this exciting journey through time, where each car tells a unique story and reminds us of the transformative power of human creativity.",
        "titulo9": "Visit us in:",
    }
}