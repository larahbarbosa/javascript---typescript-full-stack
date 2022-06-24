const paragrafos = document.querySelector('.paragrafos'); //selecionando vários elementos
const ps = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body); //pegandos os todos os estilos comptdos no css
const backgroundColorBody = estilosBody.backgroundColor; //pegando o estilo do body
//console.log(backgroundColorBody);

 for (let p of ps) { //colocando a div com background do body e cor do texto branco
     p.style.backgroundColor = backgroundColorBody;
     p.style.color = '#FFFFFF';
}