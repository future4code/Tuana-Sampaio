/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */


    let carta1Usuario = comprarCarta()
    let carta2Usuario = comprarCarta()
    let carta1Pc = comprarCarta()
    let carta2Pc = comprarCarta()

    console.log('Boas vindas ao jogo de Blackjack!')

if(confirm('Quer iniciar uma nova rodada?')){
// iniciar a rodada com cada jogador pegando 2 cartas:
   let carta1Usuario = comprarCarta()
   let carta2Usuario = comprarCarta()
   let carta1Pc = comprarCarta()
   let carta2Pc = comprarCarta()
   let carta = comprarCarta()
//  verificação dos pontos dos jogadores:
   let pontosUsuario = carta1Usuario.valor+ carta2Usuario.valor
   let pontosPc = carta1Pc.valor + carta2Pc.valor

    console.log(`Usuário - cartas: ${carta1Usuario.texto} ${carta2Usuario.texto} - pontuação: ${pontosUsuario}`)
    console.log(`Computador - cartas: ${carta1Pc.texto} ${carta2Pc.texto} - pontuação: ${pontosPc}`)
// informar o vencedor (usuário ou computador), ou empate:

   if (pontosUsuario > pontosPc) {
      console.log("O usuário ganhou!")
} else if (pontosPc > pontosUsuario) {
   console.log("O computador ganhou!")
} else if (pontosUsuario === pontosPc) {
   console.log("Empate!")
} else if(carta1Usuario && carta2Usuario === 'A' || carta1Pc && carta2Pc === 'A'){
   let carta1Usuario = comprarCarta()
   let carta2Usuario = comprarCarta()
   let carta1Pc = comprarCarta()
   let carta2Pc = comprarCarta()
   let carta = comprarCarta()

}else{
   console.log('O jogo acabou!')
} 

  }

  confirm(`Suas cartas são ${carta1Usuario.texto} ${carta2Usuario.texto}. A carta revelada do computador é ${carta1Pc.texto}. 
  Deseja comprar mais uma carta?`)
  if(confirm){
   novoValor = comprarCarta() + (carta1Usuario.valor+ carta2Usuario.valor)
   console.log(novoValor)
  }

    
   for(pontosUsuario = 0; pontosUsuario <=21; pontosUsuario ++) {
   novoValor = comprarCarta() + (carta1Usuario.valor+ carta2Usuario.valor)
     console.log(alert(`Suas cartas são ${novoValor.texto} ${carta2Usuario.texto}. A carta revelada do computador é ${carta1Pc.texto}. 
     Deseja comprar mais uma carta?`))
     
  }




//   while(confirm(`Suas cartas são ${carta1Usuario.texto} ${carta2Usuario.texto}. A carta revelada do computador é ${carta1Pc.texto}.
// //   Deseja comprar mais uma carta?`)){  
//      console.log(pontosUsuario + carta.length.valor)
//    //  for(let i = 1; i <= 21; i++){
//    //     console.log("Fim de jogo!")
   

// // 9 - Após o sorteio das 2 cartas para cada jogador, as duas primeiras cartas do usuário continuam sendo reveladas. A primeira carta do computador é revelada, a segunda é oculta por enquanto. 
// // Você deve perguntar ao usuário se ele deseja comprar mais uma carta. 


// while(confirm(`Suas cartas são ${carta1Usuario.texto} ${carta2Usuario.texto}. A carta revelada do computador é ${carta1Pc.texto}.
// Deseja comprar mais uma carta?`)){  
//    console.log(pontosUsuario + carta.valor)
//   for(let i = 1; i <= 21; i++){
//      console.log("Fim de jogo!")
//   }
// }


// let i = 1
// while(pontosUsuario === 21 || !b){  
// console.log(i)
// i++
// }
// if (pontosUsuario === 21){
//    console.log('Fim de jogo!')
// }
// // 10 - A cada carta comprada pelo usuário, a pontuação dele será somada com o valor da nova carta. Ele poderá comprar cartas até atingir a pontuação de 21 pontos; ou até decidir parar de comprar. Assim que o usuário chegar no limite de pontuação, a mensagem de fim de jogo deve ser mostrada, indicando quem venceu. 
// // Veja abaixo, uma sequência possível de mensagens mostradas ao usuário (usando confirm e alert)

// let valorNovaCarta = comprarCarta()
