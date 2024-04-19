function verificarNumero (variable){
    while(isNaN(variable)){
        console.warn("El valor ingresado no es un número")
        variable = prompt("Por favor, ingresa solo números")
    }
    variable = parseFloat(variable)
    return variable   
}

export default verificarNumero;
