function ejercicio1() {
    let numero1 = parseInt(document.getElementById('ejercicio1numero1').value);
    let result = document.getElementById('result1');
    let x = "Resultado: "
    switch (numero1) {
        case 1:
            x = x + "Enero"
            break;
        case 2:
            x = x + "Febrero"
            break;
        case 3:
            x = x + "Marzo"
            break;
        case 4:
            x = x + "Abril"
            break;
        case 5:
            x = x + "Mayo"
            break;
        case 6:
            x = x + "Junio"
            break;
        case 7:
            x = x + "Julio"
            break;
        case 8:
            x = x + "Agosto"
            break;
        case 9:
            x = x + "Septiembre"
            break;
        case 10:
            x = x + "Octubre"
            break;
        case 11:
            x = x + "Noviembre"
            break;
        case 12:
            x = x + "Diciembre"
            break;
        default:
            x = x + "No es un número válido"
            break;
    }
    result.textContent = x
}

function ejercicio2() {
    let usuario = document.getElementById("ejercicio2usuario");
    let contra = document.getElementById("ejercicio2contra");
    let result = document.getElementById("result2")

    if ((usuario.value == "admin") && (contra.value == "admin2024")) {
        result.textContent = "Resultado: Login exitoso."
    } else {
        result.textContent = "Resultado: Usuario o contraseña incorrectos."
    }
    usuario.value = ""
    contra.value = ""
}

function ejercicio3() {
    let numero1 = Number(document.getElementById("ejercicio3numero1").value);
    let numero2 = Number(document.getElementById("ejercicio3numero2").value);
    let result = document.getElementById("result3")
    let operacion = document.getElementById("operacion").value
    let total = 0
    switch (operacion) {
        case "suma":
            total = numero1 + numero2
            break;
        case "resta":
            total = numero1 - numero2
            break;
        case "multi":
            total = numero1 * numero2
            break;
        case "divi":
            total = numero1 / numero2
            break;
    }
    result.textContent = ("Resultado: " + String(total))
}

function ejercicio4() {
    let edad = parseInt(document.getElementById("ejercicio4edad").value);
    let result = document.getElementById("result4")
    if (edad >= 18) {
        result.textContent = "Resultado: Usted es mayor de edad."
    } else {
        result.textContent = "Resultado: Usted es menor de edad."
    }
}

function ejercicio5() {
    let numero = parseInt(document.getElementById("ejercicio5numero").value);
    let result = document.getElementById("result5")
    if (numero % 2 == 1) {
        result.textContent = "Resultado: Es un número impar."
    } else {
        result.textContent = "Resultado: Es un número par."
    }
}

function ejercicio6() {
    console.log("|-------------------------------------|")
    console.log("| Opciones:                           |")
    console.log("|                                     |")
    console.log("| 1. Sumar                            |")
    console.log("| 2. Restar                           |")
    console.log("| 3. Salir                            |")
    console.log("|-------------------------------------|")
    let opcion = parseInt(prompt("Ingrese opción"))
    if (opcion==1||opcion==2) {
        let numero1 = parseInt(prompt("Ingrese primer número"))
        let numero2 = parseInt(prompt("Ingrese segundo número"))
        let result = 0
        switch (opcion) {
            case 1:
                result=numero1+numero2
                console.log("")
                console.log("Resultado: " + result)
                break;
            case 2:
                result=numero1-numero2
                console.log("")
                console.log("Resultado: " + result)
                break;        
        }
    } else if (opcion==3) {
        console.log("")
        console.log("Ha escogido salir")
    } else {
        console.log("")
        console.log("Opción no existente")
    }
    console.log("")
    console.log("Proceso Terminado")
}