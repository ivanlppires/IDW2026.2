const campoNumero = document.querySelector('#numero');
const botao = document.querySelector('#botao');

botao.addEventListener('click', () => {
    const numero = campoNumero.value;
    alert(numero);
});