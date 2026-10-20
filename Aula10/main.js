/* 
Introdução a javacript
*/
// Variáveis
/*
    var (variável global - não é mais utilizada)
    let (variável local - pode ser alterada e é mais utilizada)
    const (variável local - não pode ser alterada e é mais utilizada)
*/
let nome = 'Ivan Pires';
nome = 'Ivan Luiz Pedroso Pires';
//console.log( nome );

const titulo = 'Introdução a JS';
//console.log( titulo );

// Tipos de dados
/*
    String (texto)
    Number (número)
    Boolean (verdadeiro ou falso)
    Array (lista de valores)
    Object (objeto com propriedades e métodos)
    Null (valor nulo)
    Undefined (valor indefinido)
*/

/*
let idade = 30; // Number
let altura = 1.75; // Number
let professor = true; // Boolean

console.log(nome, typeof nome); // string
console.log(idade, typeof idade); // number
console.log(altura, typeof altura); // number
console.log(professor, typeof professor); // boolean

*/
// exemplo calculadora
let num1 = window.prompt('Digite o primeiro número:');
let num2 = window.prompt('Digite o segundo número:');

// parse converte tipos de dados
// parseInt converte para inteiro
num1 = parseInt(num1);
num2 = parseInt(num2);

let result = num1 + num2;

console.log(num1, typeof num1);
console.log(num2, typeof num2);

console.log(result);