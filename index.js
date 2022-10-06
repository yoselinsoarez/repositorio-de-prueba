
inicializar()

function inicializar(){
    eventosBotones()

}

function eventosBotones() {
    document.querySelector("#btnEnviar").addEventListener("click", mostrarDatos);
}

function borrarCampos(){
    document.querySelector("#nombre").value = "";
    document.querySelector("#apellido").value = "";
    document.querySelector("#edad").value = "";
}


function mostrarDatos(){
    let nombre = document.querySelector("#nombre").value;
    let apellido = document.querySelector("#apellido").value;
    let edad = document.querySelector("#edad").value;
    let edadNumerica = parseInt(edad);
    let mensaje = "";

    mensaje = `Su nombre es ${nombre}, su apellido ${apellido} y su edad ${edad}.`

    document.querySelector("#parrafo").innerHTML = mensaje;
    borrarCampos()

}
