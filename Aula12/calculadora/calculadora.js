const campoN1 = document.querySelector('#num1');
const campoN2 = document.querySelector('#num2');
const operacao = document.querySelector('#operacao');
const btnCalcular = document.querySelector('#botaoCalcular');
const resultado = document.querySelector('#resultado');

btnCalcular.addEventListener("click", () => {
    const n1 = parseFloat(campoN1.value);
    const n2 = parseFloat(campoN2.value);
    const op = operacao.value;
    let res = null; // resultado da operação
    switch (op) {
        case "somar": res = n1 + n2; break;
        case "multiplicar": res = n1 * n2; break;
        case "subtrair": res = n1 - n2; break;
        case "dividir": res = n1 / n2; break;
        default: res = "Operação inválida"; break;
    }
    resultado.textContent = 'Resultado: ' + res;
});