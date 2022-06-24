/*
Escreva uma função chamada ePaisagem
que recebe dois argumentos, largura e altura
de uma imagem (number).
Retorne true se a imagem estiver no modo paisagem
*/

/* function ePaisagem(largura, altura) {
    if (largura > altura) {
        return innerHTML="Modo retrado";
    } else {
        return false;
    }
}

console.log(ePaisagem(1000,500)); */


//refatorando a função 01...
/* function ePaisagem(largura, altura) {
    return largura > altura ? true : false;
}

console.log(ePaisagem(1920 ,1080)); */


//refatorando a função 02...
/* function ePaisagem(largura, altura) {
    return largura > altura;
}

console.log(ePaisagem(1920 ,10800)); */


//Refatorando a função 03 com arrow function...
function ePaisagem = (largura, altura) => largura > altura;
console.log(ePaisagem(1920 ,10800));