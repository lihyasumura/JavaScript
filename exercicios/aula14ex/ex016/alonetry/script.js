function contar() {
    let inicio = window.document.getElementById('txts')
    let fim = window.document.getElementById('txtf')
    let passo = window.document.getElementById('txtp')
    let res = window.document.getElementById('res')
    
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = `[ERRO] DIGITE UM NÚMERO!`
    } else {
        res.innerHTML = 'Contando...<br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if ( p <= 0) {
            res.innerHTML = `<p>O passo precisa ser maior que 1!<br></p>
            <p>Considerando passo 1:<br></p>`
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