//--------------- Exercícios de interpretação de código-----------
// 1.  Indique todas as mensagens impressas no console, **SEM EXECUTAR o programa**.

// let array
// // console.log('a. ', array) imprime: a. default

// //  array = null
// //  console.log('b. ', array)  imprime: b. null 

//  array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// // console.log('c. ', array.length)    imprime: c.11 

// let i = 0
// console.log('d. ', array[i])  imprime: d. 3

// array[i+1] = 19
// console.log('e. ', array) imprime: e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

// const valor = array[i+6]
// console.log('f. ', valor) imprime = f.9

// 2. Leia o código abaixo com atenção 

    //     const frase = prompt("Digite uma frase")

//     console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
//     ```
//     Qual será o valor impresso no console se a entrada do usuário for: `"Subi num ônibus em Marrocos"`?
// imprime: SUBI NUM ÔNIBUS EM MIRROCOS  27

// --------------Exercícios de escrita de código:------------------------
// 1. Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, imprima na tela a seguinte mensagem:

    // O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o), `nomeDoUsuario`!

    const nome = prompt('Digite seu nome:')
    const email = prompt('Digite seu email:')

    const templateString = `O e-mail ${email} foi cadastrado com sucesso. Seja bem-vinda(o), ${nome}!`
    console.log(templateString)

    // 2. Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:

    // a) Imprima na tela o array completo

    // b) Imprima na tela a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, **uma embaixo da outra**.

    // c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima na tela a nova lista

    
    let comidasPreferidas = ['salgadinho de queijo', 'sorvete', 'sopa', 'macarronada', 'empada']
    console.log(comidasPreferidas)
    
    console.log("Essas são minhas comidas preferidas:")
    console.log(comidasPreferidas[0])
    console.log(comidasPreferidas[1])
    console.log(comidasPreferidas[2])
    console.log(comidasPreferidas[3])
    console.log(comidasPreferidas[4])
   
    let suaComidaPreferida = prompt('Qual a sua comida preferida?')
    let i = 0

    comidasPreferidas[i+1] = suaComidaPreferida
    console.log('Nova lista:', comidasPreferidas)


    // 3. Faça um programa, seguindo os passos:

    // a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`

    // b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array

    // c) Imprima o array no console

    // d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 

    // e) Remova da lista o item de índice que o usuário escolheu.

    // f) Imprima o array no console

    let listaDeTarefas = []
    let tarefaARealizar1 = prompt('Informe três tarefas que você precisa realizar hoje. Informe a tarefa número 1')
    let tarefaARealizar2 = prompt('Informe a tarefa número 2')
    let tarefaARealizar3 = prompt('Informe a tarefa número 3')

    listaDeTarefas.push(tarefaARealizar1, tarefaARealizar2, tarefaARealizar3)
      
    console.log(listaDeTarefas)

    let tarefaRealizada = prompt('Digite o número 0, 1 ou 2 para se referir à tarefa já realizada ')
    listaDeTarefas.splice(tarefaRealizada, 1)

    console.log(listaDeTarefas)

