// Primeiramente, defino a variável mais importante, a grana
var dindin = 0;
// Aqui são algumas frescuras: não poder arrastar o dinheiro e não poder abrir o meno de contexto
document.getElementById("din").ondragstart = false;
document.oncontextmenu = function () {
  return false;
};
// Crio a classe gerador, que dará inicio a cada uma das instancias que geram dinheiro, como a farmácia e seus atributos
class gerador {
  constructor(
    price,
    gain,
    raise,
    lvl,
    button,
    dpslabel,
    levellabel,
    inicial,
    progress,
    image
  ) {
    this.price = price;
    this.gain = gain;
    this.lvl = lvl;
    this.raise = raise;
    this.button = button;
    this.dps = dpslabel;
    this.levellabel = levellabel;
    this.inicial = inicial;
    this.progress = progress;
    this.image = image;
  }
  // Como será necessário "upgradear", eu crio uma função que avança 1 level
  increase() {
    dindin = dindin - this.price;
    if (this.gain == 0) {
      this.gain = this.inicial;
      this.price = this.price * 2;
    } else {
      this.price = this.price * 2;
      this.gain = this.gain * this.raise;
    }
    this.lvl = this.lvl + 1;
    document.getElementById(this.button).textContent =
      this.price.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
    document.getElementById(this.dps).textContent = this.gain.toLocaleString(
      "pt-BR",
      {
        style: "currency",
        currency: "BRL",
      }
    );
    document.getElementById("dinheiro").textContent = dindin.toLocaleString(
      "pt-BR",
      { style: "currency", currency: "BRL" }
    );
    document.getElementById(this.levellabel).textContent = this.lvl;
    document.getElementById(this.progress).style.display = "block";
    // Este será explicado mais para frente
    verify();
  }
}
// Crio então todas as instancias de gerador
var potenciaz = new gerador(
  10,
  5,
  1.5,
  1,
  "potencia",
  "dpc",
  "clicklevel",
  5,
  "po",
  false
);
var farmaciaz = new gerador(
  7500,
  0,
  1.6,
  0,
  "farmacia",
  "farmaciadps",
  "farmalevel",
  50,
  "progressfarma",
  "farmaciaimage"
);
var acouguez = new gerador(
  20000,
  0,
  1.7,
  0,
  "acougue",
  "acouguedps",
  "acouguelevel",
  100,
  "progressacougue",
  "acougueimage"
);
var supermercadoz = new gerador(
  70000,
  0,
  1.8,
  0,
  "super",
  "superdps",
  "supermercadolevel",
  250,
  "progresssuper",
  "supermercadoimage"
);
var shoppingz = new gerador(
  200000,
  0,
  1.9,
  0,
  "shop",
  "shopdps",
  "shoppinglevel",
  500,
  "progressshop",
  "shoppingimage"
);
// Variável que definirá meu ganho por segundo
var cps;
// Hackzinho pra debugar XD
function hack(dinheiro) {
  dindin = dindin + dinheiro;
}
// A função que será atribuida ao glorioso botão de ganhar dinheiro
function dinheiro() {
  dindin = dindin + potenciaz.gain;
  document.getElementById("dinheiro").textContent = dindin.toLocaleString(
    "pt-BR",
    { style: "currency", currency: "BRL" }
  );
}
// Esta função será rodada a cada 10 milisegundos e desligará ou ligará os botões da tela conforme eu ter dinheiro
function verify() {
  for (i of [potenciaz, farmaciaz, acouguez, supermercadoz, shoppingz]) {
    if (dindin >= i.price) {
      document.getElementById(i.button).disabled = false;
      if (i.image != false) {
        document.getElementById(i.image).style.opacity = 1;
      }
      if (document.getElementById("dpsall").style.display == "none") {
        document.getElementById("dpsall").style.display = "block";
      }
    } else {
      console.log(i.price);
      document.getElementById(i.button).disabled = true;
    }
  }
}
// Calcula e adiciona meu ganho por segundo a cada 1 segundo
function cps() {
  cps = farmaciaz.gain + acouguez.gain + supermercadoz.gain + shoppingz.gain;
  dindin = dindin + cps;
  document.getElementById("dinheiro").textContent = dindin.toLocaleString(
    "pt-BR",
    { style: "currency", currency: "BRL" }
  );
  document.getElementById("dps").textContent = cps.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}
// Seta os tempos das duas funções acima
setInterval(cps, 1000);
setInterval(verify, 10);
