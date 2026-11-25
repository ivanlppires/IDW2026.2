const form = document.querySelector('#cadastro');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    /* VALIDA NOME */
    const nome = form.nome.value;
    const nomeVetor = nome.split(' ');
    if (form.nome.value == ''
        || nomeVetor.length < 2
        || nomeVetor[1] == ''
        || /[0-9]/.test(nome)) {
        alert('Por favor, preencha o nome completo corretamente');
        form.nome.value = '';
        form.nome.focus();
        return;
    }
    /* VALIDA DATA DE NASCIMENTO */
    const dataNascimento = form.nascimento.value;
    if (dataNascimento == ''
        || !(/^(?:(?:0[1-9]|1\d|2[0-8])\/(?:0[1-9]|1[0-2])|(?:29|30)\/(?:0[13-9]|1[0-2])|31\/(?:0[13578]|1[02])|29\/02(?=\/(?:\d{2}(?:0[48]|[2468][048]|[13579][26])|(?:[02468][048]|[13579][26])00)$))\/(?:19|20)\d{2}$/.test(dataNascimento))
    ) {
        alert('Por favor, informe a data de nascimento corretamente');
        form.nascimento.value = '';
        form.nascimento.focus();
    }
    /* VALIDA EMAIL */
    const email = form.email.value;
    if(email == '' ||
        !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
    ) {
        alert('Por favor, informe o email corretamente');
        form.email.value = '';
        form.email.focus();
    }
});