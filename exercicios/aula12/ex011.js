var idade = 65
console.log(`Você tem ${idade} anos.`)
if (idade < 16) {
    console.log(`Não vota.`)
} else if (idade < 18 || idade > 65) { // FAZENDO DA FORMA A ESQUEDA, ECONOMIZAMOS A ESCRITA DE UM BLOCO
    
    console.log('Voto opcional')
    
    /* FAZENDO A ESCRITA ABAIXO, TEREMOS MAIS TRABALHO

    if (idade >= 16 && idade < 18) {
        console.log('Voto opcional')
    } else {
        console.log('Voto obrigatório.')
    } */
} else {
    console.log('Voto obrigatório.')
}