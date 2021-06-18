// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const altura = Number(prompt('Digite a altura do retângulo'))
  const largura = Number(prompt('Digite a largura do retângulo'))
  const area = largura * altura
  console.log(area)

}

// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = Number(prompt('Qual o ano atual?'))
  const anoNascimento = Number(prompt('Qual o ano do seu nascimento?'))
  const idade = anoAtual - anoNascimento
  
  console.log(idade)

}
 
 
// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  
  let IMC = peso / (altura*altura)
  return IMC
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nome = prompt('Qual o seu nome?')
  const idade = prompt('Qual a sua idade?')
  const email = prompt('Qual o seu email?')
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const cor1 = prompt('Digite três cores favoritas: digite a primeira cor favorita')
  const cor2 = prompt('Digite a segunda cor favorita')
  const cor3 = prompt('Digite a terceira cor favorita')
  const cores =[cor1, cor2, cor3]
  console.log(cores)

}


// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  return string.toUpperCase() 

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
    return custo/valor

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  return string1.length() === string2.length()

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  return array[array.length - 1]

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  
   const c = array[0]
   array[0] = array[array.length -1]
   array[array.length -1] = c
  
      return array

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  return string1.toUpperCase() === string2.toUpperCase()

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
 const anoAtual2 = Number(prompt('Qual o ano atual?'))
 const anoNascimento2 = Number(prompt('Qual o seu ano de nascimento?'))
 const anoEmissaoCarteira = prompt('Qual o ano de emissão da sua identidade?')
  
 const idade = anoAtual2 - anoNascimento2
 const carteiraDeIdentidade = anoAtual - carteiraDeIdentidade
  
 const renovar = (idade <= 20) && (carteiraDeIdentidade = 5) || (idade >= 20) && (idade <50) ||
(idade =50) && (carteiraDeIdentidade = 10) || (idade > 50) && (carteiraDeIdentidade = 15 )


 
 
 console.log(renovar)
 
}

// EXERCÍCIO 14
    function checaAnoBissexto(ano) {
  
  const bissexto1 = ano % 400 === 0
  const bissexto2 = (ano % 4 === 0) && ((ano % 100 != 0)
      return bissexto1 || bissexto2


}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  const maiorDeDezoito = prompt("Você tem mais de 18 anos?")
  const ensinoMedio = prompt("Você possui ensino médio completo?")
  const disponibilidade = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")
  
  
  const requisitos = maiorDeDezoito && ensinoMedio && disponibilidade
  
  console.log(requisitos)