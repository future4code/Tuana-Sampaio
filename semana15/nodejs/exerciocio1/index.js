/*a) Como fazemos para acessar os parâmetros passados na linha de comando para o Node?
    R-  Acessamos através do process.argv. Exemplo: const input = process.argv[2]*/

/*b) Crie um programa que receba seu nome e sua idade. Após receber estes valores, imprima no console uma mensagem que siga a seguinte estrutura:*/
const{red}= require("chalk")

let nome = "Tuana"
let idade = Number(31)
let novaIdade = idade + Number(7)

console.log(red(`Olá, ${nome} ! Você tem ${idade} anos.Em sete anos você terá ${novaIdade} anos. :(`))