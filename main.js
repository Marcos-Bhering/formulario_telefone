const form = document.getElementById('form-formulario');
const telefone =[];
const nome =[];
let linhas = '';

const spanValido = '<span class="resultado valido">Valido</span>';
const spanInvalido = '<span class="resultado invalido">Invalido</span>';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizarFormulario();
});

function adicionaLinha(){
    const inputNome = document.getElementById('Nome');
    const inputTelefone = document.getElementById('telefone');

    if(telefone.includes(inputTelefone.value)){// não consigo fazer o do nome, para não repetir
        alert(`O número: ${inputTelefone.value} já foi utilizado`);

    }else{
        telefone.push(inputTelefone.value); 
        nome.push(inputNome.value);

    let linha = '<tr>'
    linha += `<td>${inputNome.value}</td>`;
    linha +=`<td>${inputTelefone.value}</td>`;
    linha += `</tr>`

    linhas += linha
    
    }
    inputNome.value = '';
    inputTelefone.value = '';

    console.log('Depois de redefinir:'); 
    console.log('Nome:', inputNome.value); 
    console.log('Telefone:', inputTelefone.value);
}

function atualizarFormulario(){
    const corpoFormulario = document.querySelector('tbody');
    corpoFormulario.innerHTML = linhas;
}

