const botonMenuCabecera = document.querySelector("#menu_cabecera");
const botonTopePagina = document.querySelector("#tope_pagina");
const botonPaginaInicio = document.querySelector("#contenedor_botones_pantalla_inicio");

botonTopePagina.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
});

botonMenuCabecera.addEventListener("click", function () {
    window.scrollTo({
        top: 100000,
        left: 0,
        behavior: "smooth"
    });
});

botonPaginaInicio.addEventListener("click", function () {
    window.scrollTo({
        top: 100000,
        left: 0,
        behavior: "smooth"
    });
});