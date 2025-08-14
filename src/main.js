const input = document.getElementById("input-nomes");
const lista = document.getElementById("lista-nomes");
const amigoSecreto = document.getElementeById("amigo-secreto");
const botaoAdd = document.getElementById("add-button");
const botaoErase = document.getElementById("erase-button");
const botaoSort = document.getElementById("sort-button");

let nomes = [];

botaoAdd.addEventListener("click", adicionarNome);

botaoErase.addEventListener("click", limparLista);

botaoSort.addEventListener("click",sortearNome);

window.addEventListener("load", () => {
  const nomesSalvos = localStorage.getItem("nomes");
  if (nomesSalvos) {
    nomes = JSON.parse(nomesSalvos);
    atualizarLista();
  }
});

function adicionarNome() {
  const nome = input.value.trim();

  if (nome !== "") {
    nomes.push(nome);
    salvarNomes();
    atualizarLista();
    input.value = ""; // Limpa o campo
  }
}

function limparLista() {
  nomes = [];
  localStorage.removeItem("nomes");
  atualizarLista();
}

function sortearNome(){
  const nomeSort = nomes.sort;
  amigoSecreto.textContent = nomeSort;
}

function atualizarLista() {
  lista.innerHTML = "";

  nomes.forEach(function(nome) {
    const item = document.createElement("li");
    item.textContent = nome;
    lista.appendChild(item);
  });
}

function salvarNomes() {
  localStorage.setItem("nomes", JSON.stringify(nomes));
}