var letra1= document.getElementById("letra1");
var letra2= document.getElementById("letra2");
var letra3= document.getElementById("letra3");
var letra4= document.getElementById("letra4");
var letra5= document.getElementById("letra5");
var letra6= document.getElementById("letra6");
var letra7= document.getElementById("letra7");
var casillaLetra = document.getElementById("letra");
// var = document.getElementById();
// var = document.getElementById();
// var = document.getElementById();
// var = document.getElementById();
// var = document.getElementById();
// var = document.getElementById();
// var = document.getElementById();

var listaPalabras= ["conocer","proceso","hermosa","mejorar","aspecto","momento","mostrar","valores","durante",
"cumplir","ofrecer","recibir","impacto","calidad","motivar","sistema","atender","aplicar","estudio","control",
"gracias","extraño","caminar","influir","golpear","intenso","sublime","guardar","resumen","mensaje","otorgar",
"generar","empezar","montaña","inferir","cliente","obligar","señalar","afirmar","asistir","detalle","existir",
"plasmar","muestra","delgado","definir","exponer","obtener"];

var letraIngresada ="";

const letras = [];

var palabraElegida = "";

function letraEnPantalla(index){
    var letraCorrecta;
    //sleccionar e ID correspondiente
    switch(index){
        case 0:
            letraCorrecta = letra1;
            break;
        case 1:
            letraCorrecta = letra2;
            break;
        case 2:
            letraCorrecta = letra3;
            break;
        case 3:
            letraCorrecta = letra4;
            break;
        case 4:
            letraCorrecta = letra5;
            break;
        case 5:
            letraCorrecta = letra6;
            break;
        case 6:
            letraCorrecta = letra7;
            break;
        default:
            //Crushear la página
    }
    //reemplazar texto de la casilla ID="AdHoc"
    letraCorrecta.innerText=letraIngresada.toUpperCase();
}

function mostrarLetra(){
    for (i=0; i<palabraElegida.length;i++){
        if(letraIngresada == palabraElegida[i]){
            //reemplazar espacio por la letra acertada
            letraEnPantalla();
        }
    }
}

// al ingresar letra:
function ingresarLetra(letra){
    letra = casillaLetra.value.toLowerCase(); /****************/
    if (letra in letras){
        alert("Ya ha ingresado ésta letra, porfavor intentelo nuevamente.")
    }
    else{
        letras.push(letra)
        mostrarLetra(letra)
    }
}

//al cargar la página
function elegirPalabra(){
    //console.table(listaPalabras);
    palabraElegida = listaPalabras[parseInt(Math.random()*listaPalabras.length-2)+1];        
    console.log(palabraElegida);
}

//console.log(listaPalabras.length);
elegirPalabra();