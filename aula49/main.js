//Relembrando funções em JS

//Declaração de função (function hoisting)
function falaOi() {
    console.log('oi!');
}
falaOi();//delcaração clássica de função

//As funções em JS são First-class objets (objetos de primeira classe)
//Function expression
const souUmDado = function() { //tratando uma função como um dado
    console.log('Sou um dado.');
};
/* souUmDado(); */

function executaFuncao(funcao) {
    funcao();
}
executaFuncao(souUmDado); //executando a função anterior como um parâmetro

//Arrow function
const funcaoArrow = () => {
    console.log('Sou uma arrow function!');
};
funcaoArrow();

//Dentro de um objeto 
const obt = {
    falar: function() {
        console.log('Esse é um método de um objeto...');
    }
};
obt.falar();