function openMenu(){
    document.getElementById("mainMenu").style.width="480px";//abrir menu opciones en celular
    document.getElementById("mainMenu").style.display="flex";//abrir menu opciones en celular
    document.getElementById("mainMenu").style.height="1000px";//abrir menu opciones en celular
    document.getElementById("openmenu").style.display="none";//abrir menu opciones en celular
}
function closeNav(){
    document.getElementById("mainMenu").style.width="0px";//cerrar menu opciones en celular
    document.getElementById("mainMenu").style.transition="0.9s all";//cerrar menu opciones en celular
    window.location.reload();// recargar pagina actual - F5-
}