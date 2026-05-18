var result = document.getElementById("result"); // simbolo ?
var red = document.getElementById("red"); //carro vermelho
var white = document.getElementById("white"); //carro branco
var branco = document.getElementById("branco"); // botao branco
var vermelho = document.getElementById("vermelho"); //botao vermelho
var resetar = document.getElementById("resetar"); //resetar
var acelerar = document.getElementById("acelerar"); //acelerar
var desacelerar = document.getElementById("desacelerar"); //desacelerar

//botao branco cliclado = fundo branco, ? some, botões aparecem, texto fica preto
branco.addEventListener("click", function ativarInteratividade() {
  if (document.body.style.backgroundColor === "#000") {
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

//botao vermelho cliclado = fundo vermelho, ? some, botões aparecem, texto fica preto
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

//carro branco cliclado = fundo branco, ? some, botões aparecem, texto fica preto
white.addEventListener("click", function ativarInteratividade() {
  if (document.body.style.backgroundColor === "#000") {
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

//carro vermelho cliclado = fundo vermelho, ? some, botões aparecem, texto fica preto
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

//recarrega a pagina sumindo todas as alterações
resetar.addEventListener("click", function Resetar() {
  location.reload();
});

//tecla acelerar clicada = carro vermelho vai pra cima
function AcelerarCarroVermelho() {
  let vermelhoParado = parseInt(window.getComputedStyle(red).top) || 0;
  let vermelhoAcelerado = vermelhoParado - 10;

  let alturaVermelha =
    parseInt(window.getComputedStyle(red).height) || 50;

  red.style.top = vermelhoAcelerado + "px";
  red.style.height = alturaVermelha - 2 + "px";
}

//botão da setinha pra cima apertado = carro vermelho vai pra cima
acelerar.addEventListener("click", function () {
  if (
    getComputedStyle(document.body).backgroundColor ===
    "rgb(139, 0, 0)"
  ) {
    AcelerarCarroVermelho();
  }
});

// carro vermelho só funciona com fundo vermelho
document.addEventListener("keydown", function (evento) {
  if (
    evento.key === "ArrowUp" &&
    getComputedStyle(document.body).backgroundColor ===
      "rgb(139, 0, 0)"
  ) {
    AcelerarCarroVermelho();
  }
});

//tecla desacelerar clicada = carro vermelho vai pra baixo
function DesacelerarCarroVermelho() {
  let vermelhoParado = parseInt(window.getComputedStyle(red).top) || 0;
  let vermelhoAcelerado = vermelhoParado + 10;

  let alturaVermelha =
    parseInt(window.getComputedStyle(red).height) || 50;

  red.style.top = vermelhoAcelerado + "px";
  red.style.height = alturaVermelha + 2 + "px";
}

//botão da setinha pra baixo apertado = carro vermelho vai pra baixo
desacelerar.addEventListener("click", function () {
  if (
    getComputedStyle(document.body).backgroundColor ===
    "rgb(139, 0, 0)"
  ) {
    DesacelerarCarroVermelho();
  }
});

// carro vermelho só funciona com fundo vermelho
document.addEventListener("keydown", function (evento) {
  if (
    evento.key === "ArrowDown" &&
    getComputedStyle(document.body).backgroundColor ===
      "rgb(139, 0, 0)"
  ) {
    DesacelerarCarroVermelho();
  }
});

//tecla acelerar clicada = carro branco vai pra cima
function AcelerarCarroBranco() {
  let brancoParado = parseInt(window.getComputedStyle(white).top) || 0;
  let brancoAcelerado = brancoParado - 10;

  let alturaBranca =
    parseInt(window.getComputedStyle(white).height) || 50;

  white.style.top = brancoAcelerado + "px";
  white.style.height = alturaBranca - 2 + "px";
}

//botão da setinha pra cima apertado = carro branco vai pra cima
acelerar.addEventListener("click", function () {
  if (
    getComputedStyle(document.body).backgroundColor ===
    "rgb(255, 255, 255)"
  ) {
    AcelerarCarroBranco();
  }
});

// carro branco só funciona com fundo branco
document.addEventListener("keydown", function (evento) {
  if (
    evento.key === "ArrowUp" &&
    getComputedStyle(document.body).backgroundColor ===
      "rgb(255, 255, 255)"
  ) {
    AcelerarCarroBranco();
  }
});

//tecla desacelerar clicada = carro branco vai pra baixo
function DesacelerarCarroBranco() {
  let brancoParado = parseInt(window.getComputedStyle(white).top) || 0;
  let brancoAcelerado = brancoParado + 10;

  let alturaBranca =
    parseInt(window.getComputedStyle(white).height) || 50;

  white.style.top = brancoAcelerado + "px";
  white.style.height = alturaBranca + 2 + "px";
}

//botão da setinha pra baixo apertado = carro branco vai pra baixo
desacelerar.addEventListener("click", function () {
  if (
    getComputedStyle(document.body).backgroundColor ===
    "rgb(255, 255, 255)"
  ) {
    DesacelerarCarroBranco();
  }
});

// carro branco só funciona com fundo branco
document.addEventListener("keydown", function (evento) {
  if (
    evento.key === "ArrowDown" &&
    getComputedStyle(document.body).backgroundColor ===
      "rgb(255, 255, 255)"
  ) {
    DesacelerarCarroBranco();
  }
});

