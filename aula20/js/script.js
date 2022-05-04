//Prevenindo que não perderemos os dados ao atualizar a página
/*
function meuEscopo () {                              //protegendo o escopo global
    const form = document.querySelector('.form');   //usando a classe para selecionar

    form.onsubmit = function (evento) {
       evento.preventDefault()
       alert(1);
       console.log('Foi enviado');
    }; */
    
    //outro jeito de fazer isso: 

/*     let contador = 1;
    function recebeEventoForm (evento) {
        evento.preventDefault();
        console.log(`Form não foi enviado ${contador}`);
        contador++;
    }
    form.addEventListener('submit', recebeEventoForm); */


function meuEscopo () {                              
    const form = document.querySelector('.form'); 
    const resultado = document.querySelector('.resultado'); 

    const pessoas = [];

    function recebeEventoForm (evento) {
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });

        console.log(pessoas);
        
        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ` +
        `${peso.value} ${altura.value}</p>`;
    }

    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();