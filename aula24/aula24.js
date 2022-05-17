/*
Entre 0 - 11 - Bom dia
Entre 12 - 17 - Boa tarde
Entre 18 - 23 - Boa noit
*/

//if pode ser usado sozinho
//else não pode ser usado sem um if anterior
//é possível usar vários else ifs
//só é possível usar 1 else na checagem
//é possível usar if e else sem o else if

const hora = 35;

if (hora >= 0 && hora <= 11) {
    console.log('Bom dia!');
} else if (hora >= 12 && hora <= 17){
    console.log('Boa tarde!');
} else if (hora >= 18 && hora <= 23) {
    console.log('Boa noite!');
} else {
    console.log('Que horas são pra você?');
}
