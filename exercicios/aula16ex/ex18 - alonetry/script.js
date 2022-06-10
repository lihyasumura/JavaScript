let num = window.document.getElementById('fnum')
let lista = window.document.getElementById('flista')
let res = window.document.getElementById('res')
let valores = []


function adicionar() {
    if (Number(num.value) == 0 || Number(num.value > 100)) {
    window.alert ('DIGITE UM NÚMERO DE 1 A 100!')
} else {
    let n = Number(num.value)
    lista.innerHTML = ''
    let item = window.document.createElement('option')
            item.text = `O número ${n} foi inserido.`
            item.value = `lista${n}`
            lista.appendChild(item)
        }
        valores.push(n)
    }