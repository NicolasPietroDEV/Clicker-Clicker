var dindin = 0;

var dindinperclick = 1;
var upgradeclick = 10;

var farmaciaprice = 7500;
var acougueprice = 15000;
var superprice = 30000;
var shopprice = 60000;

var farmaciagain = 10;
var acouguegain = 50;
var supergain = 100;
var shopgain = 300;

// if (dindin < upgradeclick) {
//   document.getElementById("potencia").disabled = true;
// } else {
//   document.getElementById("potencia").disabled = false;
// }

// Aumentar dinheiro a cada clique
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
