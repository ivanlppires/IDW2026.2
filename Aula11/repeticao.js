/* Laços de repetição */

// FOR: Repete um bloco de código um número específico de vezes.
// Sintaxe: for (inicialização; condição de parada; passo) { }
/*for (let i = 0; i < 10; i++) {
    console.log(i);
}*/
// exemplo prático de uso do for
// Informe 10 números e exiba a soma deles.
/*
let soma = 0;
for (let i = 0; i < 10; i++) {
    let numero = parseInt(window.prompt('Informe um número:'));
    soma = soma + numero;
}
console.log('A soma dos números informados é: ' + soma);
*/
// WHILE: Repete um bloco de código enquanto uma condição for verdadeira.

let ehPar = true;
while (ehPar == false) {
    const numero = parseInt(prompt('Informe um número par:'));
    if (numero % 2 == 0) {
        ehPar = true;
        console.log('Obrigado por informar o número par ', numero);
    }
}
ehPar = false;
do {
    const numero = parseInt(prompt('Informe um número impar:'));
    if (numero % 2 != 0) {
        ehPar = false;
        console.log('Obrigado por informar o número ímpar ', numero);
    }
}while (ehPar == true);