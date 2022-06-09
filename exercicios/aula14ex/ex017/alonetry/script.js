function calcular () {
    let num = window.document.getElementById('txtn')
    let tab = window.document.getElementById('seltab')

    if (num.value.length == 0) {
        window.alert ('DIGITE UM NÚMERO!')
    } else {
        let n = Number(num.value)
        tab.innerHTML = ''
        for (let c = 1; c <= 10; c++) {
            let item = window.document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}