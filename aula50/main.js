/* function funcao() {
    console.log(arguments[11]); //essa arguments sustenta tudo que eu envie ide parâmetro na função abaixo dentro de um objeto/array
}
funcao('Valor', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Luiz'); */

/*A função definida com a palavra function tem um variável especial que chama arguments
que sustenta todos os argumentos enviados;
*/ 

//-------------------------------------------------------------

//SOMANDO TUDO DO PARÂMETRO
/* function funcao() {
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }

    console.log(total);
}
funcao(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); */

//--------------------------------------------------------------

//SELECIONANDO OS PARÂMETROS PELOS ARGUMENTOS
/* function funcao(a, b, c, d, e, f) {
      console.log(a, b, c, d); 
}
funcao(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); */


//--------------------------------------------------------------
//SOMANDO OS ARGUMENTOS
function funcao(a, b = 2, c = 4) {
    console.log(a + b + c);
}
funcao(2); //setando o valor de a, deixando o valor de b pré definido na função
//se eu quiser pular o valor de algum eu coloco 'undefined' , exemplo (2, undefined, 20) assim somando a + b + c