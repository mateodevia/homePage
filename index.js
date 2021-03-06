'use strict';
let menuEstaAbierto = false;

// I turned off the no unused variables rule because I define event handler function which are never called on the file, but that are called from the HTML files

// eslint-disable-next-line no-unused-vars
function setLanguage(language) {
    document.documentElement.lang = language;
    window.sessionStorage.idioma = language;
    document.getElementById('modalIdiomas').style.display = 'none';
    document.documentElement.lang = language;
}

// eslint-disable-next-line no-unused-vars
function preguntarLenguaje() {
    document.getElementById('modalIdiomas').style.display = 'block';
}

// eslint-disable-next-line no-unused-vars
function cargarLenguaje() {
    if (window.sessionStorage.idioma) {
        if (window.sessionStorage.idioma === 'es') {
            document.documentElement.lang = 'es';
        }
    } else {
        preguntarLenguaje();
    }
}

// eslint-disable-next-line no-unused-vars
function handleClick() {
    if (!menuEstaAbierto) {
        document.getElementById('navVertical').style.display = 'block';
        menuEstaAbierto = true;
        document.getElementById('rectangulo').style['box-shadow'] = 'none';
        document.getElementById('rectangulo').style['-moz-box-shadow'] = 'none';
        document.getElementById('rectangulo').style['box-shadow'] = 'none';
    } else {
        document.getElementById('navVertical').style.display = 'none';
        menuEstaAbierto = false;
        document.getElementById('rectangulo').style['box-shadow'] =
            '0px 20px 30px -15px rgba(0, 0, 0, 0.75)';
        document.getElementById('rectangulo').style['-moz-box-shadow'] =
            '0px 20px 30px -15px rgba(0, 0, 0, 0.75)';
        document.getElementById('rectangulo').style['box-shadow'] =
            '0px 20px 30px -15px rgba(0, 0, 0, 0.75)';
    }
}
// eslint-disable-next-line no-unused-vars
function videoFastCab() {
    document.getElementById('modalFastCab').style.display = 'block';
}
// eslint-disable-next-line no-unused-vars
function cerrarFastCab() {
    document.getElementById('modalFastCab').style.display = 'none';
}
// eslint-disable-next-line no-unused-vars
function videoUML() {
    document.getElementById('modalUML').style.display = 'block';
}
// eslint-disable-next-line no-unused-vars
function cerrarUML() {
    document.getElementById('modalUML').style.display = 'none';
}
// eslint-disable-next-line no-unused-vars
function videoArquisoft() {
    document.getElementById('modalArquisoft').style.display = 'block';
}
// eslint-disable-next-line no-unused-vars
function cerrarArquisoft() {
    document.getElementById('modalArquisoft').style.display = 'none';
}
// eslint-disable-next-line no-unused-vars
function videoRegesta() {
    document.getElementById('modalRegesta').style.display = 'block';
}
// eslint-disable-next-line no-unused-vars
function cerrarRegesta() {
    document.getElementById('modalRegesta').style.display = 'none';
}
// eslint-disable-next-line no-unused-vars
function videoDemo() {
    document.getElementById('modalDemo').style.display = 'block';
}
// eslint-disable-next-line no-unused-vars
function cerrarDemo() {
    document.getElementById('modalDemo').style.display = 'none';
}
