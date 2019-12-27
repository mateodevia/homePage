"use strict";
let menuEstaAbierto = false;

// I turned off the no unused variables rule because I define event handler function which are never called on the file, but that are called from the HTML files

// eslint-disable-next-line no-unused-vars
function handleClick() {
  if (!menuEstaAbierto) {
    document.getElementById("navVertical").style.display = "block";
    menuEstaAbierto = true;
  } else {
    document.getElementById("navVertical").style.display = "none";
    menuEstaAbierto = false;
  }
}
// eslint-disable-next-line no-unused-vars
function videoFastCab() {
  document.getElementById("modalFastCab").style.display = "block";
}
// eslint-disable-next-line no-unused-vars
function cerrarFastCab() {
  document.getElementById("modalFastCab").style.display = "none";
}
// eslint-disable-next-line no-unused-vars
function videoArquisoft() {
  document.getElementById("modalArquisoft").style.display = "block";
}
// eslint-disable-next-line no-unused-vars
function cerrarArquisoft() {
  document.getElementById("modalArquisoft").style.display = "none";
}
// eslint-disable-next-line no-unused-vars
function videoRegesta() {
  document.getElementById("modalRegesta").style.display = "block";
}
// eslint-disable-next-line no-unused-vars
function cerrarRegesta() {
  document.getElementById("modalRegesta").style.display = "none";
}
// eslint-disable-next-line no-unused-vars
function videoDemo() {
  document.getElementById("modalDemo").style.display = "block";
}
// eslint-disable-next-line no-unused-vars
function cerrarDemo() {
  document.getElementById("modalDemo").style.display = "none";
}
