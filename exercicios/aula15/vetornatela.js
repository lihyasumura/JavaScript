let valores = [8, 1, 7, 4, 2, 9]
valores.sort()
/*

console.log (valores)
// MOSTRA TUDO EM UMA LINHA SÓ.

O JEITO ABAIXO É MUITO TRABALHOSO... IMAGINE SE O ELEMENTO TIVER 200 ÍNDICES!

console.log (valores[0])
console.log (valores[1])
console.log (valores[2])
console.log (valores[3])
console.log (valores[4])
console.log (valores[5])

// SIMPLIFICANDO O CÓDIGO ACIMA FICARIA...

for (let pos = 0; pos < valores.length; pos++) {
    console.log (`A posição ${pos} tem o valor ${valores[pos]}.`)
}

*/

// SIMPLIFICANDO MAIS AINDA... LEMBRANDO QUE O FOR ABAIXO SÓ FUNCIONA PARA ARRAYS.

for (let pos in valores) {
    console.log (`A posição ${pos} tem o valor de ${valores[pos]}.`)
}