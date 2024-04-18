//Tipos de souvenirs

let listaSouvenirs = []


//Función para verificar si el valor ingresado es un número o no
function verificarNumero (variable){
    while(isNaN(variable)){
        console.warn("El valor ingresado no es un número")
        variable = prompt("Por favor, ingresa solo números")
    }
    variable = parseFloat(variable)
    return variable   
}


//Función para verificar la disponibilidad
function verificarDisponibilidad (variable){
    if (variable === true){
        variable = "Disponible"
    } else {
        variable = "No disponible"
    }
    return variable             
}

//Pregunta al usuario si quiere añadir un nuevo souvenir
let nuevoSouvenir = prompt("¿Quieres añadir un nuevo souvenir? Presiona 1 para si, otra tecla para salir")
console.log(nuevoSouvenir)

//Ciclo para añadir nuevos souvenirs hasta que el usuario decida lo contrario
while(nuevoSouvenir === "1"){

    //Pregunta el nombre del artículo
    let nombreSouv = prompt("Ingresa el nombre de souvenir")
    console.log(nombreSouv + " " + typeof(nombreSouv))    

    //Pregunta el precio del artículo
    let precioSouv = prompt("Ingresa el precio del souvenir")     
    //Utiliza la función para verificar si el valor ingresado es un número, convertir a número y asignar a nueva variable
    let precioSouvNum = verificarNumero(precioSouv)
    console.log(precioSouvNum + " " + typeof(precioSouvNum))
    

    //Pregunta si el artículo está disponible o no
    let disponibilidadSouvBool = confirm("¿El souvenir está disponible en el momento?")
    console.log(typeof(disponibilidadSouvBool))
    //Utiliza la función para verificar la disponibilidad y asignar a una nueva variable
    let disponibilidadSouv = verificarDisponibilidad(disponibilidadSouvBool)
    console.log(disponibilidadSouv)  
      

    const souvenir = {
        nombre: nombreSouv, 
        precio : `$${precioSouvNum}`, 
        disponibilidad : disponibilidadSouv
    }

    listaSouvenirs.push(souvenir)

    nuevoSouvenir = prompt("¿Quieres añadir un nuevo souvenir? Presiona 1 para si, otra tecla para salir")    

}

console.log(listaSouvenirs)

const verSouv = confirm("¿Quieres ver los souvenirs que registraste?")
if (verSouv){
    listaSouvenirs.forEach(souvenir => {
        alert( `- ${souvenir.nombre} - ${souvenir.precio} - ${souvenir.disponibilidad}`)
    }
        )
} 

alert("Hasta pronto!")
