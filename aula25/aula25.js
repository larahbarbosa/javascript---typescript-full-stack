//As condições verdadeiras interrompem o fluxo da condição assim que é encontrada.
//Nada mais que for verdadeiro é executado após o primeiro true

const numero = 10;

if (numero >=0 && numero <= 5) {
    console.log('O número está entre 0 e 5.');
} else if (numero >=6 && numero <= 8){
    console.log('O número está entre 6 e 8.');
} else if (1 === 1){                                //verdadeiro
    console.log('LITERAL');
} else if (numero >=9 && numero <= 11){
    console.log('O número está entre 9 e 11.');    //verdadeiro
} else {
    console.log('O número não está entre 0 e 11.');
}