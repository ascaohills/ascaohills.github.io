
var imagenes = {


    "imagenes_c": [
        "imagenes/Grande/habitaadult2.jpg",
        "imagenes/Grande/habitaniño.jpg",
        "imagenes/Grande/estar.jpg"
    ],

    "imagenes_v": [
        "imagenes/Grande/parking.jpg",
        "imagenes/Grande/cocina.jpg",
        "imagenes/Grande/baño.jpg",
        "imagenes/Grande/escalera.jpg",
        "imagenes/Grande/habitaadult.jpg"
    ],
    "imagenes_h": [
       
        "imagenes/Grande/gym.jpg",
        "imagenes/Grande/tenis.jpg",
        "imagenes/Grande/salon3.jpg",
        "imagenes/Grande/salon2.jpg",
        "imagenes/Grande/salon.jpg",
        "imagenes/Grande/piscina.jpg",
        "imagenes/Grande/parque.jpg"
       
    ],
}




var fotos_casas=document.querySelector('.fotos_casas');
var imagen_v = imagenes.imagenes_v;
var imagen_h = imagenes.imagenes_h;
var imagen_c = imagenes.imagenes_c;



function carga_img(i) {
    
    for (var x = 0; x < i.length; x++) {

        if (i == imagen_c) {

            fotos_casas.innerHTML += '<img class="Polygon" src="' + i[x] + '">';

        } else if (i == imagen_h) {

            fotos_casas.innerHTML += '<img class="Polygon" src="' + i[x] + '">';

        } else if (i == imagen_v) {

            fotos_casas.innerHTML += '<img class="Polygon" src="' + i[x] + '">';

        }
}
   

}


