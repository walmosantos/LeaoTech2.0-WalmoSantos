let opcao = parseInt(prompt('Digite a opção que quer executar'))

switch (opcao) {
    case 1:
    console.log('Cadastre o usuario')
    break;

     case 2:
    console.log('Listar usuario')
    break;

    case 3:
    console.log('Sair do sistema')
    break;

    default:
    console.log('Op. INVALIDA')
}