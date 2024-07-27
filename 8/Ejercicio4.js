console.log("Adivine un número entre 0 y 100")
console.log("El número ya fue generado de manera aleatoria")
var num = Math.round(Math.random()*100)
var intento = 0
do {
    intento = parseInt(prompt("Pruebe con un número"))
    if (num === intento) {
        console.log("¡Ha adivinado! Era el número "+num)
        console.log("Proceso terminado")
    } else {
        if (intento >num) {
            console.log("El número es menor que " + intento)
        } else if (intento<num) {
            console.log("El número es mayor que "+intento)
        } else {
            console.log("No ha ingresado un número")
        }
    }
} while (intento!=num);