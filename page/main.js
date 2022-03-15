var dindin = 0;
var dindinperclick = 1;
var upgradeclick = 10;

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
function moredinheiro() {
  if (dindin < upgradeclick) {
    alert("você não possui dinheiro");
  } else {
    if (dindinperclick == 1) {
      dindin = dindin - 10;
      dindinperclick = 5;
      upgradeclick = 15;
    } else {
      dindin = dindin - upgradeclick;
      dindinperclick = Math.round(dindinperclick * 1.25);
      upgradeclick = Math.round(upgradeclick * 2);
    }
  }
  document.getElementById("dinheiro").textContent = dindin;
  document.getElementById("potencia").textContent = upgradeclick;
}
