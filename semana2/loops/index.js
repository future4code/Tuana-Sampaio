// -----------------------Exercícios de interpretação de código-----------------------

// 1) Enquanto "i" for menor que 5 incremente 1 em "i" e imprima "valor". O restultado impresso no console vai ser : 1, 2, 3 e 4.

// 2)a. Vão ser impressos os elementos(números) maiores do que 18: 19, 21, 23, 25, 27, 30;
// b) Para acessar o índice é mais indicado utilizar somente o for, já que o for...of acessa o elemento do array diretamente.

// 3) O resultado impresso no console seriam 4 linhas com número crescente de asteriscos até o limite de 4 por linha como abaixo:
// *
// **
// ***
// ****


// ---------------------Exercícios de escrita de código--------------------------------------

let bichoEstimacao = Number(prompt("Quantos bichos de estimação você tem?"))
let bichos = []


   while (bichoEstimacao === 0){
        console.log(" Que pena, você pode adotar um pet!")
            bichoEstimacao = Number(prompt("Quais os nomes deles. Por favor, digite um por um."))
        for(i = 1; i < bichoEstimacao; i++ ){
            bichos.push(bichoEstimacao)
        console.log(bichos)
        } 

   }