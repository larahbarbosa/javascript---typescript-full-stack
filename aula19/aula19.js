/*
Tipos de Dados Primitivos(valores imutáveis):
string, number, boolena, undefined, null, bigint e symbol.
Valores copiados.
*/

/*
let a = 'A';
let b = a; //cópia
console.log(a,b);

a = 'Outra coisa';
console.log(a,b);
*/


/*Há tipos de ddos que são passados por referência (mutável)
array, objetv, function
Valores passados por referência.
*/

/*
let a = [1, 2, 3];
let b = a;
let c = b;
console.log(a, b);

a.push(4);
console.log(a);

b.pop();
console.log(a, b);

a.push('Luiz');
console.log(c);
*/

// para copiar o valor de a para b podemos usar o "[...a]" deixando o valor de b independente.

//Os arrays são [] e os objetos são {}

const a = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
};

const b = {...a};

a.nome = 'João';
console.log(a);
console.log(b);
