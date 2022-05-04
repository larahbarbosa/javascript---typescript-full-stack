function criaPessoa (nome, sobrenome, idade) { //nome, sobrenome e etc são os parâmetros
    return { nome, sobrenome, idade };
}; 

const pessoa1 = criaPessoa('Luiz', 'Otávio', 25); //quando envia um valor para o parâmetro isso se chama 'Argumento'
console.log(pessoa1);