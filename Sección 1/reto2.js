//Tipos de souvenirs

let listaSouvenirs = []


//Función para verificar si el valor ingresado es un número o no
function verificarNumero (variable){
    while(isNaN(parseFloat(variable))){
        console.warn("El valor ingresado no es un número")
        variable = prompt("Por favor, ingresa solo números")
    }    
}


//Función para verificar la disponibilidad
function verificarDisponibilidad (variable){
    while (variable != "1" && variable !="2"){
           
        console.warn("No es una respuesta válida")
        variable = prompt ("No es una respuesta válida, intenta de nuevo")            
        
    }
}

//Pregunta al usuario si quiere añadir un nuevo souvenir
let nuevoSouvenir = prompt("¿Quieres añadir un nuevo souvenir? Presiona 1 para si, otra tecla para salir")
console.log(nuevoSouvenir)

//Ciclo para añadir nuevos souvenirs hasta que el usuario decida lo contrario
while(nuevoSouvenir === "1"){

    //Pregunta el nombre del artículo
    let nombreSouv = prompt("Ingresa el nombre de souvenir")
    console.log(nombreSouv)    

    //Pregunta el precio del artículo
    let precioSouv = prompt("Ingresa el precio del souvenir")    
    console.log(precioSouv)
    //Utiliza la función para verificar si el valor ingresado es un número
    verificarNumero(precioSouv)

    //Pregunta si el artículo está disponible o no
    let disponibilidadSouv = prompt("¿El souvenir está disponible en el momento? 1. Si, 2. No")
    //Utiliza la función para verificar que sea un dato válido
    verificarDisponibilidad(disponibilidadSouv)


    /* Falta conversión a true o false 
    if (disponibilidadSouv === "1"){
        disponibilidadSouv = "Si"            
        console.log("El souvenir está disponible")
    } else if (disponibilidadSouv === "2"){
        disponibilidadSouv = "No"
        console.log("El souvenir no está disponible")      
    }
    */

    

    let souvenir = {
        "nombre del souvenir": nombreSouv, 
        "precio" : precioSouv, 
        "disponibilidad" : disponibilidadSouv
    }

    listaSouvenirs.push(souvenir)

    nuevoSouvenir = prompt("¿Quieres añadir un nuevo souvenir? Presiona 1 para si, otra tecla para salir")    

}

console.log(listaSouvenirs)

const verSouv = prompt("¿Quieres ver la lista de souvenirs?")