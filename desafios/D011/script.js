function verificar() {
    let ano = Number(window.prompt(`Qual é o ano que você quer verificar?`))

    res.innerHTML =
    `<strong><p>Analisando o ano de ${ano}...</strong></p>`

    if (ano % 4 == 0) {
        res.innerHTML =
        `<p>O ano de ${ano} <span class = "green">É BISSEXTO!</span> &#9989</p>`
    } else {
        res.innerHTML =
        `<p>O ano de ${ano} <span class = "red">NÃO É BISSEXTO!</span> &#10060</p>`
    }
}