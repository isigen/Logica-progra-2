let celcius //= parseFloat(prompt("por favor introduzca sus grados celcius: "))
while (true) {
    celcius = parseFloat(prompt("Ingresa la temperatura en grados Celsius:"));
    if (!isNaN(celcius)) {
        break;
    } else {
        alert("¡Error! Por favor, ingresa un número válido.");
    }
}

console.log(`Convirtiendo tus grados Celsius a Fahrenheit y Kelvin...`);


let conviertiendo = function(celcius){
    // if (isNaN(celcius)){
    //     return "error!, vuelve  introducir tus NUMEROS";
    // }  quitamos este y el de abajo para probar una alerta y un while más arriba.
    Fharenheit = (celcius*1.8)+32
    Kelvin = (celcius+273.15)
    

        return{
            Faren : Fharenheit,
            Kelvi : Kelvin
        }  
    }


let resultado = conviertiendo(celcius)
// if (typeof resultado === "string") {
//     console.log(resultado);
// }else{  comentado, explicacion arriba!!
     console.log("Aqui tienes tus celcius en Fharenheit!!", resultado.Faren)
     console.log("Aqui tienes tus resultados en Kelvin!!", resultado.Kelvi)
// }
