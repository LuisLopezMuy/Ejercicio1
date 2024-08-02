function ejercicio1() {
    let matriz = [];

    for (let i = 0; i < 4; i++) { //Se repite 4 veces, creando 4 filas
        let fila = [];
        for (let j = 0; j < 5; j++) { //Pide 5 valores por cada vez, y los acumula en "fila"
            fila.push(parseInt(prompt("Ingrese un número")));
        };
        matriz.push(fila); //Sube la fila a la matriz
    }

    for (let i = 0; i < 4; i++) {
        console.log(matriz[i].join("")); //muestra cada fila
    }
}





function ejercicio2() {

    let contador = 57;//para los números
    let parOImpar = 1 //si la sección que está trabajando es par o impar
    let dosTrampas = true//si se pondrán 2 o 3 trampas
    let tablero = [];//crea el tablero
    const lineas = ["________________________________________________________________________", "_"];//constante de lína visual separadora

    //línea superior del tablero
    tablero.push(lineas);

    //crea cada sección del tablero
    for (let i = 0; i < 8; i++) {
        let fila1 = [];//fila de númers
        let fila2 = [];//fila de letras
        fila1.push("|")//línea inicial de la fila
        fila2.push("|")//línea inicial de la fila



        //se repite 8 veces, para crear 8 casillas de números
        for (let j = 0; j < 8; j++) {

            if (contador > 9) {//escribe la casilla o el número
                fila1.push("      " + contador + "|")
            } else {
                fila1.push("       " + contador + "|")
            }

            contador += parOImpar;
        }

        if (parOImpar == 1) {//cambia el número del contador, dependiendo la fila
            contador -= 9;
        } else {
            contador -= 7;
        }

        {
            //crea 8 casillas, de trampas
            for (let j = 0; j < 8; j++) {
                fila2.push("        |")
            }

            let trampas = [] //posiciones de las trampas

            if (parOImpar == 1) {//decide si decide la cantidad de trampas

                if (Math.round(Math.random())==1) {//decide si serán 2 trampas, de salir 1
                    dosTrampas = true
                } else {
                    dosTrampas = false
                }
            
            } else {
                dosTrampas = !dosTrampas
            }

            let cantTrampas = 0
            if (dosTrampas == true) {
                cantTrampas = Math.round(Math.random()+1)
            } else {
                cantTrampas = Math.round(Math.random()*2.98+0.51)
            }

            for (let i = 0; i < cantTrampas; i++) {
                trampas.push((Math.round(Math.random() * 7.98 + 0.51)));
            }

            for (let i = 0; i < trampas.length; i++) {
                fila2[trampas[i]] = "    #   |"
            }
        }

        //cambia entre sección impar o par
        parOImpar = parOImpar * -1;

        tablero.push(fila1);//pushea cada fila al tablero
        tablero.push(fila2);
        tablero.push(lineas);
    }

    //imprime el tablero
    for (let i = 0; i < 25; i++) {
        console.log(tablero[i].join(""));
    }


}