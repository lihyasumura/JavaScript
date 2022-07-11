function calcular() {
    let nome = window.prompt(`Qual é o nome do aluno?`)
    
    let nota1 = Number(window.prompt(`Primeira nota de ${nome}:`))
    let n1 = nota1.toLocaleString()
    
    let nota2 = Number(window.prompt(`Segunda nota de ${nome}:`))
    let n2 = nota2.toLocaleString()
    
    let media = (nota1 + nota2) / 2
    let m = media.toLocaleString()

    res.innerHTML =
    `<strong><p>Analisando a situação de ${nome}.</strong></p>`

    res.innerHTML +=
    `<p>Com as notas ${n1} e ${n2}, a <strong>média é de ${m}</strong>.</p>`

    if (media > 6) {
        res.innerHTML +=
        `<p>Com média acima de 6,0, o aluno está <strong>APROVADO!</strong></p>`
        document.getElementsByTagName('strong')[3].style.backgroundColor = '#00800091'
        document.getElementsByTagName('strong')[3].style.color = 'green'
    } else if (media <= 6 && media >=3){
        res.innerHTML +=
        `<p>Com média entre 3,0 e 6,0, o aluno está em <strong>RECUPERAÇÃO!</strong></p>`
        document.getElementsByTagName('strong')[3].style.backgroundColor = '#ffff1f8a'
        document.getElementsByTagName('strong')[3].style.color = 'orange'
    } else {
        res.innerHTML +=
        `<p>Com a média abaixo de 3,0, o aluno está <strong>REPROVADO!</strong></p>`
        document.getElementsByTagName('strong')[3].style.backgroundColor = '#ff00008f'
        document.getElementsByTagName('strong')[3].style.color = 'darkred'
    }
}