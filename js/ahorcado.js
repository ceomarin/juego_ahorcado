const letra1 = document.getElementById("letra1");
const letra2 = document.getElementById("letra2");
const letra3 = document.getElementById("letra3");
const letra4 = document.getElementById("letra4");
const letra5 = document.getElementById("letra5");
const letra6 = document.getElementById("letra6");
const letra7 = document.getElementById("letra7");
const casillaLetra = document.getElementById("letra");
const casillaIntento = document.getElementById("intento");
// const = document.getElementById();
// const = document.getElementById();
// const = document.getElementById();
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


// eventos
//btnJugar.addEventListener("click",ingresarLetra);


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

function mostrarLetra(){
    for (i=0; i<palabraElegida.length;i++){
        if(letra == palabraElegida[i]){
            //reemplazar espacio por la letra acertada
            letraEnPantalla(i);
        }
    }
    casillaIntento.innerHTML+='<li class="list-group-item">'+letra+'</li>';
}

function estaUsada(){
    for(let i = 0; i < letrasUsadas.length; i++){
        if (letra === letrasUsadas[i]){
            return true;
        }
    }
    return false;
}

// al ingresar letra:
function ingresarLetra(){
    letra = casillaLetra.value.toLowerCase(); /****************/
    if(estaUsada()){
        alert("Ya ha ingresado ésta letra, porfavor intentelo nuevamente.");
    }else{
        letrasUsadas.push(letra);
        mostrarLetra();
    }
    console.log(letrasUsadas);
}

//al cargar la página
function elegirPalabra(){
    // console.table(listaPalabras);
    palabraElegida = listaPalabras[parseInt(Math.random()*listaPalabras.length-2)+1];        
    console.log(palabraElegida);
}

// console.log(listaPalabras.length);
elegirPalabra();