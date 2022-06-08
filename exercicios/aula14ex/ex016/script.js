function contar() {
    let inicio = window.document.getElementById('txts')
    let fim = window.document.getElementById('txtf')
    let res = window.document.getElementById('res')
    let passo = window.document.getElementById('txtp')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
        //window.alert (`[ERRO] Faltam dados!`)
        
    }  else {
        res.innerHTML = 'Contando...<br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1!')
            p = 1
        }
        if (i < f) {
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{27A1} ` 
        } 
        } else {
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{27A1}`
            }
        }
        res.innerHTML += `\u{1F51A}`
    }
}