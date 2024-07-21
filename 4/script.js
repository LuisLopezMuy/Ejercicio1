function ejercicio1() {
    let numero1 = document.getElementById('ejercicio1numero1');
    let numero2 = document.getElementById('ejercicio1numero2');
    alert("Los números ingresados son: " + numero1.value + " y " + numero2.value);
}

function ejercicio2() {
    let nombre = document.getElementById("ejercicio2nombre");
    alert("Buenas noches " + nombre.value);
}

function ejercicio3() {
    let numero1 = document.getElementById("ejercicio3numero1");
    let numero2 = document.getElementById("ejercicio3numero2");
    numero1=Number(numero1.value);
    numero2=Number(numero2.value);
    let suma = numero1+numero2;
    let resta = numero1-numero2;
    let multi = numero1*numero2;
    let division = numero1/numero2;
    alert("El resultado de la suma es "+suma+", la resta es "+resta+", la multiplicación es "+multi+" y la división es "+division+".");
}

function ejercicio4() {
    let celsius = document.getElementById("ejercicio4celsius");
    celsius = Number(celsius.value);
    let fahrenheit= celsius*1.8+32;
    alert("En Grados Fahrenheit es:  " + fahrenheit);
}
