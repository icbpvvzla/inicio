const botonMenuCabecera = document.querySelector("#menu_cabecera");
const botonTopePagina = document.querySelector("#tope_pagina");
const menuInicio = document.querySelector("#texto_portada");

botonTopePagina.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
});

botonMenuCabecera.addEventListener("click", function () {
    menuInicio.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest"
    })
});