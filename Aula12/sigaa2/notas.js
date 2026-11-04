const campoNome = document.querySelector('#nome');
const campoNota1 = document.querySelector('#nota1');
const campoNota2 = document.querySelector('#nota2');
const campoNota3 = document.querySelector('#nota3');
const btnCalcular = document.querySelector('#calcular');
const resultado = document.querySelector('#resultado');

btnCalcular.addEventListener("click", () => {
    const nome = campoNome.value;
    const nota1 = parseFloat(campoNota1.value);
    const nota2 = parseFloat(campoNota2.value);
    const nota3 = parseFloat(campoNota3.value);
    const media = (nota1 + nota2 + nota3) / 3;
    let situacao = '';
    if(media >= 6) situacao = 'Aprovado';
    else if(media >= 4) situacao = 'Exame Final';
    else situacao = 'Reprovado';
    resultado.textContent = nome + ', sua média é: ' + media;
    resultado.textContent += ' - Situação: ' + situacao;
});