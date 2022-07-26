/* try {
  // é executada quando não há erros
  console.log('Abri um arquivo');
  console.log('Manipulei o arquivo e gerou erro');
  console.log('Fechei o arquivo');
} catch (e) {
  // é executada quando há erros
  console.log('Tratando o erro');
} finally {
  // sempre
  console.log('Eu sempre sou executado');
} */

function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instância de Date.');
    }

    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {

    });
} 

try {
    const data = new Date('01-01-2022 14:37:59')
    const hora = retornaHora();
    console.log(hora);
} catch (e) {
    //tratar erro
} finally {
    console.log('Tenha uma boa noite.')
}


