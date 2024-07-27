console.log("El proceso se repetirá hasta que se introduzca un número negativo")
do {
    var num = parseInt(prompt("Ingrese un número"))
    console.log("El cuadrado de ese número es: "+num**2)
} while (num>=0);