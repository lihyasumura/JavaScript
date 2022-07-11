function calcular() {
    let nome = window.prompt(`Qual é o nome do funcionário?`)
    
    let ganha = Number(window.prompt(`Qual é o salário de ${nome}?`))
    let g = ganha.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
    
    let porcentagem = Number(window.prompt(`O saláro de ${nome} vai ser reajustado em qual porcentagem?`))
    
    let ganhara = (ganha * porcentagem)
/ 100
    let g2 = ganhara.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
    
    let novo = ganhara + ganha
    let n = novo.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})

    res.innerHTML =
    `<strong><p>${nome} recebeu um aumento salarial!</strong></p>` +

    `<p>O salário atual era de ${g}.</p>` +

    `<p>Com um aumento de ${porcentagem}%, o salário vai aumentar ${g2} no próximo mês.
    </p>` +
    
    `<p>E a partir daí, ${nome} vai passar a ganhar ${n}.</p>`
}