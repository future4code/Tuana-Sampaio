// EXERCÍCIO 01
function inverteArray(array) {
  novoArray = array.map((elemento, index, array) => array[array.length - 1 - index])  
  return novoArray
}

// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {
      arrayNumerosPares = array.filter((elemento)=> elemento % 2 === 0)
      return arrayNumerosPares.map((elemento) => elemento*elemento) 
         
} 
 
    

// EXERCÍCIO 03
function retornaNumerosPares(array) {
    novoArray2 = array.filter((elemento)=> elemento % 2 === 0)
    return novoArray2
  
}

// EXERCÍCIO 04
function retornaMaiorNumero(array) {
  let maiorNumero = 0
    for( let i = 0; i < array.length; i++){
    const numero = array[i]
    if(numero > maiorNumero){
      maiorNumero = numero
    }
  } return maiorNumero
}


// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
  return array.length
}

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {
  const booleano1 = true
  const booleano2 = false
  const booleano3 = !booleano2 
  const booleano4 = !booleano3 
  
  const arrayRespostas = []

  arrayRespostas[0] = booleano1 && booleano2 && !booleano4
  arrayRespostas[1] = (booleano1 && booleano2) || !booleano3
  arrayRespostas[2] = (booleano2 || booleano3) && (booleano4 || booleano1)
  arrayRespostas[3] = !(booleano2 && booleano3) || !(booleano1 && booleano3)
  arrayRespostas[4] = !(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)
  
     return arrayRespostas
    

}


// EXERCÍCIO 07
function retornaNNumerosPares(n) {
  
  let elemento = [] 
  for(let i = 0; i < n; i++){
    elemento.push(i*2)
  }
  
  return elemento
  
}

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
  if(a=== b && b === c && c === a){
    return 'Equilátero'
  } else if(a===b || b===c || a === c){
    return 'Isósceles'
  } else{
      return 'Escaleno'
    }
  }
  


// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
    let maiorNumero
    let menorNumero
    let maiorDivisivelPorMenor
    
      if ( num1 > num2){
      maiorNumero = num1
      menorNumero = num2
    } else {
      maiorNumero = num2
      menorNumero = num1
    }

    maiorDivisivelPorMenor = maiorNumero % menorNumero === 0
    const diferenca = maiorNumero - menorNumero

   
      return{ 
          maiorNumero: maiorNumero,
          maiorDivisivelPorMenor: maiorDivisivelPorMenor,
          diferenca: diferenca
        }
      
  // let maiorNumero = num1<num2 
    // let maiorDivisivelPorMenor = num2/num1
    // let diferenca = num2-num1
    // return {
    //   maiorNumero: " ",
    //   maiorDivisivelPorMenor: " ",
    //   diferenca: " "
    }

    
  // Formato do objeto a ser retornado:
  // {
  //   maiorNumero: X,
  //   maiorDivisivelPorMenor: Y,
  //   diferenca: Z
  // }


// EXERCÍCIO 10
function segundoMaiorEMenor(array) {

}

// EXERCÍCIO 11
function ordenaArray(array) {

}

// EXERCÍCIO 12
function filmeFavorito() {

}

// EXERCÍCIO 13
function imprimeChamada() {
  // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {

}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {

}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {

}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {

}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {

}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {

}

// EXERCÍCIO 17C
function verificaParidade(array) {

}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {

}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

}

// EXERCÍCIO 20
function calculaSaldo(contas) {

} 
