let opcao = parseInt(prompt('Digite a opção que quer executar'))

switch (opcao) {
    case 1:
        alert('Digite seu nome')
        alert('Digite seu email')
        alert('digite sua senha')
        alert('Usuario Criado com sucesso')
    break;

     case 2:
        alert('Digite seu email')
        alert('digite sua senha')
        alert('Login realizado com sucesso')
    break;

    case 3:
        alert('Digite seu email')
        alert('Deseja receber código por email ou SMS?')
        alert('Instruções enviadas')    
        break;
    default:
    console.log('Op. INVALIDA')
}