//operadores aritméticos 
// + - * / ** %
// o ** faz a potenciação
// o % retorna o resto da divisão
// os operadores tem precedência, para alterar a ordem, podemos colocar entre () para fazer primeiro o que a gente quer
// deosi dos parênteses, o mais forte é a **, depois a * / %, depois + e -


/*-------------------
let contador = 1; 
contador++; // a cada vez que chama o operador de incremento "++" ele adiciona 1 e decremento é "--"
console.log(contador);
--------------------*/

/*----------------------------
const passo = 2;
let contador = 0;

contador = contador + passo;
console.log(contador);
contador = contador + passo;
console.log(contador);
contador = contador + passo;
console.log(contador);
contador = contador + passo;
console.log(contador);
contador = contador + passo;
console.log(contador);
-----------------------------*/

// isso aqui em cima é igual a isso aqui embaixo
// += ou *= e etc, são operadores de atribuição

/*---------------
let contador = 0 
contador += 2;
contador += 2;
contador += 2;
contador += 2;
contador += 2;
console.log(contador);
----------------*/

const num1 = parseInt('5'); // para executar o número sem distinção é só colocar a função "Number" com maiúsculo mesmo
const num2 = parseFloat('5.5');
console.log(num1 + num2);