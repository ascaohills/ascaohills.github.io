

var QS = document.getElementById('Quienes');
var QO = document.getElementById('Ofrecemos');
var G = document.getElementById('gallery');
var Cnt = document.getElementById('Contact');
var form = document.getElementById('formularioContacto');
var opciones = document.getElementById('opcion');
var mapa = document.getElementById('mapa');
var eslogan = document.getElementById('eslogan');
var x = window.matchMedia("(max-width: 1024px)");
var y = window.matchMedia("(max-width: 736px)");

function cargaOpcion(x) {

    if (x == 0) {
        opciones.style.display = 'none';
    }
    else if (x == 1) {
        opciones.style.display = 'block';
    }
}

$(document).ready(function () {



    $(".opciones_menu_ordenador").click(function () {
        var eleccion = $(this).attr("id");
        localStorage.eleccion1 = eleccion;

        cargaOpcion(1);


        if (eleccion == 'quienesSomos') {
            reseteoOpciones();
            QuienesSomos(1);

        } else if (eleccion == 'queOfrecemos') {
            reseteoOpciones();
            QueOfrecemos(1);

        } else if (eleccion == 'galeria') {
            reseteoOpciones();
            galeria(1);

        } else if (eleccion == 'contacto') {
            reseteoOpciones();
            Contacto(1);

        };

        $('img').click(function () {
            var imagen = $(this).attr('src');
            localStorage.fotografia = imagen;
            ampliar(localStorage.fotografia);

        });

    });


});

document.querySelector('#cruz_popUp').addEventListener('click', cruz_popUp);


function ampliar(n) {

    document.querySelector('.zoom').style.display = 'block';
    document.querySelector('.foto').src = n;
    document.querySelector('.cruz').style.display = 'none';


    var categoria = [imagen_c, imagen_h, imagen_v];
    var array;
    var galeria_posicion;
    var posicion_foto;
    var localiza_foto;
    var posicion_categoria;
    var array_eleccion;
   

    for (x = 0; x < categoria.length; x++) {

        array = categoria[x];
        galeria_posicion = array.includes(n); // busca la foto en cada una de las categorias 

        console.log('EXISTE = ' + galeria_posicion);

        if (galeria_posicion == true) {

            posicion_foto = categoria[x]; // la matriz de esa categoria
            console.log('MATRIZ DE LA FOTOGRAFIA = ' + posicion_foto);
            posicion_categoria = categoria.indexOf(array); // la categoria, en numero, de la foto pinchada. 0, 1, 2, 3
            console.log('NUMERO DE LA CATEGORIA = ' + posicion_categoria);
            var nombre_matriz = categoria[posicion_categoria];
            console.log(nombre_matriz);

            medida_pantalla(nombre_matriz);

        }
    }

}


function medida_pantalla(x) {


    if (window.matchMedia("screen and (max-width: 414px)").matches) {

        switch (x) {

            case imagen_c:

                document.querySelector('.img_caja').style.margin = '20% 0 0 18%';

                break;

            case imagen_v:

                document.querySelector('.img_caja').style.margin = '25% 0 0 23%';

                break;

            case imagen_h:

                document.querySelector('.img_caja').style.margin = '20% 0 0 15%';

                break;

        }

    } else if (window.matchMedia("screen and (min-width: 414px) and (max-width: 736px)").matches) {

        switch (x) {

            case imagen_c:

                document.querySelector('.img_caja').style.margin = '5% 0 0 34%';
                document.querySelector('.img_caja').style.height = '280px';
                break;

            case imagen_v:

                document.querySelector('.img_caja').style.margin = '5% 0 0 36%';
                document.querySelector('.img_caja').style.height = '280px';
                break;

            case imagen_h:

                document.querySelector('.img_caja').style.margin = '5% 0 0 22%';
                document.querySelector('.img_caja').style.height = '280px';
                break;

        }

    } else if (window.matchMedia("screen and (min-width: 737px) and (max-width: 768px)").matches) {

        switch (x) {

            case imagen_c:

                document.querySelector('.img_caja').style.margin = '13% 0 0 30%';
                break;

            case imagen_v:

                document.querySelector('.img_caja').style.margin = '13% 0 0 30%';
                break;

            case imagen_h:

                document.querySelector('.img_caja').style.margin = '13% 0 0 30%';
                break;

        }


    } else if (window.matchMedia("screen and (min-width: 769px) and (max-width: 1204px)").matches) {

       

        switch (x) {

            case imagen_c:

                document.querySelector('.img_caja').style.margin = '0% 0 0 32%';
                break;

            case imagen_v:

                document.querySelector('.img_caja').style.margin = '0% 0 0 32%';
                break;

            case imagen_h:

                document.querySelector('.img_caja').style.margin = '0% 0 0 32%';
                break;

        }

    } else if (window.matchMedia("screen and (min-width: 1025px)").matches) {

        switch (x) {

            case imagen_c:

                document.querySelector('.img_caja').style.margin = '7% 0 0 36%';
                break;

            case imagen_v:

                document.querySelector('.img_caja').style.margin = '7% 0 0 29%';
                break;

            case imagen_h:

                document.querySelector('.img_caja').style.margin = '7% 0 0 39%';
                break;

        }
    }




}




function QuienesSomos(x) {

    if (x == 0) {
        QS.style.display = 'none';
    }
    else if (x == 1) {
        QS.style.display = 'block';
        esloganAscao(0);
    }

}
function QueOfrecemos(x) {
    if (x == 0) {
        QO.style.display = 'none';
    }
    else if (x == 1) {
        QO.style.display = 'block';
        esloganAscao(0);
    }
}
function Contacto(x) {

    if (x == 0) {
        Cnt.style.display = 'none';
        form.style.display = 'none';
        mapa.style.display = 'none';
    } else if (x == 1) {
        Cnt.style.display = 'block';
        form.style.display = 'block';
        mapa.style.display = 'block';
        esloganAscao(0);
    }

}
function galeria(x) {
    if (x == 0) {
        G.style.display = 'none';
    }
    else if (x == 1) {
        G.style.display = 'block';
        fotos_casas.innerHTML = "";
        carga_img(imagen_c);
        carga_img(imagen_h);
        carga_img(imagen_v);
        esloganAscao(0);
    }
}
function reseteoOpciones() {

    QuienesSomos(0);
    QueOfrecemos(0);
    Contacto(0);
    galeria(0);
    esloganAscao(1);
    document.querySelector('.zoom').style.display = 'none';
    document.querySelector('.foto').src = '';
    document.querySelector('.cruz').style.display = 'block';

}
function esloganAscao(x) {

    if (x == 0) {
        eslogan.style.zIndex = '-2';
    } else if (x == 1) {
        eslogan.style.zIndex = '2';
    }
}

cruz();

function cruz() {

    document.querySelector('.cruz').addEventListener('click', cerrar);

}
function cruz_popUp() {

    document.querySelector('.zoom').style.display = 'none';
    document.querySelector('.cruz').style.display = 'block';
}

function cerrar() {

    reseteoOpciones();
    cargaOpcion(0);
}

//-----QUITAR COOKIES----

document.querySelector('#btn1').addEventListener('click', quitar);
function quitar() {
    document.querySelector('#cookies').style.display = 'none';
}






