/*
Operadores de comparação

= atribuição
> maior que
>= maior que ou igual a 
< menor que
<= menor que ou igual a
== igualdade (valor) **********
=== igualdade estrita (valor e tipo)
!= diferente (valor) **********
!== diferente estrito (valor e tipo)

*/

console.log(10 > 5);
console.log(10 >= 5);
console.log(10 < 11);
console.log(10 <= 11);

const num1 = 10;
const num2 = 10;
const comp = num1 === num2; //se usar apenas 2 == ela vai retornar verdadeiro para tipos diferentes como no exemplo abaixo
console.log(comp)

const num3 = 10;
const num4 = '10';
const exemplo = num3 == num4; //mesma coisa para o diferente !=
console.log(exemplo)
