//Planificación del Itinerario
import verificarNumero from "./functions.js"

//Crear lista para los artículos
const listaArticulos = []

//Ingresar presupuesto final para el viaje
const presupuesto = verificarNumero(prompt("Ingresa el presupuesto para tu viaje"))
console.log(`El presupuesto es $${presupuesto}`)

//Costos estimados de alimentación, transporte, comida, umbral para emergencias
let alimentación = verificarNumero(prompt("Ingresa el gasto estimado para la alimentación"))
console.log(`El estimado para alimentación: $${alimentación}`)

let transporte = verificarNumero(prompt("Ingresa el gasto estimado para el transporte"))
console.log(`El estimado para transporte: $${transporte}`)

let alojamiento = verificarNumero(prompt("Ingresa el gasto estimado para el alojamiento"))
console.log(`El estimado para alojamiento: $${alojamiento}`)

const emergencias = verificarNumero(prompt("Ingresa un umbral para emergencias"))
console.log(`El umbral para emergencias: $${emergencias}`)

//Verificar si el dinero sobrante es suficiente  para adquirir un artículo extra. Si se tiene más dinero que el precio del artículo, se puede considerar llevarlo, si es inferior, se debería aconsejar que evite gastos adicionales
const listaGastos = [alimentación, transporte, alojamiento, emergencias]  
 
const sumaGastos = listaGastos.reduce((total, actual) => total + actual, 0)
console.log(`La suma de los gastos planeados es de: $${sumaGastos}`)

//Verificar si el presupuesto puede cubrir los gastos, y calcular el sobrante
if (sumaGastos > presupuesto){
    console.warn("Los gastos son mayor al presupuesto, considere ajustar el presupuesto")
    alert("Los gastos son mayor al presupuesto, considere ajustar el presupuesto")
} else if (sumaGastos === presupuesto){
    console.warn("Los gastos son iguales al presupuesto, no puedes llevar un artículo extra")
    alert("Los gastos son iguales al presupuesto, no puedes llevar un artículo extra")
} else {
    const sobrante = presupuesto - sumaGastos
    console.log(`El sobrante es de $${sobrante}`)

    //Funcionalidad para introducir múltiples artículos posibles, mostrar la opción más económica que se ajuste al presupuesto
    let nuevoArticulo = confirm("¿Quieres añadir un nuevo artículo?")
    while(nuevoArticulo){

        //Pregunta el nombre del artículo
        let nombreArt = prompt("Ingresa el nombre del artículo")  
    
        //Pregunta el precio del artículo
        let precioArt = verificarNumero(prompt("Ingresa el precio del artículo"))       
        
        //Crear objeto con los detalles del artículo     
        const articulo = {
            nombre: nombreArt, 
            precio : `$${precioArt}`        
        }
        
        //Agregar articulo a la lista
        listaArticulos.push(articulo)
    
        //Pregunta si quiere añadir un nuevo artículo
        nuevoArticulo = confirm("¿Quieres añadir un nuevo artículo?")    
    
    }   

    console.log(listaArticulos)

    // Encontrar el elemento más económico  
        
    let articuloBarato = listaArticulos[0]

    listaArticulos.forEach(articulo => {
        
        if (articulo.precio < articuloBarato.precio){
            articuloBarato = articulo
        } else {
            articuloBarato = articuloBarato
        }                       
    })

    console.log(`El artículo más económico es ${articuloBarato.nombre} y su precio es ${articuloBarato.precio}`)
    alert(`El artículo más económico es ${articuloBarato.nombre} y su precio es ${articuloBarato.precio}`)
}