//Removendo o código do escopo global e adicionando a uma função de relógio

function relogio() {
    function criaSegundos(segundos) {
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        });
    }
    
    
    const relogio = document.querySelector('.relogio');
    const iniciar = document.querySelector('.iniciar');
    const pausar = document.querySelector('.pausar');
    const zerar = document.querySelector('.zerar');
    let segundos = 0;
    let timer;
    
    function iniciaRelogio() {
        timer = setInterval(function() {
            segundos++;
            relogio.innerHTML = criaSegundos(segundos);
        }, 1000);
    }
    
    /*adicionando um evento (e) a cada click, mostrando onde está sendo clicado.
    Com isso, em apenas 1 click ele identifica onde está sendo clicado e
    isso facilita a leitura do código no navegador.
    */
    document.addEventListener('click', function(e) {
        const el = e.target;
        /* console.log(el); */
    
        if(el.classList.contains('zerar')) {
            relogio.classList.remove('pausado');
            clearInterval(timer);
            relogio.innerHTML = '00:00:00';
            segundos = 0;
        }
    
        if(el.classList.contains('pausar')) {
            relogio.classList.add('pausado');
            clearInterval(timer);
        }
    
        if(el.classList.contains('iniciar')) {
            relogio.classList.remove('pausado');
            clearInterval(timer);
            iniciaRelogio();
        }
    });
}

relogio();

/* 
iniciar.addEventListener('click', function(event) {
    relogio.classList.remove('pausado');
    clearInterval(timer);
    iniciaRelogio();
}); 
pausar.addEventListener('click', function(event) {
    relogio.classList.add('pausado');
    clearInterval(timer);
});
zerar.addEventListener('click', function(event) {
    relogio.classList.remove('pausado');
    clearInterval(timer);
    relogio.innerHTML = '00:00:00';
    segundos = 0;
}); */