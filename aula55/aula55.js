// IIFE -> Imediately invoked function expression

/* function qualquerCoisa() {
    console.log(1234567);
}
qualquerCoisa(); // função sem ser imediatamente invocada */

//---------------------------------------------------------------------

/* (function() {
    console.log(123456789)
})();           // função imediatamente invocada */

//---------------------------------------------------------------------

(function() {
    const nome = 'Pipoca';
    console.log(nome);
})();

const nome = 'Pepeca';