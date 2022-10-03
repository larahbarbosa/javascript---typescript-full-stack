// return
//retorna um valor
//termina a função

/* function soma(a, b) {
    return a + b;
}
//ver no console do navegador ou dar um console.log
console.log(soma(2, 5)); */

//-----------------------------------------------------------

/* document.addEventListener('click', function() {
    document.body.style.backgroundColor = 'yellow';
}); 
//função que não retorna nada mas ao clicar em qualquer 
lugar da tela ele muda o background */

//-----------------------------------------------------------

/* //função que cria objeto nome
function criaPessoa(nome, sobrenome) {
    return { nome, sobrenome };
}

const p1 = criaPessoa('Luiz', 'Barbosa');
const p2 = {
    nome: 'Larissa',
    sobrenome: 'Barbosa'
}; //p1 w p2 oferecem o mesmo resultado, mas criadas de maneiras diferentes

console.log(p1);
console.log(p2); */

//-----------------------------------------------------------

/* function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + ' ' + resto;
    }
    return falaResto;
}

const fala = falaFrase('Olá');
const resto = fala('mundo!');
console.log(resto); */

//-----------------------------------------------------------

/* function duplica(n) {
    return n * 2; 
}

function triplica(n) {
    return n * 3;
}

function quadriplica(n) {
    return n * 4
}

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2)); */

//Refatorando as funções acima em uma única função

function criaMultiplicador(multiplicador) {
    return function(n) {
        return n * multiplicador;
    };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);
//retornamos a função ali em cima sem executar, então executamos ela no console.log
console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));