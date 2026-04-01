let age = prompt('Digite sua idade')
let conv = prompt('Você tem convite?')
    if (age < '16'){
        alert('Entrada proibida')
    } else if (age >= '16' && conv == 'não'){
        alert('Você precisa de convite')
    } else {
        alert('Entrada liberada')
    }
