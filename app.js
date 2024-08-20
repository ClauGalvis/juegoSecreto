let numeroSecreto = 0;
let numeroIntentos = 1;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificarIntento() {
    let numeroDelUsuario = parseInt(document.getElementById("valorUsuario").value);
    if (numeroDelUsuario == numeroSecreto) {
        asignarTextoElemento("p",`Acertaste el numero en ${numeroIntentos} ${(numeroIntentos == 1) ? "intento" : "intentos"}`);
        document.querySelector('#reiniciar').removeAttribute('disabled')
    } else {       
        //El usuario no acertó
        if(numeroDelUsuario > numeroSecreto){
            asignarTextoElemento("p","El numero secreto es menor");
        } else {
            asignarTextoElemento("p","El numero secreto es mayor");
        }
        numeroIntentos ++;
        limpiarCaja()
    } 
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = "";
}

//Funcion Recursiva
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo) +1;
    //Si ya se sortearon todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', "Ya se sortearon todos los numeros")
        document.querySelector('#reiniciar').setAttribute('disabled','true');
    } else{
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else{
            listaNumerosSorteados.push(numeroGenerado)
            return numeroGenerado;
        }
    }
}
    // Si el numero generado esta incluido en la lista



function condicionesIniciales(){
    asignarTextoElemento("h1","Juego de el numero secreto");
    asignarTextoElemento("p",`Indica un numero del 1 al ${numeroMaximo}`); 
    numeroSecreto = generarNumeroSecreto();
    numeroIntentos = 1;
}

function reiniciarJuego () {
    //Limpiar la caja
    limpiarCaja();

    //Volver a las condiciones iniciales
    condicionesIniciales();

    //Deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');

}

condicionesIniciales();
