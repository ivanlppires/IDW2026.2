const campoNumero = document.querySelector('#numero');
const botao = document.querySelector('#botao');
const escolhidos = document.querySelector('#escolhidos');
const imagem = document.querySelector('#imagem');
imagem.src='';

const numeroSecreto = Math.floor(Math.random() * 70);
botao.addEventListener('click', () => {
    const numero = campoNumero.value;
    if (numero == numeroSecreto) {
        alert('Parabéns! Você acertou o número secreto!');
        imagem.src = 'sucesso.webp';
    }else{
        /* NUMERO ERRADO */
        escolhidos.textContent += ' ' + numero;
        if(numero < numeroSecreto){
            alert('O número secreto é maior que ' + numero);
        }else{
            alert('O número secreto é menor que ' + numero);
        }
        imagem.src='erro.gif';
    }
});

