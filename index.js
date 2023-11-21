function cadastrarCliente(event) {
    event.preventDefault();
    var nomeClienteInput = document.querySelector('#nome_cliente');
    var nascClienteInput = document.querySelector('#nasc_cliente');
    var cpfClienteInput = document.querySelector('#cpf_cliente');
    var generoClienteSelect = document.querySelector('#genero_cliente');
    if (nomeClienteInput && nascClienteInput && cpfClienteInput && generoClienteSelect) {
        var nomeCliente = nomeClienteInput.value;
        var dataNascimento = nascClienteInput.value;
        var cpfCliente = cpfClienteInput.value;
        var generoCliente = generoClienteSelect.value;
        alert(" Cliente Cadastrado!\nNome: ".concat(nomeCliente, "\nData de Nascimento: ").concat(dataNascimento, "\nCPF: ").concat(cpfCliente, "\nG\u00EAnero: ").concat(generoCliente));
    }
    else {
        console.error('Não foi possível encontrar todos os elementos do formulário.');
    }
}
var cadastrarBtn = document.querySelector('#cadastrarBtn');
if (cadastrarBtn) {
    cadastrarBtn.addEventListener('click', cadastrarCliente);
}
