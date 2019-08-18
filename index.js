let menuEstaAbierto = false;

function handleClick() {
  if (!menuEstaAbierto) {
    document.getElementById("navVertical").style.display = "block";
    menuEstaAbierto = true;
  }
  else {
    document.getElementById("navVertical").style.display = "none";
    menuEstaAbierto = false;
  }
}

function homeClicked() {
  window.location = '/';
  document.getElementById("formacion1").style.borderBottom = "none";
  document.getElementById("formacion2").style.borderLeft = "none";
  document.getElementById("proyectos1").style.borderBottom = "none";
  document.getElementById("proyectos2").style.borderLeft = "none";
}

function formacionClicked() {
  document.getElementById("formacion1").style.borderBottom = "4px solid";
  document.getElementById("formacion2").style.borderLeft = "8px solid";
  document.getElementById("proyectos1").style.borderBottom = "none";
  document.getElementById("proyectos2").style.borderLeft = "none";
}

function proyectosClicked() {
  document.getElementById("formacion1").style.borderBottom = "none";
  document.getElementById("formacion2").style.borderLeft = "none";
  document.getElementById("proyectos1").style.borderBottom = "4px solid";
  document.getElementById("proyectos2").style.borderLeft = "8px solid";
}