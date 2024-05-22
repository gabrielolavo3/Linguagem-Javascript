// Criar um programa que calcula o fatorial de um número inteiro fornecido pelo usuário

"use strict"

let valor,
    fatorial = 1,
    control = 1

valor = Number(prompt(`Digite um valor para o fatorial`))

while (control <= valor) {
    fatorial*=control
    control++
}

console.log(fatorial)
