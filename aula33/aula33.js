//Atribuição via desestruturação via objeto 

const pessoa = { //lembrando que nos objetos precisamos usar chaves
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};

//Atribuição via desestruturação
/* const { nome, sobrenome, idade } = pessoa;
console.log(nome, sobrenome); */

/* const { endereco: { rua, numero }, endereco } = pessoa;
console.log(rua, numero, endereco); */

const {nome, ...resto } = pessoa; //tudo exceto o nome
console.log(resto);

//se eu quiser que apareça o objeto e o nome em formado de string, seria 
//console.log(nome, resto)