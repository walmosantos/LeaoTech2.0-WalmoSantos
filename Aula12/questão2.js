let n1 = parseFloat(prompt('digite a 1° nota'))
let n2 = parseFloat(prompt('digite a 2° nota'))
let n3 = parseFloat(prompt('digite a 3° nota'))
let aux = ((n1 + n2 + n3)/3)
alert(aux) 

if (aux < 4){
    alert('reprovado')
}
else if (aux < 7) {
    alert('Recuperação')
}
else{
    alert('aprovado')
}