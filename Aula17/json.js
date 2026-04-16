let pessoa = {
    nome: 'joap',
    idade: '34'
}

let pessoa_json = '{"nome": "joap", "idade":25, "trabalhando":true}'
// tipos de dados aceitos no json
/*
strings
number
null
array
boolean
objeto 
*/
console.log(pessoa);
console.log(pessoa_json);

//js para json

let pessoaToJson = JSON.stringify(pessoa)
console.log(pessoa);

//json para js

pessoa_json = JSON.parse(pessoa_json)
console.log(pessoa_json);



function saudacao (){
    console.log('hello world');
}


function saudacaoCompleta(nome, idade){
    console.log(`seja bem vindo ${nome}, vejo que tem ${idade}`);
}
function exibirNomes(listaNomes){
    for(let i = 0; i< listaNomes.length; i++){
        console.log([i]);
    }
}

nomes = ['jessica, let, tha']
exibirNomes(nomes)