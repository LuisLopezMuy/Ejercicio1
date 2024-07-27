console.log("Indica si el número es negativo o positivo. Se detiene al ingresar 0.")
var num = 0
do {
    num = parseInt(prompt("Ingrese un número"))
    if (num>0) {
        console.log("El número es positivo")
    } else if (num<0) {
        console.log("El número es negativo")
    } else if (num===0) {
        console.log("El número es 0")
        console.log("Proceso terminado")
    } else {
        console.log("No es un número")
    }
} while (num != 0);