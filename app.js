// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

const inputAmigo = document.querySelector('#amigo');
const ulAmigos = document.querySelector('#listaAmigos');
const btnSortear = document.querySelector('.button-draw');
const ulResultado = document.querySelector('#resultado');

let amigos = [];

// agregarAmigo();
function agregarAmigo() {
  let value = inputAmigo.value;

  if (value.trim() == "") {
    alert("Por favor, inserte un nombre");
    return;
  }

  amigos.push(value)
  inputAmigo.value = "";
  actualizarListaHTML(ulAmigos, amigos);
}

// actualizarListaHTML()
function actualizarListaHTML(listaHTML, listaJS) {
  listaHTML.innerHTML = "";

  for (let i = 0; i < listaJS.length; i++) {
    const li = document.createElement('li')
    li.innerText = listaJS[i];
    listaHTML.appendChild(li)
  }
}

// sortearAmigo();
function sortearAmigo() {
  const cantidadAmigos = amigos.length;
  if (cantidadAmigos == 0) {
    alert('Primero añade algún amigo para realizar el sorteo');
    return
  }

  ulResultado.innerHTML = "";

  const indice = numeroRandom(1, cantidadAmigos);
  console.log(indice);

  const li = document.createElement('li')
  li.innerText = `El amigo secreto sorteado es: ${amigos[indice - 1]}`;

  ulResultado.appendChild(li);
}

function numeroRandom(inicio, fin) {
  return Math.floor(Math.random() * (fin - inicio + 1) + inicio)
}