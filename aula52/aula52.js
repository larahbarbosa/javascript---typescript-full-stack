//Escopo léxico
/* const nome = 'Cesar';

function falaNome() {
    console.log(nome);
}
falaNome(); */

//--------------------------------------

const nome = 'Cesar';

function falaNome() {
    console.log(nome);
}
function usaFalaNome() {
    falaNome();
}
usaFalaNome();