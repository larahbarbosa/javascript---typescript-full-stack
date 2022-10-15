//Factory function 
//Constructor function 
function criaPessoa(nome, sobrenome, p, a) {
    return {
        nome, 
        sobrenome,
        
        //Getter
        get nomeCompleto() {
            return `${nome} ${sobrenome}`;
        },

        //Setter
        set nomeCompleto(valor) {
            console.log(valor);
        },

        fala: function(assunto) {
            return `${nome} está ${assunto}.`
        },

        altura: a,
        peso: p,
        imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Larissa', 'Barbosa', 1.70, 85);
p1.nomeCompleto = 'Larissa da Silva Barbosa';
console.log(p1.imc());
console.log(p1.fala('falando sobre JS'));
console.log(p1.nomeCompleto); //quando chama no get a função não pode ter () para ser chamada