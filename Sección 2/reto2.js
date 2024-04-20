//Calculadora de presupuesto

//Importar función para verificar que el dato ingresado sea un número
import verificarNumero from "../Sección 1/functions.js"

//Preguntar presupuesto y estimado de gastos para comer fuera y comprar libros
const presupuesto = verificarNumero(prompt("Ingresa tu presupuesto diario"))
const libros = verificarNumero(prompt("Ingresa el estimado para comprar un libro"))
const comer = verificarNumero(prompt("Ingresa el estimado para comer fuera"))

//Preguntar meta mínima de ahorro diario
const ahorro = verificarNumero(prompt("¿Cuál es tu meta de ahorro diario?"))

console.log(`Tu presupuesto diario es de $${presupuesto}, el estimado para comprar un libro es de $${libros}, el estimado para comer fuera es de $${comer}, y tu meta de ahorro diario es de $${ahorro}`)

//Comparar presupuesto con gastos estimados
const gastos = libros + comer
console.log(`Tus gastos estimados son de $${gastos}`)

//Establecer si puede permitirse los gastos, alcanzando el ahorro diario
const sobranteAhorro = presupuesto - ahorro
let totalAhorro = 0

//Si puede permitirse ambos gastos
if (sobranteAhorro >= gastos){
    totalAhorro = ahorro + (sobranteAhorro-gastos)
    console.log(`¡Genial! Puedes permitirte ambos gastos, y podrías ahorrar un total de $${totalAhorro}`)
    alert(`¡Genial! Puedes permitirte ambos gastos, y podrías ahorrar un total de $${totalAhorro}`)

//Si puede permitirse solo uno de los dos
} else if (libros <= sobranteAhorro && comer <= sobranteAhorro){
    console.log("Solo puedes permitirte uno de los dos gastos, la buena noticia es que puedes escoger el que prefieras")
    alert("Solo puedes permitirte uno de los dos gastos, la buena noticia es que puedes escoger el que prefieras")

//Si puede permitirse solo el libro
} else if (libros <= sobranteAhorro){
    totalAhorro = ahorro + (sobranteAhorro-libros)
    console.log(`Solo puedes permitirte comprar un libro, y podrías ahorrar un total de $${totalAhorro}`)
    alert(`Solo puedes permitirte comprar un libro, y podrías ahorrar un total de $${totalAhorro}`)

//Si puede permitirse solo la comida   
} else if (comer <= sobranteAhorro){
    totalAhorro = ahorro + (sobranteAhorro-comer)
    console.log(`Solo puedes permitirte una salida a comer, y podrías ahorrar un total de $${totalAhorro}`)
    alert(`Solo puedes permitirte una salida a comer, y podrías ahorrar un total de $${totalAhorro}`)

 //Si el presupuesto no es suficiente para ninguno de los gastos   
} else {
    console.log("No puedes permitirte ninguno de los gastos")
    alert("No puedes permitirte ninguno de los gastos")
}


