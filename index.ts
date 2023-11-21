
function cadastrarCliente(event: Event): void {
    event.preventDefault(); 

    const nomeClienteInput: HTMLInputElement | null = document.querySelector('#nome_cliente');
    const nascClienteInput: HTMLInputElement | null = document.querySelector('#nasc_cliente');
    const cpfClienteInput: HTMLInputElement | null = document.querySelector('#cpf_cliente');
    const generoClienteSelect: HTMLSelectElement | null = document.querySelector('#genero_cliente');


    if (nomeClienteInput && nascClienteInput && cpfClienteInput && generoClienteSelect) {
       
        const nomeCliente: string = nomeClienteInput.value;
        const dataNascimento: string = nascClienteInput.value;
        const cpfCliente: string = cpfClienteInput.value;
        const generoCliente: string = generoClienteSelect.value;

      
        alert(` Cliente Cadastrado!\nNome: ${nomeCliente}\nData de Nascimento: ${dataNascimento}\nCPF: ${cpfCliente}\nGênero: ${generoCliente}`);
    } else {
        console.error('Não foi possível encontrar todos os elementos do formulário.');
    }
}


const cadastrarBtn: HTMLButtonElement | null = document.querySelector('#cadastrarBtn');
if (cadastrarBtn) {
    cadastrarBtn.addEventListener('click', cadastrarCliente);
}
