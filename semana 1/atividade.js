
const prompt = require("prompt-sync")();

// QUESTÃO 1 - AVALIAÇÃO DE RISCO DE CRÉDITO

function avaliarRiscoDeCredito(rendaMensal, dividaAtual) {
    rendaMensal = parseFloat(rendaMensal);
    dividaAtual = parseFloat(dividaAtual);

    let TE = (dividaAtual / rendaMensal) * 100;

    if (TE < 10) {
        return "Risco Baixo";
    } else if (TE < 30) {
        return "Risco Moderado";
    } else {
        return "Risco Alto";
    }
}

console.log("=== AVALIAÇÃO DE RISCO DE CRÉDITO ===");

let renda = prompt("Digite sua renda mensal: ");
let divida = prompt("Digite sua dívida atual: ");

let resultado = avaliarRiscoDeCredito(renda, divida);

console.log(`Seu risco de crédito é: ${resultado}`);


// QUESTÃO 2 - MANIPULAÇÃO DE ARRAYS

console.log("\n=== MANIPULAÇÃO DE ARRAYS ===");

let numeros = [];
let quantidade = parseInt(prompt("Quantos números deseja informar? "));

for (let i = 0; i < quantidade; i++) {
    let numero = parseFloat(prompt(`Digite o número ${i + 1}: `));
    numeros.push(numero);
}

console.log(`Números digitados: ${numeros}`);
console.log(`Maior valor: ${Math.max(...numeros)}`);
console.log(`Menor valor: ${Math.min(...numeros)}`);

let dobro = numeros.map(numero => numero * 2);

console.log(`Dobro dos números: ${dobro}`);

let maioresQueCinco = numeros.filter(numero => numero > 5);

console.log(`Números maiores que 5: ${maioresQueCinco}`);


// QUESTÃO 3 - CRIAÇÃO E MANIPULAÇÃO DE OBJETO

console.log("\n=== MANIPULAÇÃO DE OBJETO ===");

let carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2020,

    exibirInfo: function() {
        console.log(
            `Marca: ${this.marca} | Modelo: ${this.modelo} | Ano: ${this.ano}`
        );
    }
};

carro.exibirInfo();

carro.cor = "Preto";
carro.ano = 2025;

console.log("Objeto carro atualizado:");
console.log(carro);


// QUESTÃO 4 - ORIENTAÇÃO A OBJETOS (OPCIONAL)

console.log("\n=== CLASSE LIVRO ===");

class Livro {
    constructor(titulo, autor, ano) {
        this.titulo = titulo;
        this.autor = autor;
        this.ano = ano;
    }

    detalhes() {
        console.log(
            `Livro: ${this.titulo} | Autor: ${this.autor} | Ano: ${this.ano}`
        );
    }
}

let livro1 = new Livro("Dom Casmurro", "Machado de Assis", 1899);
let livro2 = new Livro("O Pequeno Príncipe", "Antoine de Saint-Exupéry", 1943);

livro1.detalhes();
livro2.detalhes();


// QUESTÃO 5 - PALÍNDROMO E MANIPULAÇÃO DE STRING

console.log("\n=== VERIFICAR PALÍNDROMO ===");

let palavra = prompt("Digite uma palavra: ");

console.log(`Quantidade de caracteres: ${palavra.length}`);

let invertida = palavra.toLowerCase().split("").reverse().join("");

if (palavra.toLowerCase() === invertida) {
    console.log("A palavra é um palíndromo!");
} else {
    console.log("A palavra não é um palíndromo.");
}

console.log("\n=== FIM DA ATIVIDADE ===");