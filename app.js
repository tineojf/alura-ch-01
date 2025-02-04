// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

const inputAmigo = document.querySelector('#amigo');
const liAmigos = document.querySelector('#listaAmigos');

let amigos = [];

// agregarAmigo();
function agregarAmigo() {
  let value = inputAmigo.value;

  if (value.trim() == "") {
    alert("Por favor, inserte un nombre");
    return;
  }

  amigos.push(value)
  console.log(amigos);
  inputAmigo.value = "";
}


// sortearAmigo();