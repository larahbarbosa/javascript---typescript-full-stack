const numero = Number(prompt('Digite um número: '));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML += `<p>Seu número + 2 é ${numero + 2}.</p>`;
texto.innerHTML += `<p>Raiz quadrada é: ${numero ** 0.5}.</p>`; //raiz quadrada é o número elevado ** a 0.5
texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}.</p>`;
texto.innerHTML += `<p>${numero} é NaN: ${Number.isNaN(numero)}.</p>`;
texto.innerHTML += `<p>Arredondando para baixo é: ${Math.floor(numero)}.</p>`;
texto.innerHTML += `<p>Arredondando para cima é: ${Math.ceil(numero)}.</p>`;
texto.innerHTML += `<p>Com 2 casas decimais é: ${numero.toFixed(2)}.</p>`;