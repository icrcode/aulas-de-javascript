function validarFormulario() {
    const nome = document.getElementById('nome').value.trim();
    const cpf = document.getElementById('cpf').value.trim();
    const idade = parseInt(document.getElementById('idade').value, 10);
    const experiencia = parseInt(document.getElementById('experiencia').value, 10);

    if (!nome) {
        alert('Por favor, preencha o nome.');
        return;
    }

    if (!cpf || cpf.length !== 11 || isNaN(cpf)) {
        alert('Por favor, insira um CPF válido com 11 dígitos.');
        return;
    }

    if (isNaN(idade) || idade < 18) {
        alert('A idade deve ser um número maior ou igual a 18.');
        return;
    }

    if (isNaN(experiencia) || experiencia < 0) {
        alert('Os anos de experiência devem ser um número maior ou igual a 0.');
        return;
    }

    alert('Formulário enviado com sucesso!');
}