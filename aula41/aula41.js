//Escreva uma função que recebe 2 números e retorne o maior deles

/* function max(x, y) {
    if (x > y) {
        return x;
    } else {
        return y;
    }
}

const maior = max(1, 5)
console.log(maior);
 */


//refatorando a função 01...

/* function max(x, y) {
    if (x > y) return x;
    return y;
}

console.log(max(12, 6)) */


//refatorando a função 02...
/* function max(x, y) {
    return x > y ? x : y; //se x for maior que y, eu retorno o x, caso contrário, retorno y
}

console.log(max(12, 65)) */


//Refatorando a função 03 com arrow function...
const max2 = (x, y) => x > y ? x : y;
console.log(max2(34, 564))
