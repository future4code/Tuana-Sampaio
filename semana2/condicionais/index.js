// ---------------Exercícios de interpretação de código--------------------
// 1.
// a) Explique o que o código faz. Qual o teste que ele realiza? 
// Resposta = Ele pede ao usuário um número que será testado. O teste realizado é se o resto da divisão do número por 2 é igual a 0. 
//    Se for, ele imprime no console: "Passou no teste"; Caso contrário, ele imprime no console: "Não passou no teste".

// b) Para que tipos de números ele imprime no console "Passou no teste"?
//  Resposta = Números divisíveis por dois, ou números pares.

// c) Para que tipos de números a mensagem é "Não passou no teste"? 
//  Resposta = Para os números ímpares, ou não divisíveis por dois.

// 2.
// a) Para que serve o código acima?
// Resposta = o código serve para o usuário consultar o preço das frutas que ele deseja;

// b) Qual será a mensagem impressa no console, se o valor de fruta for "Maçã"?
// Resposta = "O preço da fruta maçã é R$ 2.25"

// c) Considere que um usuário queira comprar uma Pêra, qual seria a mensagem impressa no console se retirássemos o break que está logo acima do default (o break indicado pelo comentário "BREAK PARA O ITEM c.")?
// Resposta = O preço da fruta  Pêra  é  R$  5


// 3.
// a) O que a primeira linha está fazendo?
// Resposta = A primeira linha é uma variável que está armazenando um número solicitado ao usuário;

//b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
// Resposta = Se digitar o número 10 ou o número -10, a mensagem será: "Esse número passou no teste";

// c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
//  Resposta = Sim, haverá um erro pois a variável está no escopo da função e não poderá ser acessada para ser impressa. Ela será undefined.
//  Precisa estar no escopo geral para ser acessada;


// ---------------Exercícios de escrita de código----------------------------
// 1.

        const idade = Number(prompt("Qual a sua idade?"))
        
        const verificaSePodeDirigir= (num1) => {
            if(idade >= 18){
                console.log("Pode dirigir!")
            } else {
                console.log("Não pode dirigir!")
            }
        }

        verificaSePodeDirigir(idade)

//2.


        const turno = prompt(" Qual o turno que você estuda? Digite: M para matutino ou V para Vespertino ou N para Noturno.")
       
       
         const verificaOTurno = (turno) => {
            if (turno === "M" ){
               console.log("Bom-dia!")
             }else if (turno === "V"){
                 console.log("Boa-tarde!")
             }else if (turno === "N"){
                 console.log("Boa-noite!")
             }else {
                 console.log("Digite apenas M, V ou N!")
             }
                
         }
                 verificaOTurno(turno)

    // 3.
                const defineCumprimento = (x) => {
                switch(turno){ 
                 case "M":
                    console.log("Bom-dia!")
                    break
                    case "V":
                        console.log("Boa-tarde!")
                        break
                        case "N":
                        console.log("Boa-noite!")
                        break
                        default:
                            console.log("Digite apenas M, V ou N!")
                 }
             }

                defineCumprimento(turno)

    // 4. 
            //  const genero = prompt("Qual o gênero do filme: ação, suspense, comédia, fantasia ou terror?")
            //  const precoIngresso = Number(prompt("Qual o preço do ingresso?"))

            //     const verificaSeAssisteFilme = (genero, precoIngresso) => {
            //         if(genero === "fantasia" && precoIngresso < 15) {
            //             console.log("Bom filme!")
            //         }else {
            //             console.log("Escolha outro filme :(")
            //         }
            //     }

            //     verificaSeAssisteFilme(genero, precoIngresso)




//  Desafio: 
// 1.
                    const genero = prompt("Qual o gênero do filme: ação, suspense, comédia, fantasia ou terror?")
                    const precoIngresso = Number(prompt("Qual o preço do ingresso?"))

                    const verificaSeAssisteFilme = (genero, precoIngresso) => {
                        if(genero === "fantasia" && precoIngresso < 15) {
                            const snack = prompt("Qual snack que você quer comprar?")
                            console.log(`Bom filme! e aproveite o seu ${snack}!`)
                        }else {
                            console.log("Escolha outro filme :(")
                        }
                    }

                    
                    verificaSeAssisteFilme(genero, precoIngresso)

// 2.               
                    const nomeCompleto = prompt("Digite seu nome completo:")
                    const tipoJogo = prompt("Escolha o tipo de jogo: Internacional ou Doméstico:")
                    const etapaJogo = prompt("Qual a etapada do jogo: Semi-final, decisão de terceiro lugar ou final? ")
                    const categoria = prompt(" Qual a categoria: 1,2,3 ou 4?")
                    const qtdIngressos = Number(prompt("Qual a quantidade de ingressos?"))
                    
                    // DO:
                    const valorSemiCategoria1 = 1320    
                    const valorSemiCategoria2 = 880
                    const valorSemiCategoria3 = 550
                    const valorSemiCategoria4 = 220

                    const valorDtCategoria1 = 660    
                    const valorDtCategoria2 = 440
                    const valorDtCategoria3 = 330
                    const valorDtCategoria = 170

                    const valorFiCategoria1 = 1980    
                    const valorFiCategoria2 = 1320
                    const valorFiCategoria3 = 880
                    const valorFiCategoria = 330

                    const compraIngresso = (nomeCompleto, tipoJogo, etapaJogo, categoria, qtdIngressos) => {
                            console.log(`Nome completo: ${nomeCompleto}`)
                        if (tipoJogo === "internacional" || "Doméstico"){
                            console.log(`Tipo do jogo:${tipoJogo}`)
                        } if (etapaJogo === "Semi-final"|| "decisão de terceiro lugar" || "final"){
                            console.log(`Etapa do jogo:${etapaJogo}`)
                        } if (categoria === "1" || "2" || "3" || "4"){
                            console.log(`Categoria: ${categoria}`)
                        }  console.log(`Quantidade de ingressos: ${qtdIngressos}`)
                    }
                        compraIngresso(nomeCompleto, tipoJogo, etapaJogo, categoria, qtdIngressos)

                        // valores :

                       

                        const valorIngresso = (tipoJogo, etapaJogo, categoria) => {
                            if(tipoJogo === "Doméstico" && etapaJogo === "Semi-final" && categoria === 1 ) {
                                console.log(valorSemiCategoria1)
                            } else if (tipoJogo === "Doméstico" && etapaJogo === "Semi-final" && categoria === 2) {
                                console.log(valorSemiCategoria2)
                             } else if(tipoJogo === "Doméstico" && etapaJogo === "Semi-final" && categoria === 3){
                                console.log(valorSemiCategoria3)
                             } else if(tipoJogo === "Doméstico" && etapaJogo === "Semi-final" && categoria === 4){
                                console.log(valorSemiCategoria4)
                                   
                                } else if (tipoJogo === "Doméstico" && etapaJogo === "decisão de terceiro lugar" && categoria === 1){
                                    console.log(valorDtCategoria1)

                                    } else if (tipoJogo === "Doméstico" && etapaJogo === "decisão de terceiro lugar" && categoria === 2){
                                    console.log(valorDtCategoria2)
                                        
                                    } else if (tipoJogo === "Doméstico" && etapaJogo === "decisão de terceiro lugar" && categoria === 3){
                                        console.log(valorDtCategoria3)
                             } else if (tipoJogo === "Doméstico" && etapaJogo === "decisão de terceiro lugar" && categoria === 4){
                                console.log(valorDtCategoria4)
                        }
                          valorIngresso(tipoJogo, etapaJogo, categoria)


                        

                        const valorTotal = (tipoJogo, etapaJogo, categoria) => {
                            if(tipoJogo === "Doméstico" && etapaJogo === "decisão de terceiro lugar" && categoria === 1) {
                                console.log(valorDtCategoria1 * qtdIngressos)
                            } else if (tipoJogo === "Doméstico" && categoria === 2) {
                                console.log(valorDtCategoria2 * qtdIngressos)
                             } else if(tipoJogo === "Doméstico" && categoria === 3){
                                console.log(valorDtCategoria3 * qtdIngressos)
                             } else if(tipoJogo === "Doméstico" && categoria === 4){
                                console.log(valorDtCategoria4 * qtdIngressos)
                             }
                        }

                        valorTotal(tipoJogo, etapaJogo, categoria)


                    