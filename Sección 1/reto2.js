//Tipos de souvenirs

let listaSouvenirs = []



function verificarNumero (variable){
    while(typeof(parseFloat(variable)) != Number){
        console.warn("El valor ingresado no es un número")
        variable = prompt("Por favor, ingresa solo números")
    }
    console.log("PRUEBA")
}

let nuevoSouvenir = prompt("¿Quieres añadir un nuevo souvenir? 1. Si  2. No")
console.log(nuevoSouvenir)

while(nuevoSouvenir === "1"){
    let nombreSouv = prompt("Ingresa el nombre de souvenir")
    console.log(nombreSouv)
    let precioSouv = prompt("Ingresa el precio del souvenir")    
    console.log(typeof(parseFloat(precioSouv)))
    // verificarNumero(precioSouv)    

}