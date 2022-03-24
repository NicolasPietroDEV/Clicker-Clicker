var dindin = 0;

var dindinperclick = 1;
var upgradeclick = 10;

var farmaciaprice = 7500;
var farmaciagain = 0;

var acougueprice = 20000;
var acouguegain = 0;

var superprice = 70000;
var supergain = 0;

var shopprice = 200000;
var shopgain = 0;

var farmablock = true;
var acougueblock = true;
var superblock = true;
var shopblock = true;

var clicklvl = 1;
var farmalvl = 0;
var acouguelvl = 0;
var superlvl = 0;
var shoplvl = 0;

var cps;

document.getElementById("din").ondragstart = false;

document.getElementById("farmacia").disabled = true;

document.getElementById("acougue").disabled = true;

document.getElementById("super").disabled = true;

document.getElementById("shop").disabled = true;

document.getElementById("potencia").disabled = true;

function hack(dinheiro) {
  dindin = dindin + dinheiro;
  verify();
}

function dinheiro() {
  dindin = dindin + dindinperclick;
  document.getElementById("dinheiro").textContent = dindin.toLocaleString(
    "pt-BR",
    { style: "currency", currency: "BRL" }
  );
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
      clicklvl = clicklvl + 1;
    }
  }
  document.getElementById("dinheiro").textContent = dindin.toLocaleString(
    "pt-BR",
    { style: "currency", currency: "BRL" }
  );
  document.getElementById("potencia").textContent = upgradeclick.toLocaleString(
    "pt-BR",
    { style: "currency", currency: "BRL" }
  );
  document.getElementById("dpc").textContent = dindinperclick.toLocaleString(
    "pt-BR",
    { style: "currency", currency: "BRL" }
  );
  document.getElementById("clicklevel").textContent = clicklvl;
}

function verify() {
  if (dindin >= upgradeclick) {
    document.getElementById("potencia").disabled = false;
  } else {
    document.getElementById("potencia").disabled = true;
  }

  if (dindin >= farmaciaprice) {
    document.getElementById("farmacia").disabled = false;
    document.getElementById("farmaciaimage").style.opacity = 1;
    document.getElementById("dpsall").style.display = "block";
    document.getElementById("real").style.minHeight = "475px";
  } else {
    document.getElementById("farmacia").disabled = true;
  }

  if (dindin >= acougueprice) {
    document.getElementById("acougue").disabled = false;
    document.getElementById("acougueimage").style.opacity = 1;
  } else {
    document.getElementById("acougue").disabled = true;
  }

  if (dindin >= superprice) {
    document.getElementById("super").disabled = false;
    document.getElementById("supermercadoimage").style.opacity = 1;
  } else {
    document.getElementById("super").disabled = true;
  }

  if (dindin >= shopprice) {
    document.getElementById("shop").disabled = false;
    document.getElementById("shoppingimage").style.opacity = 1;
  } else {
    document.getElementById("shop").disabled = true;
  }
}

function farma() {
  if (dindin >= farmaciaprice) {
    if (farmaciagain == 0) {
      0;
      farmaciagain = 50;
      document.getElementById("progressfarma").style.display = "block";
    } else {
      farmaciagain = Math.round(farmaciagain * 1.2);
    }
    dindin = dindin - farmaciaprice;
    farmaciaprice = farmaciaprice * 2;
    document.getElementById("farmacia").textContent =
      farmaciaprice.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
    document.getElementById("farmaciadps").textContent =
      farmaciagain.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
    document.getElementById("dinheiro").textContent = dindin.toLocaleString(
      "pt-BR",
      { style: "currency", currency: "BRL" }
    );
    farmalvl = farmalvl + 1;
    document.getElementById("farmalevel").textContent = farmalvl;
  } else {
    alert("você não tem grana, pobre, vai trabalhar");
  }
}

function acougue() {
  if (dindin >= acougueprice) {
    if (acouguegain == 0) {
      acouguegain = 100;
      document.getElementById("progressacougue").style.display = "block";
    } else {
      acouguegain = Math.round(acouguegain * 1.3);
    }
    dindin = dindin - acougueprice;
    acougueprice = acougueprice * 2;
    document.getElementById("acougue").textContent =
      acougueprice.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
    document.getElementById("acouguedps").textContent =
      acouguegain.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
    document.getElementById("dinheiro").textContent = dindin.toLocaleString(
      "pt-BR",
      { style: "currency", currency: "BRL" }
    );
    acouguelvl = acouguelvl + 1;
    document.getElementById("acouguelevel").textContent = acouguelvl;
  } else {
    alert("você não tem grana, pobre, vai trabalhar");
  }
}

function superm() {
  if (dindin >= superprice) {
    if (supergain == 0) {
      supergain = 250;
      document.getElementById("progresssuper").style.display = "block";
    } else {
      supergain = Math.round(supergain * 1.5);
    }
    dindin = dindin - superprice;
    superprice = superprice * 2;
    document.getElementById("super").textContent = superprice.toLocaleString(
      "pt-BR",
      { style: "currency", currency: "BRL" }
    );
    document.getElementById("superdps").textContent = supergain.toLocaleString(
      "pt-BR",
      { style: "currency", currency: "BRL" }
    );
    document.getElementById("dinheiro").textContent = dindin.toLocaleString(
      "pt-BR",
      { style: "currency", currency: "BRL" }
    );
    superlvl = superlvl + 1;
    document.getElementById("supermercadolevel").textContent = superlvl;
  } else {
    alert("você não tem grana, pobre, vai trabalhar");
  }
}

function shop() {
  if (dindin >= shopprice) {
    if (shopgain == 0) {
      shopgain = 500;
      document.getElementById("progressshop").style.display = "block";
    } else {
      shopgain = Math.round(shopgain * 1.6);
    }
    dindin = dindin - shopprice;
    shopprice = shopprice * 2;
    document.getElementById("shop").textContent = shopprice.toLocaleString(
      "pt-BR",
      { style: "currency", currency: "BRL" }
    );
    document.getElementById("shopdps").textContent = shopgain.toLocaleString(
      "pt-BR",
      { style: "currency", currency: "BRL" }
    );
    document.getElementById("dinheiro").textContent = dindin.toLocaleString(
      "pt-BR",
      { style: "currency", currency: "BRL" }
    );
    shoplvl = shoplvl + 1;
    document.getElementById("shoppinglevel").textContent = shoplvl;
  } else {
    alert("você não tem grana, pobre, vai trabalhar");
  }
}

function cps() {
  cps = farmaciagain + acouguegain + supergain + shopgain;
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
