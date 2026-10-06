console.log("Constructora G3");

function cambiarImagen(imagen){

    document.getElementById("imagen-principal").src = imagen.src;

}

// MENU HAMBURGUESA

const botonMenu = document.querySelector(".menu-toggle");
const menu = document.querySelector("nav");

if(botonMenu){

    botonMenu.addEventListener("click", function(){

        menu.classList.toggle("activo");

    });

}
