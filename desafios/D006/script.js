function converter() {
    let temperatura = Number(window.prompt(`Digite uma temperatura em °C.`))

    let kelvin = temperatura + 273.15
    let k = kelvin.toLocaleString()
    let fahrenheit = temperatura * 1.8 + 32
    let f = fahrenheit.toLocaleString()

    res.innerHTML =
    `<strong><p>A temperatura de ${temperatura}°C corresponde a...</p></strong>` +
    `<p>${k}°K (Kelvin).</p>` +
    `<p>${f}°F (Fahrenheit).</p>`
}