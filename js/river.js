function pagina() {
    var respuesta = confirm("seguro quieres salir?")
    if (respuesta == true) {
        return true;
    }
    else {
        return false;
    }
}