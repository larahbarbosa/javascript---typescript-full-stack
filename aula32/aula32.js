//Atribuição via desestruturação

/* let a = 'A';
let b = 'B';
let c = 'C';

const numeros = [1, 2, 3];
[a, b, c] = numeros;

console.log(a, b, c); */


//ÍNDICE            0  1  2  3  4  5  6  7  8
/* const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const primeiroNumero = numeros[0];
console.log(primeiroNumero);  */

const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
const [primeiroNumero, segundoNumero, ...resto] = numeros;  //... é o "rest operator" ou "spread"
console.log(primeiroNumero, segundoNumero);
console.log(resto);