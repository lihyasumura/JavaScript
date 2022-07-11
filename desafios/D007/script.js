let cotacao = Number.parseFloat(window.prompt (`Antes de mais nada, quando está a cotação do dólar hoje?`))

function converter() {
    let carteira = Number.parseFloat(window.prompt(`Quantos R$ você tem na carteira?`))
    
    let c = carteira.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
    
    let dolares = carteira / cotacao
    
    let d = dolares.toLocaleString('pt-br',{style: 'currency', currency: 'USD'})

    res.innerHTML = `Com ${c} você poderá comprar ${d}.`
}