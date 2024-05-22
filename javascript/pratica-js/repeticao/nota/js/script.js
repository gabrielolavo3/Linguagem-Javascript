/* 
Criar um programa que peça uma nota, entre zero e dez. 
Exibir uma mensagem caso o valor seja inválido e continuar pedindo até que o usuário informe um valor válido. */

nota = Number(prompt("Digite a nota: "))

while (nota < 0 || nota > 10) {
    alert('Nota inválida!')
    nota = Number(prompt("Digite a nota novamente: "))
}

alert('Nota aceita!')
