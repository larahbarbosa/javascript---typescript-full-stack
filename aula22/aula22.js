/* 
Operadores lógicos 
&& -> AND -> E -> Todas as expressões precisam ser verdadeiras para retornar verdadeiro
|| -> OR -> OU -> Se uma retornar verdadeira, a expressão retorna verdadeiro
! -> NOT -> NÃO
*/

const expressaoAnd = true && true && true && true && false;
const expressaoOr = false || false || true || false;
console.log(expressaoOr);


console.log(!false); // estou negando o false, então ele retorna true
// 2 negações retorna para o valor original (colocar !! no console para experimentar)
