function mostraHora() {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR');
}
/* console.log(mostraHora()); */

const timer = setInterval(function() {
    console.log(mostraHora());
}, 1000);

setTimeout(function() {
    clearInterval(timer);
}, 4000);

setTimeout(function() {
    console.log('TCHARAMM!');
}, 5000);