let peso = parseFloat(prompt('digite seu peso'))
let altura = parseFloat(prompt('digite sua altura'))
let aux = (peso/(altura*altura))
console.log(aux)

if (aux < 18.5) {
    alert('Abaixo do peso')
}
else if (aux < 25){
    alert('peso normal')
}
else if (aux < 30){
    alert('Sobrepeso')
}
else{
    alert('Obesidade')
}




