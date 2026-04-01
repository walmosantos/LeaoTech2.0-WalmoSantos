let valor = parseFloat(prompt('digite o valor da compra'))
let user = prompt('Digite se você é vip')

if (valor >= '1000' || user === "sou vip"){
    alert('Parabens, você tem frete grátis')
} else {
    alert('Requisitos de frete não alcançados')
}