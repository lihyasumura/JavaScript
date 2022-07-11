function calcular () {
    let produto = window.prompt ("Que produto você está comprando?")
    let valor = Number(window.prompt (`Quanto custa o ${produto} que você está comprando?`))
    let deu = Number(window.prompt(`Qual foi o valor que você deu para pagar o ${produto}?`))
    
    let res = deu - valor;

    window.alert (
        `Você comprou ${produto} que custou ${valor.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}.\n` +

        `Deu ${deu.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} em dinheiro e vai receber ${res.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} de troco.\n` +

        `Volte sempre!`
    )
}