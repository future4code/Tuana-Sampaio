// ---------------Exercícios de interpretação de código-------------
// 1.  a) O que vai ser impresso no console? Resposta - 10 e 50

//     b) O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a função `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console? 
//       Resposta - Não aparece nada no console pois o console.log serve justamente para imprimir o resultado no console.

// 2. a. Explique o que essa função faz e qual é sua utilidade.
//      Resposta = essa função coloca todas as letras em caixa baixa e verifica se a palavra cenoura está no texto iserido pelo usuário.Retorna boolean.

// b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
//      i.   `Eu gosto de cenoura` - Imprime: true
//      ii.  `CENOURA é bom pra vista` - Imprime : true
//      iii. `Cenouras crescem na terra` - Imprime: true

// ---------------Exercícios de escrita de código-------------
// 1.
// a)
     function imprimeInformaCoes() {
     console.log(`Eu sou Tuana, tenho 31 anos, moro em Recife e sou estudante`)
 }

       imprimeInformaCoes()

// b)
    function informacoesDaPessoa (nome, idade, cidade, profissao){
        let frase = (`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}`)
        return frase
    }
    
    const novaFrase = informacoesDaPessoa("Tuana", 31, "Recife", "Estudante")
    console.log(novaFrase)

// 2.a)
    
    function somaNumeros (num1, num2) {
        const soma = num1 + num2
        return soma
    } 

    const resultado = somaNumeros(2,3)
    console.log(resultado)

// b)
    function comparacaoNumeros(num1 , num2){
        const comparacao = num1 >= num2
        return comparacao
    }

    const resultado2 = comparacaoNumeros(1,4)
    console.log(resultado2)

// c).
        function numeroEPar(num3){
            const eDivisivelPor2 = num3 % 2 === 0
            return eDivisivelPor2
        }
       
        const resultado3 = numeroEPar(60)
        console.log(resultado3)

// d). 
        function mensagem(texto){
            return texto.length && texto.toUpperCase()
            
        }

        const resultado4 = mensagem('hoje eu estudei muito')

        console.log(resultado4)

     // 3.
        
        const num1 = Number(prompt('Insira um número'))
        const num2 = Number(prompt('Insira outro número'))
        
        function somaNumeros(num1, num2){
            const soma2 = num1 + num2
            return soma2
        } 
        
        function subtracao(num1, num2){
            const subtracao1 = num1 - num2
            return subtracao1
        }

        function multiplicacao(num1, num2){
            const multiplicacao1 = num1 * num2
            return multiplicacao1
        }

        function divisao( num1 , num2){
            const divisao1 = num1 / num2
            return divisao1
        }
       
        console.log(`Números inseridos: ${num1} e ${num2}`)

        const resultado5 = somaNumeros(num1, num2)
        console.log(resultado5)

        const resultado6 = subtracao(num1, num2)
        console.log(resultado6)

        const resultado7 = multiplicacao(num1, num2)
        console.log(resultado7)

        const resultado8 = divisao(num1, num2)
        console.log(resultado8)


        // DESAFIO
        // 1.
        const a = (num1) => {
            console.log(num1)
        }

        let somaNumeros2 = (num1, num2)=>{
            const soma = num1 + num2
            console.log(soma)
        }

        somaNumeros2(40, 50)
        
        // 2.
        function teoremaDePitagoras(a, b){
            const hipotenusa = Math.sqrt(a*a + b*b)
            return hipotenusa

        }

        const resultado10 = teoremaDePitagoras(2 , 5)
        console.log(resultado10)