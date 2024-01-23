let numeroMaximo = 10;
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = []

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById(`valorUsuario`).value);
    console.log(numeroSecreto);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento("p", `Acertaste el número en ${intentos} ${(intentos == 1 ? "intento" : "intentos")}`)
        document.getElementById(`reiniciar`).removeAttribute(`disabled`)
    } else {
        //EL ususario no acerto
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento("p", "El número secreto es menor");
        } else {
            asignarTextoElemento("p", "El número secreto es mayor");
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector(`#valorUsuario`).value = "";
}

function generarNumeroSecreto() {
    let  numeroSecreto = Math.floor(Math.random()*numeroMaximo)+1;
    
    console.log(numeroSecreto);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento("p", "Ya se sortearon todos los números posibles");
    }else {
        // Si elnúmero generado está incluido en la lista
        if (listaNumerosSorteados.includes(numeroSecreto)) {
        return generarNumeroSecreto();
        } else {
        listaNumerosSorteados.push(numeroSecreto);
        return numeroSecreto;
     }
    }
}

function condicionesIniciales() {
    numeroMaximo = prompt ("Partiendo del 1 ¿Cuantos numeros quieres que haya en tu reto?");
    asignarTextoElemento("h1","Juego del número secreto!");
    asignarTextoElemento("p",`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}   

function reiniciarJuego() {
    //Limpiar la caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números
    //Generar el número aleatorio
    //Inicializar el número de intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector(`#reiniciar`).setAttribute(`disabled`, `true`);
    

}

condicionesIniciales();