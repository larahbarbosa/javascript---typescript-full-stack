// Função construtora retorna objetos 
// Mesma coisa para factory function (fabrica objetos)
// Na função construtora precisamos iniciar a função sempre com letra maiúscula
// criaPessoa () passa a ser, por exemplos, Pessoa (new)
// Constructor e factory function são um "molde" para os objetos

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log('this.nome' + ': sou um método!')
    }
}

const p1 = new Pessoa('Larissa', 'Barbosa');
const p2 = new Pessoa('Pipoca', 'Pepeca');

console.log(p1.nome, p2.sobrenome);
p2.metodo();