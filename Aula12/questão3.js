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

let desconto = parseFloat(prompt(`Qual a porcentagem do desconto? (Máximo ${descontoMaximo}%)`));

if (desconto < 0 || desconto > descontoMaximo){
    console.log(`Desconto invalido! Deve ser entre 0 e ${descontoMaximo}%`);
} else {
    let preco = parseFloat(prompt('Qual o valor do produto?'));

    if (preco < 0 || isNaN(preco)) {
        console.log('preço invalido');
    } else {
        let valorDesconto = preco * desconto / 100;
        let precoFinal = preco - valorDesconto;

        console.log('--- Resumo ---');
        console.log(`Preço original: R${preco.toFixed(2)}`);
        console.log(`Desconto (${desconto}%): R$${valorDesconto.toFixed(2)}`);
        console.log(`Preço final: R$${precoFinal.toFixed(2)}`);
    }

}


