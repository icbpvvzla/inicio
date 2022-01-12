const cabeceraGeneral = document.querySelector(".cabecera");
const menuFinal = document.querySelector(".navegacion_movil");
const textoPortada = document.querySelector("#cuerpo_index");

cabeceraGeneral.innerHTML = `
<a id="logo_cabecera" href="index.html"><img src="logo_icbpvvzla_header.svg" alt="Logo de Iglesia Cristiana Bíblica Palabra Viva"></a>
<button id="tope_pagina">
<img src="icono_tope_pagina.svg" alt="Icono para regresar al tope de pagina">
</button>
<button id="menu_cabecera">
<img src="icono_menu_cabecera.svg" alt="Icono para ir al menú de navegación de la web">
</button>`;

menuFinal.innerHTML = `<nav>
<a href="index.html">Inicio</a>
<a href="iglesias.html">Iglesias</a>
<a href="creencias.html">Creencias</a>
<a href="recursos.html">Recursos</a>
<a href="trabajo.html">Trabajo</a>
<a href="contacto.html">Contacto</a>
<a href="apoya.html">Apóyanos</a>
</nav>`;

textoPortada.innerHTML = `Iglesias bíblicas<br>y centradas<br>en el evangelio`;

//CONSTANTES Y FUNCIONES PARA BOTONES DE CABECERA
//CONSTANTES Y FUNCIONES PARA BOTONES DE CABECERA
//CONSTANTES Y FUNCIONES PARA BOTONES DE CABECERA
//CONSTANTES Y FUNCIONES PARA BOTONES DE CABECERA
//CONSTANTES Y FUNCIONES PARA BOTONES DE CABECERA
//CONSTANTES Y FUNCIONES PARA BOTONES DE CABECERA
//CONSTANTES Y FUNCIONES PARA BOTONES DE CABECERA
//CONSTANTES Y FUNCIONES PARA BOTONES DE CABECERA

const botonMenuCabecera = document.querySelector("#menu_cabecera");
const botonTopePagina = document.querySelector("#tope_pagina");
const menuInicio = document.querySelector(".navegacion_movil");

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
        block: "start",
        inline: "end"
    })
});