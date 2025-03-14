// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigo = [];

//creacion de la funcion para poder agregar el nombre de los amigos que sortearemos

function agregarAmigo() {
let input = document.getElementById("amigo");
let nombre = input.value.trim();

if (nombre==="") {
    alert("Por favor, ingrese nombres");
    return;
}

amigo.push(nombre);
input.value = "";
actualizarLista(); 

}

//creacion de la funcion para limpiar la lista de amigos

function actualizarLista() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; 

    amigo.forEach((nombre => {
        let item = document.createElement("li");
        item.textContent = nombre; 
        listaAmigos.appendChild(item);
    }));
}

//Crearemos la funcion para poder sortear los nombres de nuestros amigos

function sortearAmigo() {
    if (amigo.length === 0 ) {
        alert("Agrega amigos antes de sortear");
        return; 
    }
    let amigoSorteado = amigo[Math.floor(Math.random() * amigo.length)];
    let resultado = document.getElementById("resultado"); 
    resultado.innerHTML = `El amigo sorteado es: ${amigoSorteado}`

    let limpiarLista = document.getElementById("listaAmigos");
    limpiarLista.innerHTML = "";
}





    
    





