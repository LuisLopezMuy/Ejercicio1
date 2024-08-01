console.log("Se crea un array con números de 1 a 5:")
var arr = [1,2,3,4,5];
console.log(arr);

console.log("Se agrega un 6 al final:")
arr.push(6);
console.log(arr);

console.log("Se elimina el primer número:")
arr.shift();
console.log(arr);

console.log("Se enlista cada dato:")
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])    
};