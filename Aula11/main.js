const num1 = parseInt(prompt("Digite o primeiro número:"));
const num2 = parseInt(prompt("Digite o segundo número:"));

/* FUNÇÕES */

// Função tradicional
function soma(a, b) {
    return a + b;
}

// Função anônima
const subtracao = function (a, b) {
    return a - b;
};

/* ARROW FUNCTIONS  () => {} */

// Arrow function com 1 linha de código não precisa de chaves nem do return
const multiplicacao = (a, b) => a * b;

// Arrow function com mais de 1 linha de código precisa de chaves e do return
const divisao = (a, b) => {
    if (b == 0) {
        return 'Não é possível dividir por zero';
    }
    return a / b;
}

console.log('soma', soma(num1, num2));
console.log('subtração', subtracao(num1, num2));
console.log('multiplicação', multiplicacao(num1, num2));
console.log('divisão', divisao(num1, num2));