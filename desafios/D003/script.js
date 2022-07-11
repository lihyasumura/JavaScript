function calcular() {
    let n = Number(window.prompt ("Digite um número inteiro qualquer."))

    let na = n - 1;
    let nd = n + 1;

    window.alert (
       `O número escolhido foi ${n}!\n` +
       `Antes do número ${n}, temos o número ${na}!\n` +
       `Depois do número ${n}, temos o número ${nd}!`
    )
}