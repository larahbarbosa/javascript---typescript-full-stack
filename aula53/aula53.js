//Global
function retornaFuncao() {
    const nome = 'Luiz';
    return function() {
        return nome;
    }
} //3 escopos

const funcao = retornaFuncao();
console.log(funcao);

/* A função do closure é acessar o escopo léxico
O closure é a variável que fecha o escopo, ela retorna a váriável do jeito que ela tá definida;
Sempre vai ser 'Luiz'.
O closure nessa função seria 'Luiz'; é possível ver no console no navegador linkando a um index.html */