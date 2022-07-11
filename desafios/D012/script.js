function verificar() {
    let anterior = Number(window.prompt(`Qual era o preço anterior do produto?`))
    let a1 = anterior.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
    
    let atual = Number(window.prompt(`Qual é o preço atual do produto?`))
    let a2 = atual.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})

    res.innerHTML =
    `<strong><p>Analisando os valores informados</strong></p>` +
    
    `<p>O produto custava ${a1} e agora custa ${a2}.</p>`

    
    if (anterior < atual) {
        let subiu = atual - anterior
        let s = subiu.toLocaleString('pt-br', {style:'currency', currency: 'BRL'})
        
        res.innerHTML +=
        `<p>Hoje o produto está mais caro.</p>`
        
        res.innerHTML +=
        `<p>O preço subiu ${s} em relação ao preço anterior.</p>`
        
        let percentual = Number.parseFloat((atual - anterior) / anterior * 100)
        let p = percentual.toLocaleString()
        
        res.innerHTML +=
        `<p>Uma variação de ${p}% pra cima.</p>`

    } else {
        let desceu = anterior - atual
        let d = desceu.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})

        res.innerHTML +=
        `<p>Hoje o produto está mais barrato.</p>`

        res.innerHTML += 
        `<p>O preço diminuiu ${d} em relação ao preço anterior.</p>`

        let percentual2 = Number.parseFloat((anterior - atual) / anterior * 100)
        let p2 = percentual2.toLocaleString()

        res.innerHTML += 
        `<p>Uma variação de ${p2}% pra baixo.</p>`
    }
}