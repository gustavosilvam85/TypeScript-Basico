"use strict";
//string 
let nome = 'joão';
console.log(nome);
console.log(typeof nome);
//numbers
let idade = 27;
console.log(idade);
console.log(typeof idade);
//boolean
let possuiHobbies = false;
// possuiHobbies = 1 
console.log(possuiHobbies);
console.log(typeof possuiHobbies);
//tipos explicitos
//se nao especificar vai ser tratado como tipo "any"
let minhaIdade; // ou any 
minhaIdade = 27;
console.log(typeof minhaIdade);
//array
// o any[] diz que pode ser qualquer coisa portanto que seja um array 
let hobbies = ["cozinhar", "praticar esportes"];
console.log(hobbies[0]);
console.log(typeof hobbies);
hobbies = [100, 200, 300];
console.log(hobbies);
//tuplas
// let lugar: [string,number,string]= ["Av Principal",99]
// console.log(lugar)
// lugar  = ["Rua importante", 1260, "bloco C"]
// console.log(lugar)
//enums
var cor;
(function (cor) {
    cor[cor["cinza"] = 0] = "cinza";
    cor[cor["verde"] = 1] = "verde";
    cor[cor["azul"] = 2] = "azul"; //2
})(cor || (cor = {}));
let minhaCor = cor.azul;
console.log(minhaCor);
console.log(cor.cinza);
//any 
//funciona como funcionaria em JS bom para codigos legados
let carro = 'BMW';
console.log(carro);
carro = { marca: 'BMW', ano: 2019 };
console.log(carro);
