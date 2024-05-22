/* 
Ler um nome de usuário e a sua senha e não aceitar a senha igual ao nome do usuário, 
mostrando uma mensagem de erro e voltando a pedir as informações. */

nomeUsuario = prompt("Cadastre o nome de usuário: ")
senha = prompt("Cadastre a senha do perfil:")

while(senha == nomeUsuario) {
    alert ('Senha e nome de usuário coincidem!')
    nomeUsuario = prompt("Cadastre o nome de usuário: ")
    senha = prompt("Cadastre a senha do perfil:")
}

console.log("Usuário e senha cadastrado!")
