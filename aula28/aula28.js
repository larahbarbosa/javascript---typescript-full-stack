//TODA FUNÇÃO CONSTRUTORA COMEÇA COM LETRA MAÍSCULA
//01/01/1970 Timestamp unix (Ddata (0))
//A função vazia significa a data atual
//1 dia em milésimos de segundo = 60 * 60 * 24 * 1000;
//60 * 60 segundos dá 1h, x24 dá 24h, só que em javascript tudo é em milisegundos, então tem que adicionar *1000

/* const data = new Date(0);
console.log(data.toString()); */

/*
Outra maneira de fazer isso é colocando o ano, o mês, o dia e as horas
separados por vírgula
*/

/* const data = new Date(2022, 3, 20, 21, 33,  59)
console.log(data.toISOString()); */
//No JS o mês é menos 1 porque começa do 0, então se colocamos 3 aqui, é abril(4)

//Função date no formato string:
/* const data = new Date('2022-05-26 21:40:00')
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth() + 1); //mês começa do 0
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Dia da semana', data.getDay()); //0 é domingo e 6 é sábado
console.log(data.toString()); */


function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() +1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);