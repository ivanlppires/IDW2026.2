/* DESAFIO */

/*
    crie um número aleatório entre 1 e 20: Math.floor(Math.random() * 20) + 1;
    pergunte o usuário QUAL É O NÚMERO
    ele vai tentar loucamente adivinhar o número
    Enquanto ele não acertar, voce vai perguntar infintamente
    Depois que ele acertar você vai mostrar quantas tentativas ele precisou
    e ao final mostre todos os números que ele chutou.
*/
const numerosecreto = Math.floor(Math.random() * 20) + 1;
let chute = -1;
let tentativas = 0;
const chutes = [];
while(chute != numerosecreto) {
    chute = parseInt(prompt("Qual é o número?"));
    chutes.push(chute);
    tentativas++; // tentativas = tentativas + 1;
}
console.log('Parabéns! o número é ', numerosecreto);
console.log('Tentantivas', tentativas);
for(let numero of chutes) {
    console.log('Você chutou', numero);
}