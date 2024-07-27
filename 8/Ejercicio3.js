console.log("Indica si el número es par o impar. Se detiene al ingresar 0.")
var num = 0
do {
    num = parseInt(prompt("Ingrese un número"))
    if (num === 0) {
        console.log("El número es 0")
        console.log("Proceso terminado")
    } else {
        if (num % 2 == 0) {
            console.log("El número es par")
        } else if (num % 2 == 1) {
            console.log("El número es impar")
        } else {
            console.log("No es un número")
        }
    }
} while (num != 0);