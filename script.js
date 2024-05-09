let celcius = parseFloat(prompt("por favor introduzca sus grados celcius: "))
console.log(`Convirtiendo tus grados Celsius a Fahrenheit y Kelvin...`);


let conviertiendo = function(celcius){
    if (isNaN(celcius)){
        return "error!, vuelve  introducir tus NUMEROS";
    }
    Fharenheit = (celcius*1.8)+32
    Kelvin = (celcius+273.15)
    

        return{
            Faren : Fharenheit,
            Kelvi : Kelvin
        }  
    }
    

let resultado = conviertiendo(celcius)
if (typeof resultado === "string") {
    console.log(resultado);
}else{
     console.log("Aqui tienes tus celcius en Fharenheit!!", resultado.Faren)
     console.log("Aqui tienes tus resultados en Kelvin!!", resultado.Kelvi)
}