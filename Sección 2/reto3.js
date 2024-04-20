//Decisiones de Última Hora
 
//Importar función para verificar número
import verificarNumero from "../Sección 1/functions.js"

//Definir variable para nuevo artículo
let nuevoArt
let articuloPeq = "Gafas de sol, libro pequeño"
let articuloMed = "Cámara fotográfica, libro"
let articuloGrande = "Computador, sombrero"
let articuloLluvia = "Paraguas, chaqueta"

//Preguntar pronóstico del clima
let clima = prompt("¿Cuál es el pronóstico del clima? 1.Lluvioso 2.Nublado 3.Soleado")
while(true){
    if (clima === "1"){
        clima = "lluvioso"
        break
    } else if (clima === "2"){
        clima = "nublado"
        break
    } else if (clima === "3"){
        clima = "soleado"
        break
    } else {
        clima = prompt("Lo siento, no es una opción válida, ingresa un número del 1 al 3")
    }
}
console.log(`El clima estará ${clima}`)

//Preguntar espacio en la maleta
let espacio = verificarNumero(prompt("Del 1 al 10 ¿Qué tanto espacio tienes en tu maleta?"))
while (espacio < 1 || espacio > 10){
    espacio = verificarNumero(prompt("Lo siento, no es una opción válida, ingresa un número del 1 al 10"))
}

//Calcular espacio de maleta
switch(true) {
    case espacio === 1:        
        nuevoArt = null
        espacio = "nulo"
        break
    case espacio > 1 && espacio <=5:
        espacio = "pequeño"
        break
    case espacio > 5 && espacio <= 7:
        espacio = "mediano"
        break

    case espacio > 7 && espacio <= 10:
        espacio = "grande"
        break 
}
console.log(`El espacio en la maleta es ${espacio}`)

//Preguntar límite de peso de su equipaje y peso actual
let limitePeso = verificarNumero(prompt("¿Cuál es el límite de peso de tu equipaje en kg?"))
let pesoActual = verificarNumero(prompt("¿Cuál es el peso actual de tu equipaje en kg?"))

//Verificar si se pueden llevar más artículos de acuerdo al peso
if (pesoActual > limitePeso){
    console.log("Tu maleta está demasiado pesada, debes dejar algunas cosas")
    nuevoArt = null
} else if (pesoActual === limitePeso){
    console.log("Si añades otro artículo, excederás el límite de peso")
    nuevoArt = null
} else {
    nuevoArt = true
    console.log("Que bien! Aún no has llegado al peso límite")
}

//Elegir el nuevo artículo

//Si ya se llegó al límite de peso o no hay espacio en la maleta, no se puede llevar un nuevo artículo
if (!nuevoArt){
    alert("No puedes llevar un nuevo artículo")

//Si el clima será lluvioso, priorizar artículos para la lluvia    
} else if (clima === "lluvioso" && espacio && nuevoArt){
    alert(`El clima estará lluvioso, aún puedes llevar un artículo para prepararte, te recomiendo los siguientes: ${articuloLluvia}`) 
    
//Si el espacio disponible en la maleta es pequeño    
} else if (clima != "lluvioso" && espacio === "pequeño" && nuevoArt){
    alert(`Al parecer habrá buen clima, pero tienes poco espacio, podrías llevar unos de los siguientes artículos: ${articuloPeq}`)

//Si el espacio en la maleta es mediano    
} else if (clima != "lluvioso" && espacio === "mediano" && nuevoArt){
    alert(`Al parecer habrá buen clima, pero tienes espacio mediano, podrías llevar unos de los siguientes artículos: ${articuloMed}`)

//Si el espacio en la maleta es grande    
} else if (clima != "lluvioso" && espacio === "grande" && nuevoArt){
    alert(`Al parecer habrá buen clima y tienes espacio de sobra, podrías llevar unos de los siguientes artículos: ${articuloGrande}`)

//Cualquier otra opción no especificada
} else {
    alert("No puedes llevar un nuevo artículo")
}

