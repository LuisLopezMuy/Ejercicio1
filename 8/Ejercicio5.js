console.log("Suma todos los números ingresados, hasta ingresar un 0")
var num = 0
var suma = 0
do {
    num = parseInt(prompt("Ingrese un número"))
    if (num===0) {
        console.log("El proceso ha terminado. La suma final fue: "+ suma)
    } else {
        if (num<0||num>0) {
            suma+=num
            console.log("La suma actual es: "+ suma)
        } else {
            console.log("Por favor ingrese solo números. La suma sigue siendo: "+suma)
        }
    }
} while (num != 0);