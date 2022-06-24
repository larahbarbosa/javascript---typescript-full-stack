//WHILE E DO WHILE

/* let i = 0;

while (i <=10) {
    console.log(i);
    i++; //se não colocarmos sempre a variável de controle i++ pra fechar, entraremos num looping infinito
} */


//Criando uma função que gera um número aleatório de 0 até 50

function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;
let rand = random(min, max);


while (rand !== 10) { //enquanto rand(o número randomico) for diferente de 10, continua executando o laço
    rand = random(min, max); //quando a function acha o número 10, ele sai do laço
    console.log(rand);
}

/*A diferença entre While e Do While é que while checa a condição
e executa o código. Do While executa primeiro e checa depois.
*/

do {
    rand = random(min, max); 
    console.log(rand);
    } while(rand !==10);
