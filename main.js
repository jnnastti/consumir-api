window.addEventListener('resize', calculaMargin);

function calculaMargin() {
  var main = document.getElementsByTagName('main')[0];

  main.style.marginLeft = (window.innerWidth - 1260) / 2
}

calculaMargin();

//////////////////////

const url = 'https://rickandmortyapi.com/api/character/';

function listarPersonagem() {
  let req = fetch(url)
  let dado = req.then((response) => {
    return response.json()
  })
     
  dado.then((dado) => {
    dado.results.forEach(element => {

    // criar lista de personagens
      criarPersonagem(element)
    });
  })
}

function criarPersonagem(personagem) {
  let lista = document.getElementById('lista');

  // container sobre o personagem
  let contPersonagem = document.createElement('div');

  let imagem = document.createElement('img');
  imagem.src = personagem.image;
  imagem.alt = personagem.name;

  contPersonagem.appendChild(imagem);
  contPersonagem.classList.add("item");

  let divInfo = document.createElement('div');

  createAndAppend('h2', `${personagem.id} - ${personagem.name}`, divInfo)
  createAndAppend('h3', 'Status', divInfo)
  createAndAppend('p', `${personagem.status}`, divInfo)
  createAndAppend('h3', 'Especie', divInfo)
  createAndAppend('p', `${personagem.species}`, divInfo)

  contPersonagem.appendChild(divInfo);

  lista.appendChild(contPersonagem)
}

// criar elemento filho e adicionar ao elemento pai
function createAndAppend(tag, conteudo, pai) {
  let elemento = document.createElement(tag);

  elemento.textContent = conteudo
  pai.appendChild(elemento)

  return elemento
}

listarPersonagem()