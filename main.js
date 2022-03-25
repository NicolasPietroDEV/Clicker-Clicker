var dindin = 0;

class gerador {
  constructor(price, gain, raise, lvl, button, dpslabel, levellabel, inicial) {
    this.price = price;
    this.gain = gain;
    this.lvl = lvl;
    this.raise = raise;
    this.button = button;
    this.dps = dpslabel;
    this.levellabel = levellabel;
    this.inicial = inicial;
  }
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
    verify();
  }
}

var potenciaz = new gerador(10, 5, 1.25, 1, "potencia", "dpc", "clicklevel", 5);
var farmaciaz = new gerador(
  7500,
  0,
  1.4,
  0,
  "farmacia",
  "farmadps",
  "farmalevel",
  50
);
var acouguez = new gerador(
  20000,
  0,
  1.5,
  0,
  "acougue",
  "acouguedps",
  "acouguelevel",
  100
);
var supermercadoz = new gerador(
  70000,
  0,
  1.7,
  0,
  "super",
  "superdps",
  "supermercadolevel",
  250
);
var shoppingz = new gerador(
  200000,
  0,
  1.9,
  0,
  "shop",
  "shopdps",
  "shoppinglevel",
  500
);

var cps;

document.getElementById("din").ondragstart = false;

for (x in ["farmacia", "acougue", "super", "shop", "potenia"]) {
  x.disable = true;
}

function hack(dinheiro) {
  dindin = dindin + dinheiro;
}

function dinheiro() {
  dindin = dindin + potenciaz.gain;
  document.getElementById("dinheiro").textContent = dindin.toLocaleString(
    "pt-BR",
    { style: "currency", currency: "BRL" }
  );
}

function verify() {
  if (dindin >= potenciaz.price) {
    document.getElementById("potencia").disabled = false;
  } else {
    document.getElementById("potencia").disabled = true;
  }

  if (dindin >= farmaciaz.price) {
    document.getElementById("farmacia").disabled = false;
    document.getElementById("farmaciaimage").style.opacity = 1;
    document.getElementById("dpsall").style.display = "block";
  } else {
    document.getElementById("farmacia").disabled = true;
  }

  if (dindin >= acouguez.price) {
    document.getElementById("acougue").disabled = false;
    document.getElementById("acougueimage").style.opacity = 1;
  } else {
    document.getElementById("acougue").disabled = true;
  }

  if (dindin >= supermercadoz.price) {
    document.getElementById("super").disabled = false;
    document.getElementById("supermercadoimage").style.opacity = 1;
  } else {
    document.getElementById("super").disabled = true;
  }

  if (dindin >= shoppingz.price) {
    document.getElementById("shop").disabled = false;
    document.getElementById("shoppingimage").style.opacity = 1;
  } else {
    document.getElementById("shop").disabled = true;
  }
}

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

setInterval(cps, 1000);
setInterval(verify, 10);
