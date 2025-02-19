// creamos un array para almacenar la lsita de amigos a ingresar
var integrantes=[];

//usamos el .value para obtener el valor del input
function agregarAmigo(){
let nombre=document.querySelector('input').value;
let resultSorteo=document.getElementById('resultado');
    //limpiar el resultado del sorteo
    resultSorteo.innerHTML=" ";

   //validamos que haya ingresado un nombre y que no se repita     
    if(integrantes.includes(nombre)||nombre==""){
        alert("El usuario ya existe o no se ha ingresado ningún dato.");
    }else{
        integrantes.push(nombre);
        console.log(integrantes); //verificamos la lista en la consola
        mostrarAmigos(nombre);
    }

    limpiarCaja();
}


function mostrarAmigos(nombre) {
    let lista = document.getElementById('listaAmigos');
    let listaItem=document.createElement('li');

    //agregamos items al html
    listaItem.innerHTML = `<span>${nombre}</span>`;
    lista.appendChild(listaItem);

}

function limpiarCaja() {
    document.querySelector('input').value='';
}

function sortearAmigo(){
    // se valida que haya integrantes en el array
    if(integrantes.length>0){
        //se genera un sorteo para elegir un integrante del array
        let aleatorio=parseInt(Math.random()*integrantes.length);
        
        //se muestra el resultado
        let resultadoSorteo=document.getElementById('resultado');
        resultadoSorteo.innerHTML = `Tu amigo secreto es: ${integrantes[aleatorio]}`;
        
        // se limpia la lista de amigos
        let lista = document.getElementById('listaAmigos');
        lista.innerHTML= '';

        //se vacia el array
        integrantes=[];
    }else{
        alert('no hay amigos para sortear');
    }
}