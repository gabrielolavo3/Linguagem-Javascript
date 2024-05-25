const input = document.querySelector('.entrada-cep')
const btn = document.querySelector('.pesquisa')
const endereco = document.querySelector('#endereco')
const texto = document.querySelector('#mensagem')

btn.addEventListener('click', async () => {

    const cep = input.value

    if (cep.length != 8) {
        alert('CEP inválido!')
        return
    }

    const dados = await fetch(`https://viacep.com.br/ws/${cep}/json/`).then(retorno => retorno.json())

    if (dados.erro == true) {
        alert ('CEP não localizado!')
        return
    }

    console.log(dados)
    texto.textContent = 'Endereço localizado!'
    endereco.textContent = `${dados.logradouro} - ${dados.bairro} | ${dados.localidade} (${dados.uf})`
})