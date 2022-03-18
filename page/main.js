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

var farmablock = true;
var acougueblock = true;
var superblock = true;
var shopblock = true;

var cps;

document.getElementById("farmacias").style.display = "none";
document.getElementById("acougues").style.display = "none";
document.getElementById("supermercados").style.display = "none";
document.getElementById("shoppings").style.display = "none";
document.getElementById("dpsall").style.display = "none";

function hack(dinheiro) {
  dindin = dindin + dinheiro;
}

function dinheiro() {
  dindin = dindin + dindinperclick;
  document.getElementById("dinheiro").textContent = dindin;
  verify();
}
// Aumentar clique ao comprar upgrade
function moredinheiro(porcganho, porcpreco) {
  if (dindin < upgradeclick) {
    alert("você não tem grana, pobre, vai trabalhar");
  } else {
    if (dindinperclick == 1) {
      dindin = dindin - 10;
      dindinperclick = 5;
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

function verify() {
  if (dindin >= 7500 && farmablock == true) {
    document.getElementById("farmacias").style.display = "block";
    farmablock = false;
    document.getElementById("dpsall").style.display = "block";
  }
  if (dindin >= 20000 && acougueblock == true) {
    document.getElementById("acougues").style.display = "block";
    acougueblock = false;
  }
  if (dindin >= 70000 && superblock == true) {
    document.getElementById("supermercados").style.display = "block";
    superblock = false;
  }
  if (dindin >= 200000 && shopblock == true) {
    document.getElementById("shoppings").style.display = "block";
    shopblock = false;
  }
}

function farma() {
  if (dindin >= farmaciaprice) {
    if (farmaciaprice == 0) {
      0;
      farmaciaprice = 7500;
      farmaciagain = 50;
    } else {
      dindin = dindin - farmaciaprice;
      farmaciaprice = farmaciaprice * 2;
      farmaciagain = farmaciagain * 1.2;
    }
    document.getElementById("farmacia").textContent = farmaciaprice;
    document.getElementById("farmaciadps").textContent = farmaciagain;
    document.getElementById("dinheiro").textContent = dindin;
  } else {
    alert("você não tem grana, pobre, vai trabalhar");
  }
}

function acougue() {
  if (dindin >= acougueprice) {
    if (acougueprice == 0) {
      acougueprice = 20000;
      acouguegain = 100;
    } else {
      dindin = dindin - acougueprice;
      acougueprice = acougueprice * 2;
      acouguegain = acouguegain * 1.3;
    }
    document.getElementById("acougue").textContent = acougueprice;
    document.getElementById("acouguedps").textContent = acouguegain;
    document.getElementById("dinheiro").textContent = dindin;
  } else {
    alert("você não tem grana, pobre, vai trabalhar");
  }
}

function superm() {
  if (dindin >= superprice) {
    if (superprice == 0) {
      superprice = 70000;
      supergain = 250;
    } else {
      dindin = dindin - superprice;
      superprice = superprice * 2;
      supergain = supergain * 1.5;
    }
    document.getElementById("super").textContent = superprice;
    document.getElementById("superdps").textContent = supergain;
    document.getElementById("dinheiro").textContent = dindin;
  } else {
    alert("você não tem grana, pobre, vai trabalhar");
  }
}

function shop() {
  if (dindin >= shopprice) {
    if (shopprice == 0) {
      shopprice = 200000;
      shopgain = 500;
    } else {
      dindin = dindin - shopprice;
      shopprice = shopprice * 2;
      shopgain = shopgain * 1.6;
    }
    document.getElementById("shop").textContent = shopprice;
    document.getElementById("shopdps").textContent = shopgain;
    document.getElementById("dinheiro").textContent = dindin;
  } else {
    alert("você não tem grana, pobre, vai trabalhar");
  }
}

function cps() {
  cps = farmaciagain + acouguegain + supergain + shopgain;
  dindin = dindin + cps;
  document.getElementById("dinheiro").textContent = dindin;
  document.getElementById("dps").textContent = cps;
}

setInterval(cps, 1000);
