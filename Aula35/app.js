const prompt = require('prompt-sync') ()
const bcrypt = require('bcrypt')
const { createClient } = require('@supabase/supabase-js')
require('dotenv').config()

const supabase = createClient (
    process.env.SUPABASE_URL,
    process.env.SUPABASE_KEY
)

async function inserirAutor() {
    let nome = prompt('Digite o nome do autor: ')
    let nacionalidade = prompt("Digite a nacionalidade: ")

    let novoAutor = {
        nome:nome, //direita esta no banco e esquerda na função
        nacionalidade:nacionalidade
    }
    const {data, error} = await supabase.from('biblioteca_autor').insert(novoAutor).select()
    console.log(data)
    console.log(error)
}
//inserirAutor()

async function inserirLivro() {
    let titulo = prompt('Digite o none do livro: ')
    let quantidade = parseInt(prompt('Insira a quantidade de livros: '))
    let genero = prompt('Insira o genero: ')
    let id_autor = parseInt(prompt('insira o id do livro: '))

    let novoLivro = {
        titulo:titulo,
        quantidade:quantidade,
        genero:genero,
        id_autor:id_autor
    }
     const {data, error} = await supabase.from('biblioteca_livro').insert(novoLivro).select()
    console.log(data)
    console.log(error)

}
//inserirLivro()

async function inserirUser() {
    let nome = prompt('Insira seu nome: ')
    let cpf = prompt('Insira seu cpf: ')
    let telefone = prompt('Insira seu telefone: ')
    let endereco = prompt('Insira seu endereço: ')
    let senha = prompt('Insira sua senha: ')
    let tipo = prompt('Insira seu tipo: ')

    const saltRounds = 10

    const senhaCrip = await bcrypt.hash(senha, saltRounds)

    let novoUser = {
        nome:nome,
        cpf:cpf,
        telefone:telefone,
        endereco:endereco,
        senha:senhaCrip,
        tipo:tipo
    }

      const {data, error} = await supabase.from('biblioteca_usuarios').insert(novoUser).select()
    console.log(data)
    console.log(error)
    error ? console.log(error):console.log('dados inseridos com sucesso')
    
    
}

//inserirUser()

async function inserirPerfil() {
    let foto = prompt('Insira sua foto:')
    let bio = prompt('Insira sua bio: ')
    let id_usuario = (prompt('insira o id: '))

    let novoPerfil = {
        foto:foto,
        bio:bio,
        id_usuario
    }

      const {data, error} = await supabase.from('biblioteca_perfil').insert(novoPerfil).select()
    console.log(data)
    console.log(error)
}

//inserirPerfil()

async function inserirEmprestimo() {
    let id_livro = prompt('Insira o ID do livro desejado:')
    let id_usuario = prompt('Insira seu ID: ')
    let data_entrega = prompt('Insira a data de entrega: ')
    let data_devolucao = prompt('Insira a data de devolução: ')

    let novoEmprestimo = {
        id_livro:id_livro,
        id_usuario:id_usuario,
        data_entrega:data_entrega,
        data_devolucao:data_devolucao
    }

      const {data, error} = await supabase.from('biblioteca_emprestimo').insert(novoEmprestimo).select()
    console.log(data)
    console.log(error)
}
//inserirEmprestimo()

async function listarLivros() {
    const {data, error} = await supabase.from("biblioteca_livros").select('*')
    console.log(data)
    console.log(error)

    data.forEach(livro => {
        console.log(`Titulo: ${livro.titulo}, Gênero: ${livro.genero}`);
        
    })
}

/*
eq() -> igual
neq() -> diferente
gt() -> maior que
lt() -> menor que
lte() -> menor ou igual
gte() -> maior ou igual
like() -> parecido
ilike() -> parecido (não case sentive)
order() -> ordenar()
limit() -> limitar resultado
*/


// buscarLivro('A cabana')

async function atualizarAutor(id) {
    let nome = prompt('Digite o novo nome: ')
    let nacionalidade = prompt('Digite a nova nacionalidade')
    let atualizacao = {
        nome:nome,
        nacionalidade:nacionalidade
    }
    const {data, error} = await supabase.from('biblioteca_autor').update(atualizacao).eq('id',id).select()
    if (error){
        console.log(error)
    }
    console.log(data)
}
// atualizarAutor(2)

async function deletarAutor(id) {
    const {data, error} = await supabase.from('biblioteca_autor').delete().eq('id',id).select()
    if (error){
        console.log(error)
    }
    console.log(data)
}
//deletarAutor(3)

async function logarSistema() {
    console.log('======== Login =========')
    const cpf = prompt('Digite seu cpf: ')
    const senha = prompt('Digite sua senha:')

    const {data, error} = await supabase.from('biblioteca_usuarios').select('*').eq('cpf',cpf)

    if(error) {
        console.log('Usuario não encontrado')
        return
    }

    const senhaCorreta = await bcrypt.compare(senha,data.senha)
    console.log('Resposta', data);
    console.log('Senha correta', senhaCorreta);

    
}

async function menu() {
    console.log('============ MENU ===========')
    console.log('1 - cadastrar usuario')
    console.log('2 - Logar no sistema')

    const opcao = prompt('Escolha uma  opção: ')

    switch (opcao) {
        case '1':
            inserirUser()
            break;

         case '2':
            logarSistema()
            break;
    
        default:
            break;
    }
}

menu()