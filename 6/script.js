function ejercicio1() {
    let numero1 = Number(document.getElementById('ejercicio1numero1').value);
    let numero2 = Number(document.getElementById('ejercicio1numero2').value);
    if (numero1 === numero2) {
        alert("Los números son iguales")
    } else {
        alert("Los números no son iguales")
    }
}

function ejercicio2() {
    let numero = Number(document.getElementById("ejercicio2numero").value);
    if (numero > 0) {
        alert("Es un número positivo")
    } else if (numero < 0) {
        alert("Es un número negativo")
    } else {
        alert("Es 0")
    }
}

function ejercicio3() {
    let numero1 = Number(document.getElementById("ejercicio3numero1").value);
    let numero2 = Number(document.getElementById("ejercicio3numero2").value);
    if (numero1 > numero2) {
        alert("Los número ingresados, ordenados de mayor a menor son: " + numero1 + " y " + numero2)
    } else {
        alert("Los número ingresados, ordenados de mayor a menor son: " + numero2 + " y " + numero1)
    }
}

function ejercicio4() {
    let numero1 = Number(document.getElementById("ejercicio4numero1").value);
    let numero2 = Number(document.getElementById("ejercicio4numero2").value);
    let numero3 = Number(document.getElementById("ejercicio4numero3").value);
    if ((numero1>numero2)&&(numero1>numero3)) {
        if (numero2>numero3) {
            alert("Los número ingresados, ordenados de mayor a menor son: " + numero1 + ", " + numero2+" y "+numero3)
        } else {
            alert("Los número ingresados, ordenados de mayor a menor son: " + numero1 + ", " + numero3+" y "+numero2) 
        }
    } else if ((numero2>numero1)&&(numero2>numero3)) {
        if (numero1>numero3) {
            alert("Los número ingresados, ordenados de mayor a menor son: " + numero2 + ", " + numero1+" y "+numero3)
        } else {
            alert("Los número ingresados, ordenados de mayor a menor son: " + numero2 + ", " + numero3+" y "+numero1)
        }
    } else {
        if (numero1>numero2) {
            alert("Los número ingresados, ordenados de mayor a menor son: " + numero3 + ", " + numero1+" y "+numero2)
        } else {
            alert("Los número ingresados, ordenados de mayor a menor son: " + numero3 + ", " + numero2+" y "+numero1)   
        }
    }
}
