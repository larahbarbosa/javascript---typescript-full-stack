// tipos de dados primitivos 
// string, number, undefined, null, boolean, symbol

const nome = 'Larissa'; // string
const num = 10 // number 
let nomeAluno; // undefined -> não aponta pra lugar nenhum na memória
const sobrenomeAluno = null; // // null -> não aponta pra lugar nenhum na memória

/* 
const a = [1, 2];
const b = a;
    console.log(a, b);
b.push(3);
console.log(a, b);
*/

let a = 2;
const b = a;
    console.log(a, b);
a = 3;
console.log(a, b);     