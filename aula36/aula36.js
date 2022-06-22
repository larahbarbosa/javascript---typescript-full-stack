//For in lê os índices ou chaves do objeto

/* const fruits = ['Pera', 'Maça', 'Uva'];

for (let i = 0; i < fruits.length; i++) { //acessando todos os itens do array
    console.log(fruits[i]);
} */


/* for (let i in fruits) { //lendo o índice 
    console.log(i);
} */


/* for (let indice in fruits) { //lendo as chaves objetos
    console.log(fruits[indice]);
} */

const pessoa = {
    nome: 'Lara',
    idade: 25
};

/* console.log(pessoa.nome); //para encontrar alguma coisa
console.log(pessoa['nome']); */

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]); //lendo as chaves e objetos
}