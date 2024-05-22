// Gerar a tabuada de 1 a 10 ao ler um número inteiro fornecido pelo usuário

"use strict"

let valor,
    control

valor = Number(prompt("Digite um número para exibir a tabuada"))

for (control = 1; control <= 10; control++) {
    console.log (`${valor} x ${control} = ${valor*control}`)
}
