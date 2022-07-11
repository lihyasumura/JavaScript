function converter() {
    let distancia = Number(window.prompt (`Digite uma distância em metros (m)!`))

    let km = distancia / 1000;
    let kmo = km.toLocaleString()
    let hm = distancia / 100;
    let hmo = hm.toLocaleString()
    let dam = distancia / 10;
    let damo = dam.toLocaleString()
    let dm = distancia * 10;
    let dmo = dm.toLocaleString()
    let cm = distancia * 100;
    let cmo = cm.toLocaleString()
    let mm = distancia * 1000;
    let mmo = mm.toLocaleString()

    res.innerHTML = 
    `<strong><p>A distância de ${distancia.toLocaleString()} metros, corresponde a...</strong></p>` +
    `<p>${kmo} quilômetros (Km).` +
    `<p>${hmo} hectômetro (Hm).` +
    `<p>${damo} decâmetro (Dam).` +
    `<p>${dmo} decímetro (dm).` +
    `<p>${cmo} centímetro (cm).` +
    `<p>${mmo} milímetro (mm).`
}