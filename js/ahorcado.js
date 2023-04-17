const letra1 = document.getElementById("letra1");
const letra2 = document.getElementById("letra2");
const letra3 = document.getElementById("letra3");
const letra4 = document.getElementById("letra4");
const letra5 = document.getElementById("letra5");
const letra6 = document.getElementById("letra6");
const letra7 = document.getElementById("letra7");
const casillaLetraIngresada = document.getElementById("letra");
const casillaIntento = document.getElementById("intento");
const mensajeAlJugador = document.getElementById("mensajeAlJugador");
const fotoAhorcado = document.getElementById("fotoAhorcado");
const cajaIngreso = document.getElementById("cajaIngreso");
// const = document.getElementById();
// const = document.getElementById();
// const = document.getElementById();

var listaPalabras= ["conocer","proceso","hermosa","mejorar","aspecto","momento","mostrar","valores","durante",
"cumplir","ofrecer","recibir","impacto","calidad","motivar","sistema","atender","aplicar","estudio","control",
"gracias","extraño","caminar","influir","golpear","intenso","sublime","guardar","resumen","mensaje","otorgar",
"generar","empezar","montaña","inferir","cliente","obligar","señalar","afirmar","asistir","detalle","existir",
"plasmar","muestra","delgado","definir","exponer","obtener"];

var letra ="";
const letrasUsadas = [];
var palabraElegida = "";
var cantIntentos = 10;

// eventos
//btnJugar.addEventListener("click",ingresarLetra);

function mensaje(mensajeTexto){
    mensajeAlJugador.innerHTML = mensajeTexto;
}

function cambiarImagen(imgURL){
    //var imgURL = "./img/quedan"+cantIntentos+".png";
    fotoAhorcado.src = imgURL;
}

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
    letraCorrecta.innerText=letra.toUpperCase();
}

function haGanado(){
    for ( i=0; i<palabraElegida.length; i++ ){
        if(! letrasUsadas.includes(palabraElegida[i])){
            return false;
        }
    }
    return true;
}

function actualizarPantalla(){
    for (i=0; i<palabraElegida.length;i++){
        if(letra == palabraElegida[i]){
            //reemplazar '_' por la letra acertada
            letraEnPantalla(i);
        }
    }
    //Muestra letras usadas
    casillaIntento.innerHTML='<li class="list-group-item">'+letrasUsadas+'</li>';
    cantIntentos--;
    casillaLetraIngresada.value = "";
    if (haGanado()){
        cambiarImagen("./img/ganador.png");
        mensaje("Ha salvado su cuello esta vez");
        cajaIngreso.style="display:none";
    }else{
        cambiarImagen("./img/quedan"+cantIntentos+".png");
        if (cantIntentos > 0){
            mensaje('<p class="m-0 p-0 text-center">Quedan '+cantIntentos+' intentos :)</p>');
        }else{
            mensaje("lasciate ogni speranza voi ch'entrate");
            cajaIngreso.style="display:none";
        }
    }
}

function estaUsada(){
    if (letra.length == 1){
        if (letrasUsadas.includes(letra)){
            return true;
        }else{
            return false;
        }
    }
    return true;
}

// al ingresar letra:
function ingresarLetra(){
    letra = casillaLetraIngresada.value.toLowerCase(); /****************/
    if(estaUsada()){
        alert("Ingrese un carácter válido no repetido");
    }else{
        letrasUsadas.push(letra);
        actualizarPantalla();
    }
}

//al cargar la página
function elegirPalabra(){
    // console.table(listaPalabras);
    palabraElegida = listaPalabras[parseInt(Math.random()*listaPalabras.length-2)+1];        
    console.log(palabraElegida);
}

elegirPalabra();
mensaje('<p class="m-0 p-0 text-center">Quedan '+cantIntentos+' intentos :)</p>');
cambiarImagen("./img/quedan"+cantIntentos+".png");