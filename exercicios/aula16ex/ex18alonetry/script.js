let num = window.document.getElementById('fnum')
let lista = window.document.getElementById('flista')
let res = window.document.getElementById('res')
let valores = []

function valido(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function nalista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (valido(num.value) && !nalista(num.value, valores)) {
        valores.push(Number(num.value))
    let item = window.document.createElement('option')
        item.text = `Número ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert ('NÚMERO INVÁLIDO OU JÁ ADICIONADO!')
    }
        num.value = ''
        num.focus()
}

function finalizar() {
    let total = valores.length
    let maior = valores[0]
    let menor = valores [0]
    soma = 0
    media = 0

    for (let pos in valores) {
        soma += valores [pos]
        if (valores[pos] > maior) {
            maior = valores[pos]
        } if (valores[pos] < menor) {
            menor = valores[pos]
        }
    }
    media = soma / total

    res.innerHTML = ''
    res.innerHTML = `<p>Ao todo, ${total} números foram adicionados.</p>`
    res.innerHTML += `<p>O maior de todos os números é ${maior}.</p>`
    res.innerHTML += `<p>O menor de todos os números é ${menor}.</p>`
    res.innerHTML += `<p>A soma de todos os números é ${soma}.</p>`
    res.innerHTML += `<p>A média de todos os números é ${media}.</p>`
}