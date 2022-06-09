let num = [5, 8, 2, 9, 3]
num.push(1)
// coloca o valor no final da fila
// a ordem do sort e do push influenciará no desenvolvimento do programa. Se sort vier primeiro e depois o push, ele colocará em ordem e depois adicionará o valor pedido no final da fila. MUITO CUIDADO!

//num[3] = 4
// Adiciona o valor 4 no elemento de índice 3.

num.sort()
// coloca os valores em ordem crescente.

console.log (`Nosso vetor é ${num}.`)
// ou console.log (num) - Assim aparecerá [5, 8, 2, 9, 3].

console.log (`O vetor tem ${num.length} posições.`)
//num.length mostra quantos elementos existem dentro do vetor.
//console.log (`num[n.º do elemento]`) - O programa irá mostrar qual o valor dentro do índice escolhido.

console.log (`O primeiro valor do vetor é ${num[0]}.`)
// (`num[n.º do elemento]`) - O programa irá mostrar qual o valor dentro do índice escolhido.

let pos = num.indexOf(8)
if (pos == -1) {
    console.log (`O valor não foi encontrado!`)
} else {
    console.log (`O valor 8 está na posição ${pos}.`)
// COMANDO QUE PERGUNTA AO JS EM QUE ÍNDICE SE ENCONTRA O VALOR 8.
}