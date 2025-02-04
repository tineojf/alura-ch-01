// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

const inputAmigo = document.querySelector('#amigo');
const ulAmigos = document.querySelector('#listaAmigos');

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