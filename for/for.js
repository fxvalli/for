let alunos = ["Ana", "João", "Carlos", "Maria", "Pedro"];

for (let i = 0; i < alunos.length; i++) {
    console.log(alunos[i]);
}

let numero = prompt("Digite um número para calcular a tabuada:");

for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
}

let notas = [];
let soma = 0;

for (let i = 0; i < 5; i++) {
    let nota = parseFloat(prompt(`Digite a nota ${i + 1}:`));
    notas.push(nota);
    soma += nota;
}

let media = soma / 5;
console.log(`A média das notas é: ${media}`);


for (let i = 10; i >= 1; i--) {
    console.log(i);
}


for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}


let materiais = ["Caderno", "Caneta", "Lápis", "Borrachas", "Papel"];

for (let i = 0; i < materiais.length; i++) {
    console.log(materiais[i]);
}


let N = parseInt(prompt("Digite um número:"));
let soma1 = 0;

for (let i = 1; i <= N; i++) {
    soma += i;
}

console.log(`A soma de 1 até ${N} é: ${soma}`);


let numero1 = parseInt(prompt("Digite um número para calcular o fatorial:"));
let fatorial = 1;

for (let i = 1; i <= numero; i++) {
    fatorial *= i;
}

console.log(`O fatorial de ${numero} é: ${fatorial}`);

let palavra = prompt("Digite uma palavra:");
let vogais = "aeiou";
let contagem = 0;

for (let i = 0; i < palavra.length; i++) {
    if (vogais.includes(palavra[i].toLowerCase())) {
        contagem++;
    }
}

console.log(`A palavra tem ${contagem} vogais.`);


let numeros = [];
let resultado = [];

for (let i = 0; i < 5; i++) {
    let numero = parseInt(prompt("Digite um número:"));
    numeros.push(numero);
}

for (let i = 0; i < numeros.length; i++) {
    resultado.push(numeros[i] * 2);
}

console.log("Resultados da multiplicação por 2:", resultado);


let palavra1 = prompt("Digite uma palavra:");
let palavraInvertida = "";

for (let i = palavra.length - 1; i >= 0; i--) {
    palavraInvertida += palavra[i];
}

console.log(`A palavra invertida é: ${palavraInvertida}`);


let inicio = parseInt(prompt("Digite o primeiro número do intervalo:"));
let fim = parseInt(prompt("Digite o último número do intervalo:"));
let somaPares = 0;

for (let i = inicio; i <= fim; i++) {
    if (i % 2 === 0) {
        somaPares += i;
    }
}

console.log(`A soma dos números pares no intervalo é: ${somaPares}`);


let frase = prompt("Digite uma frase:");
let contador = 0;

for (let i = 0; i < frase.length; i++) {
    if (frase[i] !== " ") {
        contador++;
    }
}

console.log(`A frase tem ${contador} caracteres (sem contar os espaços).`);


let meses = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
];

for (let i = 0; i < meses.length; i++) {
    console.log(meses[i]);
}


let numero2 = parseInt(prompt("Digite um número:"));

for (let i = 1; i <= 5; i++) {
    let potencia = Math.pow(numero, i);
    console.log(`${numero} elevado a ${i} é: ${potencia}`);
}


let N1 = parseInt(prompt("Digite um número:"));
let quadrados = [];

for (let i = 1; i <= N; i++) {
    quadrados.push(i * i);
}

console.log("Array de quadrados:", quadrados);

for (let i = 1; i <= 5; i++) {
    console.log("*".repeat(i));
}


let notas1 = [];
let pesos = [];
let somaNotas = 0;
let somaPesos = 0;

for (let i = 0; i < 3; i++) {
    let nota = parseFloat(prompt(`Digite a nota ${i + 1}:`));
    let peso = parseInt(prompt(`Digite o peso da nota ${i + 1}:`));
    notas.push(nota);
    pesos.push(peso);
    somaNotas += nota * peso;
    somaPesos += peso;
}

let mediaPonderada = somaNotas / somaPesos;
console.log(`A média ponderada é: ${mediaPonderada}`);

let numero3 = parseInt(prompt("Digite um número:"));
let divisores = 0;

for (let i = 1; i <= numero; i++) {
    if (numero % i === 0) {
        divisores++;
    }
}

console.log(`O número ${numero} possui ${divisores} divisores.`);


let participantes = [];
let quantidade = parseInt(prompt("Quantos participantes há no sorteio?"));

for (let i = 0; i < quantidade; i++) {
    let nome = prompt(`Digite o nome do participante ${i + 1}:`);
    participantes.push(nome);
}

let vencedor = participantes[Math.floor(Math.random() * participantes.length)];
console.log(`O vencedor do sorteio é: ${vencedor}`);

