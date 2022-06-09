/* console.log('Linha 0 ')
console.log('Linha 1 ')
console.log('Linha 2 ')
console.log('Linha 3 ')
console.log('Linha 4 ')
console.log('Linha 5 ') */

//i significa index
//i é uma variável de controle aqui embaixo

/* for (let i = 0; i <= 5; i++) {
    console.log(`Linha ${i}`);
}  */

//para incrementar, +=10 por exemplo
//ou decrementar, -=


//Checkando se o número é par ou ímpar
/* for (let i = 0; i <= 10; i++) {
    const par = i % 2 === 0 ? 'par' : 'ímpar'; //"o resto da divisão por 2 é igual a 0?"
    console.log(i, par);
}  */

//Usando estrutura de repetição pra checkar o array 
//                 0       1      2
const frutas = ['Maça', 'Pêra', 'Uva']

for (let i = 0; i < frutas.length; i++) {
    //console.log(i);
    //console.log(frutas[i]);
    console.log(`índice ${i}`, frutas[i]);
}