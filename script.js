var result = document.getElementById("result"); // simbolo ?
var red = document.getElementById("red"); //carro vermelho
var white = document.getElementById("white"); //carro branco
var branco = document.getElementById("branco"); // botao branco
var vermelho = document.getElementById("vermelho"); //botao vermelho
var resetar = document.getElementById("resetar"); //resetar
var acelerar = document.getElementById("acelerar"); //acelerar
var desacelerar = document.getElementById("desacelerar"); //desacelerar

branco.addEventListener("click", function ativarInteratividade() {
  if (
    (document.body.style.backgroundColor === "#000",
    document.body.style.white === "#000")
  ) {
    document.body.style.backgroundColor = "#fff";
    document.body.style.color = "#000";
  } else {
    document.body.style.backgroundColor = "#fff";
    document.body.style.color = "#000";
    result.style.color = "#fff";
    resetar.style.display = "block";
    acelerar.style.display = "block";
    desacelerar.style.display = "block";
  }
});

vermelho.addEventListener("click", function ativarInteratividade() {
  if (document.body.style.backgroundColor === "#fff") {
    document.body.style.backgroundColor = "DarkRed";
    document.body.style.color = "#000";
  } else {
    document.body.style.backgroundColor = "DarkRed";
    document.body.style.color = "#000";
    result.style.color = "DarkRed";
    resetar.style.display = "block";
    acelerar.style.display = "block";
    desacelerar.style.display = "block";
  }
});

white.addEventListener("click", function ativarInteratividade() {
  if (
    (document.body.style.backgroundColor === "#000",
    document.body.style.white === "#000")
  ) {
    document.body.style.backgroundColor = "#fff";
    document.body.style.color = "#000";
  } else {
    document.body.style.backgroundColor = "#fff";
    document.body.style.color = "#000";

    result.style.color = "#fff";
    resetar.style.display = "block";
    acelerar.style.display = "block";
    desacelerar.style.display = "block";
  }
});

red.addEventListener("click", function ativarInteratividade() {
  if (document.body.style.backgroundColor === "#fff") {
    document.body.style.backgroundColor = "DarkRed";
    document.body.style.color = "#000";
  } else {
    document.body.style.backgroundColor = "DarkRed";
    document.body.style.color = "#000";
    result.style.color = "DarkRed";
    resetar.style.display = "block";
    acelerar.style.display = "block";
    desacelerar.style.display = "block";
  }
});

resetar.addEventListener("click", function desativarInteratividade() {
  if (ativarInteratividade === "true") {
    document.getElementById("onclick").remove();
  } else {
    addEventListener();
  }
});

function moverParaCima() {
  let posicaoAtual = parseInt(window.getComputedStyle(red).top) || 0;
  
  let novaPosicao = posicaoAtual - 10; 
  
  red.style.top = novaPosicao + "px";
}

acelerar.addEventListener("click", moverParaCima);

document.addEventListener("keydown", function(evento) {
  if (evento.key === "ArrowUp") {
    moverParaCima();
  }
});