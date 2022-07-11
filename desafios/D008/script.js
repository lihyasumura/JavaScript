function calcular() {
    let produto = window.prompt(`Qual é o produto que você está comprando?`)
    
    let preco = Number.parseFloat(window.prompt(`Qual é o preço de ${produto}?`))
    let p = preco.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
    
    let desconto = preco * 0.1
    let d = desconto.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})

    let pagar = preco - desconto
    let pa = pagar.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})

    res.innerHTML =

    `<strong><p>Calculando desconto de 10% para ${produto}</strong></p>` +
    
    `<p>O preço original era ${p}.</p>` +
    
    `<p>Você acaba de ganhar ${d} de desconto (-10%)!</p>` +
    
    `<p>No fim, você vai pagar ${pa} no produto ${produto}.</p>` +

    `<p>Parabéns pela compra!</p>`
}