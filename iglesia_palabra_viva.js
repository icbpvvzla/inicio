const cabeceraGeneral = document.querySelector(".cabecera");
const menuFinal = document.querySelector(".navegacion_movil");
const pieDePaginas = document.querySelector(".pie_de_pagina");

cabeceraGeneral.innerHTML = `
<a id="logo_cabecera" href="index.html">
    <img src="LOGOipvvenezuela5.svg" alt="Logo de Iglesia Cristiana Bíblica Palabra Viva">
</a>
<button id="menu_cabecera">
<img src="icono_menu_cabecera.svg" alt="Icono para ir al menú de navegación de la web">
</button>`;

menuFinal.innerHTML = `
<nav>
    <a href="creencias_esenciales_2.html">Última publicación</a>
    <a href="index.html">Inicio</a>
    <a href="iglesias.html">Iglesias</a>
    <a href="creencias.html">Creencias</a>
    <a href="recursos.html">Recursos</a>
    <a href="trabajo.html">Trabajo</a>
    <a href="apoya.html">Apoya</a>
</nav>`;

pieDePaginas.innerHTML = `    
<p>Correo: ipvvenezuela@gmail.com</p>
<p>Instagram: icbpalabraviva</p>
<p>Whatsapp: +58 424 917 2916</p>
    `;

//CONSTANTES Y FUNCIONES PARA BOTONES DE CABECERA
//CONSTANTES Y FUNCIONES PARA BOTONES DE CABECERA
//CONSTANTES Y FUNCIONES PARA BOTONES DE CABECERA
//CONSTANTES Y FUNCIONES PARA BOTONES DE CABECERA
//CONSTANTES Y FUNCIONES PARA BOTONES DE CABECERA
//CONSTANTES Y FUNCIONES PARA BOTONES DE CABECERA
//CONSTANTES Y FUNCIONES PARA BOTONES DE CABECERA
//CONSTANTES Y FUNCIONES PARA BOTONES DE CABECERA

const botonMenuCabecera = document.querySelector("#menu_cabecera");
const menuInicio = document.querySelector(".navegacion_movil");

botonMenuCabecera.addEventListener("click", function () {
    menuInicio.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "end"
    })
});
