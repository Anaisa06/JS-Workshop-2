//La Evaluación de Julian
import verificarNumero from "../Sección 1/functions.js";
//determinar si Julian decide salir a correr, trabajar en proyectos personales, o simplemente tomar un día libre.
// - Julian tiene diferentes factores que influyen en cómo decide pasar el día. Estos incluyen su nivel de energía, el clima, y su carga de trabajo actual.

//Variable para nivel de energía
let nivelEnergia 

//Bucle while para verificar una entrada correcta
while(true){
    //Preguntar nivel de energía y verificar que sea número
    nivelEnergia = verificarNumero(prompt("En una escala del 1 al 10 ¿Cómo te sientes hoy?"))

    //Switch para evaluar el nivel de energía
    switch(true) {

        //Nivel de energía menor o igual a 5, se asigna valor falsy
        case nivelEnergia <= 5:
            console.log("Puedo ver que no estás muy enérgico hoy")
            alert("Puedo ver que no estás muy enérgico hoy")
            nivelEnergia = 0
            break
         
        //Nivel de energía mayor a 5, se asigna valor truthy   
        case nivelEnergia > 5 && nivelEnergia <= 10:
            console.log("Excelente! Me alegra ver que estás con buena energía")
            alert("Excelente! Me alegra ver que estás con buena energía")
            nivelEnergia = 1
            break

        //Si no es un número dentro del rango 1 a 10, vuelve a preguntar
        default:
            console.log("Mmm, no entiendo tu respuesta, intenta de nuevo")
            alert("Mmm, no entiendo tu respuesta, intenta de nuevo")
            continue        
    }
    break
}


//Preguntar clima
let clima

while (true){
    clima = prompt("¿Cómo está el clima hoy? 1. Lluvioso, 2.Soleado")
    if (clima === "1"){
        clima = null
        break
    } else if (clima === "2"){
        clima = true
        break
    } else {
        console.log("No creo que ese sea un estado del clima... intenta de nuevo!")
        alert("No creo que ese sea un estado del clima... intenta de nuevo!")
    }
}


//Preguntar carga de trabajo
let cargaTrabajo

//Bucle while para verificar una entrada correcta
while(true){
    //Preguntar nivel de energía y verificar que sea número
    cargaTrabajo = verificarNumero(prompt("En una escala del 1 al 10 ¿Qué tan ocupado estás hoy?"))

    //Switch para evaluar la carga de trabajo
    switch(true) {

        //Carga de trabajo menor o igual a 5, se asigna valor truthy
        case cargaTrabajo <= 5:
            console.log("¡Que bien! Tienes tiempo libre")
            alert("¡Que bien! Tienes tiempo libre")
            cargaTrabajo = "Libre"
            break
         
        //Carga de trabajo mayor a 5, se asigna valor falsy   
        case cargaTrabajo > 5 && cargaTrabajo <= 10:
            console.log("Bueno, manos a la obra")
            alert("Bueno, manos a la obra")
            cargaTrabajo = ""
            break

        //Si no es un número dentro del rango 1 a 10, vuelve a preguntar
        default:
            console.log("Mmm, no entiendo tu respuesta, intenta de nuevo")
            alert("Mmm, no entiendo tu respuesta, intenta de nuevo")
            continue        
    }
    break
}

//Determinar cuál es la mejor opción para el día

//Si hay buen clima, energía y poca carga laboral, salir a correr
if (nivelEnergia && cargaTrabajo && clima){
    console.log("Hoy es día de salir a correr")
    alert("Hoy es día de salir a correr")

 //Si mucha carga laboral, trabajar en proyectos   
} else if (!cargaTrabajo){
    console.log("Es mejor quedarte en casa y trabajar en tus proyectos")
    alert("Es mejor quedarte en casa y trabajar en tus proyectos")

 //De otra manera, quedarse en casa a descansar  
} else {
    console.log("Hoy es día de descansar, tómate el día libre")
    alert("Hoy es día de descansar, tómate el día libre")
}

