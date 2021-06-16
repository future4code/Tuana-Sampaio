// Exercícios de interpretação:

// --------------exercício 1--------------------------
// const bool1 = true
// const bool2 = false
// const bool3 = !bool2

// let resultado = bool1 && bool2
// console.log("a. ", resultado) ---> imprime: false 

// resultado = bool1 && bool2 && bool3 
// console.log("b. ", resultado) ----> imprime: false

// resultado = !resultado && (bool1 || bool2) 
// console.log("c. ", resultado) ----> imprime: true

// console.log("d. ", typeof resultado) ----> imprime: boolean

// --------------exercício 2--------------------------

// let primeiroNumero = prompt("Digite um numero!")
// let segundoNumero = prompt("Digite outro numero!")

// const soma = primeiroNumero + segundoNumero

// console.log(soma)

// RESPOSTA:
// Primeiro é necessário fazer um cast number nas variáveis que contém o prompt indicando assim que serão números.
//  Será impresso a concatenação dos números e não sua soma.

// --------------exercício 3--------------------------
//  A soluçao seria:
// let primeiroNumero = number(prompt("Digite um numero!"))
// let segundoNumero = number(prompt("Digite outro numero!"))

// Exercícios de escrita de código:

// --------------exercício 1--------------------------

    let nome = prompt('Qual o seu nome?')
    let idadeMelhorAmigo = prompt('Qual a idade do(a) seu(a) melhor amigo(a)?')
    let comparacaoIdades = 31 >= idadeMelhorAmigo 

    console.log("Sua idade é maior do que a do seu melhor amigo?", comparacaoIdades )

    console.log(31-idadeMelhorAmigo)

// --------------exercício 2--------------------------

let numeroPar = prompt('Por favor, insira um número par!')
let restoDaDivisao = numeroPar % 2
console.log(restoDaDivisao)

// Ao colocar números pares o resto da divisão por dois será sempre zero;
// Ao inserir números ímpares, o resto da divisão por dois será um;

// --------------exercício 3--------------------------

let idadeEmAnos = prompt('Qual sua idade em anos?')

let idadeMeses = idadeEmAnos * 12
let idadeDias = idadeEmAnos * 365
let idadeHoras = idadeEmAnos * 8760

console.log('Sua idade em meses:', idadeMeses)
console.log('Sua idade em dias:', idadeDias)
console.log('Sua idade em horas:', idadeHoras)

// --------------exercício 4--------------------------

let numero1 = Number(prompt('Por favor digite um número:'))
let numero2 = Number(prompt('Digite outro número:'))

const comparacao = numero1 > numero2
const igualdade = numero1 === numero2
const divisibilidade = numero1/numero2 === 0
const divisibilidade2 = numero2/numero1 === 0

console.log('O primeiro numero é maior que segundo?', comparacao)
console.log("O primeiro numero é igual ao segundo?", igualdade)
console.log('O primeiro numero é divisível pelo segundo?', divisibilidade)
console.log('O segundo numero é divisível pelo primeiro?', divisibilidade2)

