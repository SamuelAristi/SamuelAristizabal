let menuVisible = false;
//funcion que oculta o muestra elm menu

function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que seleccion la opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

//funcion que aplica las animanciones
function efectoHabilidades(){
    var skills = document.getElementById("skill");
    var distanciaSkills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distanciaSkills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("java");
        habilidades[1].classList.add("unrealengine");
        habilidades[2].classList.add("unity");
        habilidades[3].classList.add("htmlscss");
        habilidades[4].classList.add("github");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("tequipo");
        habilidades[7].classList.add("ingles");
        habilidades[8].classList.add("adaptabilidad");
        habilidades[9].classList.add("liderzgo");
    }

}

 
window.onscroll = function(){
    efectoHabilidades();
}
