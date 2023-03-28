// Função para validar o CPF
function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g,'');
    if(cpf == '') return false;
    // Elimina CPFs inválidos conhecidos
    if (cpf.length != 11 ||
        cpf == "00000000000" || 
        cpf == "11111111111" || 
        cpf == "22222222222" || 
        cpf == "33333333333" || 
        cpf == "44444444444" || 
        cpf == "55555555555" || 
        cpf == "66666666666" || 
        cpf == "77777777777" || 
        cpf == "88888888888" || 
        cpf == "99999999999")
            return false;
    // Validação do primeiro dígito verificador
    add = 0;
    for (i = 0; i < 9; i ++)
        add += parseInt(cpf.charAt(i)) * (10 - i);
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11)
        rev = 0;
    if (rev != parseInt(cpf.charAt(9)))
        return false;
    // Validação do segundo dígito verificador
    add = 0;
    for (i = 0; i < 10; i ++)
        add += parseInt(cpf.charAt(i)) * (11 - i);
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11)
        rev = 0;
    if (rev != parseInt(cpf.charAt(10)))
        return false;
    return true;
}

// Seleciona o formulário e o campo de resultado
const formulario = document.querySelector('form');
const resultado = document.querySelector('#resultado');

// Adiciona um ouvinte de evento para o envio do formulário
formulario.addEventListener('submit', function(evento) {
    evento.preventDefault(); // Evita o envio do formulário
    const cpf = formulario.querySelector('#cpf').value; // Obtém o valor do campo de CPF
    if (validarCPF(cpf)) {
        resultado.textContent = "CPF valido"; // Exibe a mensagem de CPF válido
        resultado.style.color = "#4caf50"; // Define a cor do texto para verde
    } else {
        resultado.textContent = "CPF invalido"; // Exibe a mensagem de CPF inválido
        resultado.style.color = "#f44336"; // Define a cor do texto para vermelho
    }
});
