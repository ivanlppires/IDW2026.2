// SCRIPT PARA ESTUDAR O FETCH COM JSON

const divResposta = document.querySelector('#resposta');
const imgResposta = document.querySelector('#imagem');

const responder = async() => {
    divResposta.textContent = 'Carregando...';
    imgResposta.src = ''; // limpa a imagem antes de buscar a nova
    const response = await fetch('https://yesno.wtf/api');
    const data = await response.json(); // converte readable stream em json
    divResposta.textContent = data.answer.replace('yes', 'sim').replace('no', 'não');
    imgResposta.src = data.image;
    imgResposta.style.display = 'block'; // exibe a imagem
    zerar();
}

const zerar = () => {
    setTimeout( () => {
        imgResposta.style.display = 'none'; // esconde a imagem
        divResposta.textContent = ''; // limpa a resposta
    }, 10000);
}
