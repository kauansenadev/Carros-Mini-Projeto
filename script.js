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
  let parado = parseInt(window.getComputedStyle(red).top) || 0;
  let acelerado = parado - 10;
  red.style.top = acelerado + "px";
  red.style.height = acelerado + "px";
}

//botão da setinha pra cima apertado = carro vermelho vai pra cima
acelerar.addEventListener("click", AcelerarCarroVermelho);
document.addEventListener("keydown", function (evento) {
  if (evento.key === "ArrowUp") {
    AcelerarCarroVermelho();
  }
});

//tecla desacelerar clicada = carro vermelho vai pra baixo
function DesacelerarCarroVermelho() {
  let parado = parseInt(window.getComputedStyle(acelerar).top) || 0;
  let acelerado = parado + 10;
  red.style.top = acelerado + "px";
  red.style.height = acelerado + "px";
}

//botão da setinha pra baixo apertado = carro vermelho vai pra baixo
desacelerar.addEventListener("click", DesacelerarCarroVermelho);
document.addEventListener("keydown", function (evento) {
  if (evento.key === "ArrowDown") {
    DesacelerarCarroVermelho();
  }
});

//tecla acelerar clicada = carro branco vai pra cima
function AcelerarCarroVermelho() {
  let parado = parseInt(window.getComputedStyle(white).top) || 0;
  let acelerado = parado - 10;
  white.style.top = acelerado + "px";
  white.style.height = acelerado + "px";
}

//botão da setinha pra cima apertado = carro branco vai pra cima
acelerar.addEventListener("click", AcelerarCarroVermelho);
document.addEventListener("keydown", function (evento) {
  if (evento.key === "ArrowUp") {
    AcelerarCarroVermelho();
  }
});

//tecla desacelerar clicada = carro branco vai pra baixo
function DesacelerarCarroVermelho() {
  let parado = parseInt(window.getComputedStyle(acelerar).top) || 0;
  let acelerado = parado + 10;
  white.style.top = acelerado + "px";
  white.style.height = acelerado + "px";
}

//botão da setinha pra baixo apertado = carro branco vai pra baixo
desacelerar.addEventListener("click", DesacelerarCarroVermelho);
document.addEventListener("keydown", function (evento) {
  if (evento.key === "ArrowDown") {
    DesacelerarCarroVermelho();
  }
});