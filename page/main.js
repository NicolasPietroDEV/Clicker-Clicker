var dindin = 0;

var dindinperclick = 1;
var upgradeclick = 10;

var farmaciaprice = 0;
var farmaciagain = 0;
var acougueprice = 0;
var acouguegain = 0;
var superprice = 0;
var supergain = 0;
var shopprice = 0;
var shopgain = 0;

var cps;

function teste() {
  document.getElementById("farmacias").style.display = "none";
}

function dinheiro() {
  dindin = dindin + dindinperclick;
  document.getElementById("dinheiro").textContent = dindin;
}
// Aumentar clique ao comprar upgrade
function moredinheiro(porcganho, porcpreco) {
  if (dindin < upgradeclick) {
    alert("você não tem grana, pobre, vai trabalhar");
  } else {
    if (dindinperclick == 1) {
      dindin = dindin - 10;
      dindinperclick = 100000000;
      upgradeclick = 15;
    } else {
      dindin = dindin - upgradeclick;
      dindinperclick = Math.round(dindinperclick * porcganho);
      upgradeclick = Math.round(upgradeclick * porcpreco);
    }
  }
  document.getElementById("dinheiro").textContent = dindin;
  document.getElementById("potencia").textContent = upgradeclick;
  document.getElementById("dpc").textContent = dindinperclick;
}

function farma() {
  if (dindin >= farmaciaprice) {
    if (farmaciaprice == 0) {
      0;
      farmaciaprice = 7500;
      farmaciagain = 10;
    } else {
      dindin = dindin - farmaciaprice;
      farmaciaprice = farmaciaprice * 2;
      farmaciagain = farmaciagain * 1.25;
      console.log(farmaciaprice, dindin);
    }
    document.getElementById("farmacia").textContent = farmaciaprice;
    document.getElementById("farmaciadps").textContent = farmaciagain;
    document.getElementById("dinheiro").textContent = dindin;
  }
}

function acougue() {
  if (dindin >= acougueprice) {
    if (acougueprice == 0) {
      acougueprice = 15000;
      acouguegain = 50;
    } else {
      dindin = dindin - acougueprice;
      acougueprice = acougueprice * 2;
      acouguegain = acouguegain * 1.25;
    }
    document.getElementById("acougue").textContent = acougueprice;
    document.getElementById("acouguedps").textContent = acouguegain;
    document.getElementById("dinheiro").textContent = dindin;
  }
}

function superm() {
  if (dindin >= superprice) {
    if (superprice == 0) {
      superprice = 30000;
      supergain = 100;
    } else {
      dindin = dindin - superprice;
      superprice = superprice * 2;
      supergain = supergain * 1.25;
    }
    document.getElementById("super").textContent = superprice;
    document.getElementById("superdps").textContent = supergain;
    document.getElementById("dinheiro").textContent = dindin;
  }
}

function shop() {
  if (dindin >= shopprice) {
    if (shopprice == 0) {
      shopprice = 60000;
      shopgain = 300;
    } else {
      dindin = dindin - shopprice;
      shopprice = shopprice * 2;
      shopgain = shopgain * 1.25;
    }
    document.getElementById("shop").textContent = shopprice;
    document.getElementById("shopdps").textContent = shopgain;
    document.getElementById("dinheiro").textContent = dindin;
  }
}

function cps() {
  cps = farmaciagain + acouguegain + supergain + shopgain;
  dindin = dindin + cps;
  document.getElementById("dinheiro").textContent = dindin;
  console.log("hello");
}

setInterval(cps, 1000);
