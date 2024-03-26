// variables controladoras
var panorama, viewer, container, infospot;

//obtener una referencia al contenedor donde se mostrara la escena 3D
container = document.querySelector('#container_principal');

//cargar la foto 360
panorama = new PANOLENS.ImagePanorama('imagenes/cocina.jpg');

//ZONA1
var infospot1 = new PANOLENS.Infospot(100, PANOLENS.DataImage.Info);
var infospot1 = new PANOLENS.Infospot(40, 'imagenes/gorro.png');
infospot1.position.set(174 ,89 , -500);
infospot1.addHoverText('Un extractor de cocina es un dispositivo que elimina el humo, los olores y el vapor durante la cocción. Se coloca sobre la estufa y aspira el aire contaminado, filtrándolo y expulsándolo al exterior o recirculándolo en la cocina. Es esencial para mantener un ambiente limpio y seguro mientras se cocina.', -60);
infospot1.element.innerHTML = '<div style="background-color: rgba(0, 0, 0, 0.8); color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;">Un extractor de cocina es un dispositivo que elimina el humo, los olores y el vapor durante la cocción. Se coloca sobre la estufa y aspira el aire contaminado, filtrándolo y expulsándolo al exterior o recirculándolo en la cocina. Es esencial para mantener un ambiente limpio y seguro mientras se cocina.</div>';
panorama.add(infospot1);

//ZONA2
var infospot2 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
var infospot2 = new PANOLENS.Infospot(40, 'imagenes/mueble.png');
infospot2.position.set(-174 ,45 , -501);
infospot2.addHoverText('Un mueble de cocina es un componente estructural diseñado para almacenar utensilios, alimentos y otros elementos relacionados con la cocina. Pueden estar hechos de diversos materiales como madera, metal o plástico y vienen en una variedad de estilos y tamaños para adaptarse a las necesidades de cada cocina. Estos muebles suelen incluir armarios, cajones, estantes y superficies de trabajo, proporcionando funcionalidad y organización en el espacio de cocina.', -60);
infospot2.element.innerHTML = '<div style="background-color: rgba(0,0,255,0.8); color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;">Un mueble de cocina es un componente estructural diseñado para almacenar utensilios, alimentos y otros elementos relacionados con la cocina. Pueden estar hechos de diversos materiales como madera, metal o plástico y vienen en una variedad de estilos y tamaños para adaptarse a las necesidades de cada cocina. Estos muebles suelen incluir armarios, cajones, estantes y superficies de trabajo, proporcionando funcionalidad y organización en el espacio de cocina.</div>';
panorama.add(infospot2);

//ZONA3
var infospot3 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infospot3.position.set(156 ,-304 , -500);
infospot3.addHoverText('Un horno de cocina es un electrodoméstico diseñado para cocinar o calentar alimentos mediante calor seco. Está compuesto por una cámara de cocción, donde se colocan los alimentos, y elementos de calentamiento, como resistencias eléctricas o quemadores de gas. Los hornos pueden ser de gas o eléctricos y vienen en una variedad de tamaños y estilos, como hornos independientes, empotrados o de pared. Son fundamentales en la cocina moderna para hornear, asar, gratinar y cocinar una amplia gama de platos.', -60);
infospot3.element.innerHTML = `
    <div class="" style="">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/myJNWmtRAPs?si=anCGwZhtFrBwnBMR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>        
    </div>
`;
panorama.add(infospot3);

//ZONA 4
var infospot4 = new PANOLENS.Infospot(200, PANOLENS.DataImage.Info);
var infospot4 = new PANOLENS.Infospot(200, 'imagenes/info.png');
infospot4.position.set(-4500, -650, -3500);
infospot4.addHoverText('Los "sillones de comedor" son asientos acolchados diseñados para su uso alrededor de una mesa de comedor. A diferencia de las sillas de comedor convencionales, los sillones ofrecen un mayor nivel de comodidad y a menudo tienen reposabrazos. Estos sillones pueden variar en estilo y diseño, desde opciones más formales y elegantes hasta modelos más relajados y contemporáneos. Son ideales para crear un ambiente acogedor en el comedor y pueden ser una opción popular para las cabeceras de la mesa o para agregar variedad visual al conjunto de sillas.', -60);
infospot4.element.innerHTML = '<div style="background-color: rgba(69, 148, 208, 1); color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;">Los "sillones de comedor" son asientos acolchados diseñados para su uso alrededor de una mesa de comedor. A diferencia de las sillas de comedor convencionales, los sillones ofrecen un mayor nivel de comodidad y a menudo tienen reposabrazos. Estos sillones pueden variar en estilo y diseño, desde opciones más formales y elegantes hasta modelos más relajados y contemporáneos. Son ideales para crear un ambiente acogedor en el comedor y pueden ser una opción popular para las cabeceras de la mesa o para agregar variedad visual al conjunto de sillas.</div>';
panorama.add(infospot4);

//ZONA 5
var infospot5 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
var infospot5 = new PANOLENS.Infospot(40, 'imagenes/refri.png');
infospot5.position.set(186 ,-182 , 500);
infospot5.addHoverText('Un refrigerador es un electrodoméstico que mantiene los alimentos frescos al reducir su temperatura. Consiste en una cámara aislada térmicamente que utiliza un sistema de refrigeración para mantener un ambiente frío y constante en su interior. Es esencial en la cocina moderna para preservar los alimentos y garantizar su seguridad.', -60);
infospot5.element.innerHTML = '<div style="background-color: rgba(127, 17, 224, 1); color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;"> Un refrigerador es un electrodoméstico que mantiene los alimentos frescos al reducir su temperatura. Consiste en una cámara aislada térmicamente que utiliza un sistema de refrigeración para mantener un ambiente frío y constante en su interior. Es esencial en la cocina moderna para preservar los alimentos y garantizar su seguridad. </div>';
panorama.add(infospot5);

//ZONA 6
var infospot6 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infospot6.position.set(500 ,-75 , -228);
infospot6.addHoverText('Un audio MP3 multimedial...', -60);
infospot6.element.innerHTML = '<div style="color:#000; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;"><audio controls><source src="audios/audio1.mp3" type="audio/mpeg"></audio></div>';
panorama.add(infospot6);

//ZONA 7
var infospot7 = new PANOLENS.Infospot(200, PANOLENS.DataImage.Info);
var infospot7 = new PANOLENS.Infospot(40, 'imagenes/info2.png');
infospot7.position.set(-500, -103, -43);
//evento hover
infospot7.addHoverText('Un "lava platos" es un fregadero de cocina diseñado específicamente para lavar platos, utensilios de cocina y otros objetos similares. Por lo general, consta de una o varias cubetas, grifos para suministrar agua caliente y fría, y un desagüe para eliminar el agua sucia. Es un elemento esencial en cualquier cocina para facilitar la limpieza y el lavado de vajilla después de cocinar y comer.', -60);
infospot7.element.innerHTML = '<div style="background-color: rgba(69, 148, 208, 1); color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;">Un "lava platos" es un fregadero de cocina diseñado específicamente para lavar platos, utensilios de cocina y otros objetos similares. Por lo general, consta de una o varias cubetas, grifos para suministrar agua caliente y fría, y un desagüe para eliminar el agua sucia. Es un elemento esencial en cualquier cocina para facilitar la limpieza y el lavado de vajilla después de cocinar y comer.</div>';
panorama.add(infospot7);





//  Agrega la panormica al visor
viewer = new PANOLENS.Viewer({ container: container });
//carga la imagen 360
viewer.add(panorama);