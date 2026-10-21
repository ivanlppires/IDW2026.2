/* DESAFIO
    Crie um programa que o usuário digite 
    o ano de nascimento e o programa calcule
    se ele é maior de idade ou não.
    Pergunte o nome dele e a idade.
    Ao final responda com uma mensagem:
    "Olá, [nome], você tem [idade] anos e é maior de idade."
*/
const nome = window.prompt("Digite seu nome:");
//const anoNascimento = parseInt(window.prompt("Digite seu ano de nascimento:"));
let anoNascimento = window.prompt("Digite seu ano de nascimento:");
anoNascimento = parseInt(anoNascimento);

const idade = 2026 - anoNascimento;

let maiorIdade = false;
if (idade >= 18 ) {
    maiorIdade = true;
}

// ternário
const maiorIdade2 = (idade >= 18) ? true : false;

let mensagem = "Olá, " + nome + ", você tem " + idade + " anos e ";

// ternário com mensagem
mensagem += (maiorIdade) ? "é maior de idade." : "não é maior de idade.";

console.log(mensagem);


