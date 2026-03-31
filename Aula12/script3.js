let usuario = prompt('Você é gerente ou vendedor? (Digite: gerente ou vendedor)').toLocaleLowerCase();

let descontoMaximo;

if(usuario === 'gerente') {
    descontoMaximo = 50;
    console.log('bem vindo gerente');
} else if (usuario === 'vendedor'){
    descontoMaximo = 30;
    console.log('bem vindo vendedor')
} else {
    console.log('tipo INVALIDO! Digite gerente ou vendedor!')
}


console.log(`Valor antes do desconto = ${preco}`)
console.log(`Valor antes do desconto = ${preco * p/100}`)
console.log(`Valor final do produto = ${preco - (preco * p/100)}`)

