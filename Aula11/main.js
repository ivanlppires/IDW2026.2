/* EXERCÍCIO Notas dinâmicas para alunos dinâmicos */

const calculoMedia = (notas) => {
    let media = 0;
    for (let nota of notas) {
        media = media + nota;
    }
    media = media / notas.length; // lenght é o numero de elementos no vetor
    return media;
}

const situacaoAluno = (media) => {
    let resultado = 'Reprovado';
    if (media >= 6) resultado = 'Aprovado';
    else if (media >= 4) resultado = 'Recuperação';
    return resultado;
}
let nota = 0;
const notas = [];
while (isNaN(nota) == false) {
    nota = parseFloat(prompt("Digite a nota do aluno"));
    console.log(nota)
    if (isNaN(nota) == false) notas.push(nota);
}

const media = calculoMedia(notas);
const situacao = situacaoAluno(media);

console.log('A média do aluno é ', media, ' e sua situação é ', situacao);
