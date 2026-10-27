// exercício que envolva if, else e while.
// calculadora

const numero1 = parseInt(prompt('Digite o primeiro número:'));
const numero2 = parseInt(prompt('Digite o segundo número:'));

let operacao = '+';

do {
    operacao = prompt('Digite a operação desejada (+, -, *, /):');
} while (
    operacao != '+' &&
    operacao != '-' &&
    operacao != '*' &&
    operacao != '/'
);

let resultado = null;
if (operacao == '+') resultado = numero1 + numero2;
else if (operacao == '-') resultado = numero1 - numero2;
else if (operacao == '*') resultado = numero1 * numero2;
else if (operacao == '/') resultado = numero1 / numero2;
else alert('Operação inválida!');

console.log('O resultado da operação é: ' + resultado);