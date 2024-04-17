//Reto 1: El Viaje de Julian


//Pregunta el destino del viaje
const destinoViaje = prompt("Hola Julián! ¿A donde quieres ir de viaje?")
console.log(`El destino del viaje es ${destinoViaje}`)

//Pregunta la duración del viaje y comprueba si es un valor numérico
let duracionViaje = prompt("¿Cuantos días va a durar tu viaje?")

while(isNaN(parseInt(duracionViaje)) === true){  
    console.warn("El valor ingresado no es numérico")
    duracionViaje = prompt("Por favor, ingresa un solo números")   
}

console.log(`La duración del viaje serán ${duracionViaje} días`)


//Pregunta el presupuesto del viaje y comprueba si es un valor numérico
let presupuestoViaje = prompt("¿Cuál es tu presupuesto inicial?")

while(isNaN(parseInt(presupuestoViaje)) === true){
    console.warn("El valor ingresado no es numérico")  
    presupuestoViaje = prompt("Por favor, ingresa un solo números")
    
}

console.log(`El presupuesto inicial de Julián es de $${presupuestoViaje}`)
   

//Pregunta el estimadio diario del viaje y comprueba si es un valor numérico
let estimadoDiario = prompt("Define un estimado de presupuesto diario")

while(isNaN(parseInt(estimadoDiario)) === true){
    console.warn("El valor ingresado no es numérico")
    estimadoDiario = prompt("Por favor, ingresa un solo números")    
}      
    
console.log(`El estimado diario es de $${estimadoDiario}`) 

//Verifica cuál sería el presupuesto diario ideal
const presupuestoDiario = presupuestoViaje/duracionViaje
console.log(`El presupuesto diario es de $${presupuestoDiario}`)


//Comprueba si el presupuesto es o no es suficiente para el viaje
if (presupuestoDiario >= estimadoDiario){
    alert("Tienes suficiente dinero para el viaje")
    console.log("Buen viaje")
} else {
    alert("No tienes suficiente dinero para el viaje, considera ajustar tu presupuesto o reducir los días de viaje")
    console.log("Debes ajustar el presupuesto")
}


