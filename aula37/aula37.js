const nome = ['Larissa Barbosa'];

for (let valor of nome) { //pegando direto o valor
    console.log(valor);
}

for (let i in nome) {
    console.log(nome[i]);
}

nome.forEach(function(valor, indice, array){
    console.log(valor, indice, array);
})

//For clássico - geralmente com iteráveis (arrays ou strings)
//For in - retorna o índice ou chave (strings, arrays ou objetos)
//For of - retorna o valor em si (iteráveis, arrays ou objetos)