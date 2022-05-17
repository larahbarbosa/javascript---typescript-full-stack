//COMANDO PARA COMENTAR TRECHO DE CÓDIGO RÁPIDO: shift + alt + a

//Na expressão and (&&) ao retornar um valor falso o js vai retornar o próprio valor falso
//ao retornar verdadeiro, o js vai retornar o último vallor verdadeiro

/*
FALSY
false
0
'' "" ``
null / undefined
NaN
*/

/* console.log('Luiz' && NaN && 'Lara'); */


//Função que diz: se vaiExecutar for falso, então retorna falso. Se for verdadeiro, então retorna Oi.

function falaOi() {
    return 'Oi!';
}

const vaiExecutar = true;

console.log(vaiExecutar && falaOi());


//Função para facilitar uma expressão condicionante sem if else apenas com "or"

const corUsuario = null;
const corPadrao = corUsuario || 'Preto'; //o usuário não selecionando nada, automaticamente é preto.

console.log(corPadrao);
//se o usuário setar uma cor, ela será a cor exibida, já que o js exibe o primeiro valor verdadeiro