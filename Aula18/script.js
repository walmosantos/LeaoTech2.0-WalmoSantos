function exibirMsgErro() {
    console.log('estamos enfrentando erros, você vai ser redirecionado para outra pag');
}
exibirMsgErro()
//funcção com parametros
    function calcularNum(operacao, num1, num2) {
        switch (operacao) {
            case '+':
            resultado = num1 + num2
        break 
            case '-':
            resultado = num1 - num2
        break 
            case '*':
            resultado = num1 * num2
        break 
            case '/':
            resultado = num1 / num2
        break 

        default:
            console.log('op invalida')
    }

    return resultado     
}

    calcularNum('*', 5,6)


// outras formas de criar funções em js
// função Expressa

    let soma = function(a, b) {
        return a + b
    }
    console.log(`${soma(2,5)}`);

    if(true){
        let nomear = function(nome){

        }
    }

    //arrow function

    // let subtrair = (a, b) => {
    //     return a - b
    // }

    // let subtrair = (a, b) => a + b

    // let msgErro = (codigo) => `erro codigo ${codigo}, aguarde`
    // console.log(subtrair(29,3));
    // console.log(msgErro(500));
    
    // // função com parametros default
    // function saudacao(nome = 'visitante') {
    //     console.log(`ola ${nome}`)
    // }
    // saudacao('Dionizio')

    // //

    // function processar(funcaoCallBack) {
    //     console.log('processando...');
    //     funcaoCallBack()
    // }

    // processar(() => {console.log('lista de usuarios do sistema')})

    // setTimeout(() => {console.log('esperei 2 sec')}, 2000)

    // setTimeout((a,b)=> {
    //     console.log('esperei um tempo')
    // },3600)



    // //1. Crie uma função que receba como parâmetro a altura e peso e retorne o IMC.
    //     //2. crie uma função que receba como parâmetro um nome e uma lista se esse nome tiver até 15 letras adicione ele na lista
    //     let nome = 'Dionizio'
    //     console.log(nome.length)
    //     /*
    //     3.  Crie uma função de validação que receba como parâmetro um array de objetos, o nome de usuário e senha.0 array de objetos deve ser desse tipo:
    //     usuarios = [
    //         {user:'maria', senha:1234, tipo: cliente},
    //         {user:'joao', senha:4567, tipo: visitante},
    //         {user:'jade', senha:3216, tipo: admin}
    //     ]
    //     Se a pessoa acertar o usuário e a senha, a função deve retornar um aviso dizendo o tipo de acesso que o usuário tem.

    //     admin -> acesso total
    //     cliente -> acesso limitado
    //     visitante -> acesso básico



    //     4. Sistema de Pedidos
    //     Crie uma função que receba um array de pedidos:
    //     [
    //     { produto: "Mouse", preco: 50, quantidade: 2 },
    //     { produto: "Teclado", preco: 100, quantidade: 1 }
    //     ]
    //     A função deve:

    //     Calcular o total de cada item (preco * quantidade)
    //     Somar tudo
    //     Se o total for maior que 150 → aplicar 10% de desconto
    //     Retornar o valor final
    //     */

    let usuarios = ['maria', 'Joao', 'ryb']
    usuarios.forEach((user) => {
        console.log(`nome ${user}`);
    })
    
    //função map

    let precos = [200, 30, 93, 67, 69]

    let precosDesconto = precos.map((precos) => {
        let desconto = 0.9 * precos
        return desconto
    })

    console.log(precosDesconto)
    console.log(precos)

    let total = precos.reduce((acumulador, preco) => {
        return acumulador + preco
    }, 0)
    