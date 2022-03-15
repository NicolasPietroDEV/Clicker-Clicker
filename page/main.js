var dindin = 0;
var dindinperclick = 1;
var upgradeclick = 10;

function dinheiro() {
  dindin = dindin + dindinperclick;
  document.getElementById("dinheiro").textContent = dindin;
}
function moredinheiro() {
  if (dindin < 10) {
    // document.getElementById("potencia").disabled = true;
    alert("você não possui dinheiro");
  } else {
    dindin = dindin - 10;
    dindinperclick = Math.round(dindinperclick * 1.25 * 100) / 100;
    upgradeclick = Math.round(upgradeclick * 1.45 * 100) / 100;
    document.getElementById("dinheiro").textContent = dindin;
    document.getElementById("potencia").textContent = upgradeclick;
  }
}
