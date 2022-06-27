
/* try {
    console.log(naoExisto);
} catch(error) {
    console.log('naoExisto não existe');  //para mostrar pro usuário
    console.log(error);                   //para ver o erro
}
 */


function soma(x, y) {
    if (
        typeof x !== 'number' ||
        typeof y !== 'number'
    ) {
        throw ('x e y precisam ser números!');
    }

    return x + y;
}

try {
    console.log(soma(1,5));
    console.log(soma(6,'qualquer coisa'));
} catch(error) {
    console.log(error);
}

/*Existe a função construtora do javascript Error, ReferenceError
exemplo: throw new Error('x e y precisam ser números!'); */