/* Respostas -  
    Exercício 1: 
 let a = 10
 let b = 10
 console.log(b) imprime: 10
 b = 5
 console.log(a, b) imprime: 105

    Exercício 2: 
 let a = 10
 let b = 20
 let c
 c = a
 b = c
 a = b

console.log(a, b, c) 

imprime: 101020

    Exercício 3:

let p = prompt("Quantas horas você trabalha por dia?")  let horasTrabalhadasPorDia
let t = prompt("Quanto você recebe por dia?")  let ganhoPorDia
alert(`Voce recebe ${t/p} por hora`) 
*/ 



/* Exercícios de escrita de código:
  1. d) Reflita: por que esse tipo foi impresso? 
    Tipo armazenado na variável nome: undefined
    Tipo armazenado na variável idade: undefined
    undefined é o tipo que representa a falta de valor de
uma variável

/* Tudo que o usuário insere no prompt é uma string.
    Tipo armazenado na variável nome: string
 ​     Tipo armazenado na variável idade: string */

    let nome = prompt('Qual o seu nome?') 
    let idade = prompt('Qual a sua idade?')

    console.log("Tipo armazenado na variável nome:", typeof nome) 
    console.log("Tipo armazenado na variável idade:", typeof idade)

    console.log('Olá', nome, 'você tem', idade, 'anos')

/* e) Pergunte ao usuário seu nome e sua idade, atribuindo esses dois valores às variáveis que acabou de criar.
    resposta : Tipo armazenado na variável nome: string
                Tipo armazenado na variável idade: string
     f) Novamente, imprima na tela o tipo dessas variáveis. O que você notou? Escreva em um comentário de código.
    As duas foram impressas como tipo string pois tudo que o usuário insere no prompt é uma string.
    
 ​     */

    let usandoRoupa = prompt('Você está usando roupa amarela hoje?')
    let vontadeDeIrAPraia = prompt('Você quer ir à praia domingo?')
    let possuiCelular = prompt( 'Você possui celular?')

    

    console.log('Você está usando roupa amarela hoje?:', usandoRoupa, '')
    console.log('Você quer ir à praia domingo?:', vontadeDeIrAPraia, '')
    console.log('Você possui celular?:', possuiCelular, '')

    
    
    let a = 10
    let b = 25
    let c = a

    a = b
    b = c
    
    
    
    
// Depois de trocados, teremos o seguinte resultado:
console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10