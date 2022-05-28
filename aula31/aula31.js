//Mais diferenças entre var, let e const
//Let não pode ser redeclarada, apenas var pode ser sobrescrita
//Let tem escopo de bloco {...bloco}
//Var só tem escopo de função
//Var é redeclarada independente de estar aninhada dentro de um mini bloco, já let não

const verdadeira = true;

let nome = 'Luiz'; //criando
var nome2 = 'Luiz';

if (verdadeira) {
    let nome = 'Otávio'; //criando
    console.log(nome, nome2);
}

