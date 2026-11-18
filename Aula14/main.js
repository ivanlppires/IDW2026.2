// SCRIPT PARA ESTUDAR O FETCH COM JSON

const divResposta = document.querySelector('#resposta');
const imgResposta = document.querySelector('#imagem');

const responder = async () => {
    imgResposta.src = ''; // limpa a imagem antes de buscar a nova
    const response = await fetch('https://yesno.wtf/api');
    const data = await response.json(); // converte readable stream em json
    imgResposta.src = data.image;
    document.querySelector('button').innerHTML = 'Pensando na resposta...';
    imgResposta.onload = () => {
        imgResposta.style.display = 'block'; // exibe a imagem
        divResposta.textContent = data.answer.replace('yes', 'sim').replace('no', 'não');
        zerar();
    }
}

const zerar = () => {
    setTimeout(() => {
        imgResposta.style.display = 'none'; // esconde a imagem
        divResposta.textContent = ''; // limpa a resposta
        document.querySelector('button').innerHTML = 'Perguntar';
    }, 5000);
}
