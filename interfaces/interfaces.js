"use strict";
function saudarComOla(pessoa) {
    console.log('olá, ' + pessoa.nome);
    // console.log('fale sua idade ' + pessoa.idade)
}
function mudarNome(pessoa) {
    pessoa.nome = 'Joana';
    // pessoa.idade = 21
    // console.log('olá, ' + pessoa.nome);
    // console.log('fale sua idade ' + pessoa.idade)
}
const pessoa = {
    nome: 'joao',
    idade: 27,
    saudar(sobrenome) {
        console.log('Olá, meu nome é ' + this.nome + ' ' + sobrenome);
    }
};
saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);
pessoa.saudar('skywalker');
//Usando interface com classes
class Cliente {
    constructor() {
        this.nome = '';
        this.ultimaCompra = new Date;
    }
    saudar(sobrenome) {
        console.log('Olá meu nome é ' + this.nome + ' ' + sobrenome);
    }
}
let potencia;
potencia = function (base, exp) {
    //Math.pow(3,10)
    //3 ** 10 
    return Array(exp).fill(base).reduce((t, a) => t * a);
};
const meuCliente = new Cliente();
meuCliente.nome = 'Han';
saudarComOla(meuCliente);
meuCliente.saudar('solo');
console.log(meuCliente.ultimaCompra);
console.log(potencia(3, 10));
console.log(potencia(2, 8));
