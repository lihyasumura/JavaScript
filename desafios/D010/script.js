function calcular() {
    let a = Number.parseInt(window.prompt(`Qual é o valor de a?`))
    let b = Number.parseInt(window.prompt(`Qual é o valor de b?`))
    let c = Number.parseInt(window.prompt(`Qual é o valor de c?`))
    let delta = b ** 2 - 4 * 3 * 2

    res.innerHTML =
    `<strong><p>Resolvendo Bhaskara</strong></p>` +
    
    `<p>A equação atual é ${a}x² + ${b}x + ${c} = 0</p>` +
    
    `<p>O cálculo realizado será &Delta; = ${b}² - 4 x ${a} x ${c}.</p>` +

    `O valor calculado foi &Delta; = ${delta}.`
}