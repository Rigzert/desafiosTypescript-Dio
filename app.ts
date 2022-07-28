
//DESAFIO 1

let employee = {
    code: 10,
    name: "John"
};

let employee1 : {code:number,name:string}
employee.code = 10;
employee.name = "John";





// DESAFIO 2

// Como podemos melhorar o esse código usando TS? 

interface Pessoa {
    nome:string,
    idade:number,
    profissao:string
}

function pasarPessoa(pess:Pessoa){
    return pess
}
let pessoa1 = {
    nome : "maria",
    idade : 29,
    profissao : "atriz"
};


let pessoa2 = {
    nome : "roberto",
    idade : 19,
    profissao : "Padeiro"
}


let pessoa3 = {
    nome: "laura",
    idade: 32,
    profissao: "Atriz"
}

let pessoa4 = {
    nome: "carlos",
    idade :19,
    profissao:"padeiro"
}
console.log(pasarPessoa(pessoa4))


//DESAFIO 3

// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?

let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma');
let campoSaldo = document.getElementById('campo-saldo') as HTMLInputElement;

campoSaldo.innerHTML = 0

function somarAoSaldo(soma:Number) {
    campoSaldo.innerHTML += soma;
}

function limparSaldo() {
    campoSaldo.innerHTML = '';
}

botaoAtualizar.addEventListener('click', function () {
    somarAoSaldo(soma.value);
});

botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});

