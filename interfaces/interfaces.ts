//interface
interface Humano {
    nome:String,
    idade:Number
    [prop:string]: any
    saudar(sobrenome:string): void
}

function saudarComOla(pessoa: Humano ){
    console.log('olá, ' + pessoa.nome)
    // console.log('fale sua idade ' + pessoa.idade)
}
function mudarNome(pessoa: Humano ){
    pessoa.nome = 'Joana'
    // pessoa.idade = 21
    // console.log('olá, ' + pessoa.nome);
    // console.log('fale sua idade ' + pessoa.idade)
}

const pessoa: Humano = {
    nome: 'joao',
    idade: 27,
    saudar(sobrenome: String){
        console.log('Olá, meu nome é ' +this.nome + ' ' + sobrenome)
    }
}

saudarComOla(pessoa)
mudarNome(pessoa)
saudarComOla(pessoa)
pessoa.saudar('skywalker')

//Usando interface com classes
class Cliente implements Humano{
    nome: String = ''
    ultimaCompra: Date = new Date
    saudar(sobrenome: string){
        console.log('Olá meu nome é ' +this.nome + ' ' + sobrenome)
    }
}


//Interface função 
interface FuncaoCalculo {
    (a:number,b:number):number //recebe 2 parametros do tipo number e retorna um do tipo number 
}

let potencia :FuncaoCalculo

potencia = function(base:number, exp:number):number {
    //Math.pow(3,10)
    //3 ** 10 
    return Array(exp).fill(base).reduce((t,a) => t * a)
    
}


const meuCliente =  new Cliente()
meuCliente.nome = 'Han'
saudarComOla(meuCliente)
meuCliente.saudar('solo')
console.log(meuCliente.ultimaCompra)
console.log(potencia(3,10))
console.log(potencia(2,8))