let dolar = 5.1

let usdInput = document.querySelector("#usd")
let brlInput = document.querySelector("#brl")

usdInput.addEventListener("keyup", () => {
    convert("usd-to-brl")
})

brlInput.addEventListener("keyup", () => {
    convert("brl-to-usd")
})

usdInput.addEventListener("blur", () => {
    usdInput.value = formatCurrency(usdInput.value)
})

brlInput.addEventListener("blur", () => {
    brlInput.value = formatCurrency(brlInput.value)
})

usdInput.value = "1000,00"
convert("usd-to-brl")


// Funções

// Ajusta o valor
function fixValue(value) {
    let fixedValue = value.replace(",", ".")
    let floatValue = parseFloat(fixedValue)
    if(floatValue == NaN) {
        floatValue = 0
    }
    return floatValue
}

function formatCurrency(value) {
    // ajustar o valor
    let fixedValue = fixValue(value)
    // utilizar função de formatar
    let options = {
        useGrouping: false, //nao vai colocar ponto/virgula na milhar ou centena
        minimumFractionDigits: 2  //numero minimo de fracao no digito
    }
    let formatter = new Intl.NumberFormat("pt-BR", options)

    return formatter.format(fixedValue)   
}

// Converte o valor
function convert(type) {
    if(type == "usd-to-brl") {
        // ajustar o valor
        let fixedValue = fixValue(usdInput.value)

        // converter o valor
        let result = fixedValue * dolar
        result = result.toFixed(2)

        // mostra no campo de real
        brlInput.value = formatCurrency(result)
    }

    if(type == "brl-to-usd") {
        // ajustar o valor
        let fixedValue = fixValue(brlInput.value)

        // converter o valor
        let result = fixedValue / dolar
        result = result.toFixed(2)

        // mostra no campo de real
        usdInput.value = formatCurrency(result)
    }
}