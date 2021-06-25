//  ---------------------- exercícios de interpretação-----------------------
// a) O que vai ser impresso no console?
// Resposta: Vai imprimir cada elemento correspondente do array;

//2)a. a) O que vai ser impresso no console?
// Resposta: Vai imprimir um novo array com apenas o valor da propriedade "nome" de cada elemento do array; 

// 3)a)O que vai ser impresso no console?
// Resposta: Vai ser impresso um novo array com elementos que não contenham o valor da propriedade "apelido" igual a "chijo" 


//  ---------------------- exercícios de escrita de código-----------------------
// 1)a) Crie um novo array que contenha apenas o nome dos doguinhos
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 const apenasNomeDoCachorro = pets.map((elemento, index, pets)=>{
     return elemento.nome
 })
 console.log(apenasNomeDoCachorro)

// b) Crie um novo array apenas com os cachorros salsicha

const apenasCachorroSalsicha = pets.filter((elemento)=> {
    return elemento.raca === "Salsicha"
})
console.log(apenasCachorroSalsicha)

// c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles.
// A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a [NOME]!"


const apenasCachorroPoodle = pets.filter((item)=>{
    return item.raca ==="Poodle"
    
})
    const arrayEnviarMensagem = apenasCachorroPoodle.map((mensagem)=> {
        return `Você ganhou um cupom de desconto de 10% para tosar o/a ${mensagem.nome}!`  
             
})

 console.log(arrayEnviarMensagem)
 

// 2a)

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

//  a) Crie um novo array que contenha apenas o nome de cada item

 const novoArray = produtos.map((elemento)=>{
    return elemento.nome
 })
 console.log(novoArray)

//  b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles
 const novoArray2 = produtos.map((elemento)=>{
    return `Nome do produto: ${elemento.nome}. Preço com desconto de 5%: ${elemento.preco- elemento.preco*0.05}` 
})
 console.log(novoArray2)

//  c) Crie um novo array que contenha apenas os objetos da categoria Bebidas
const arrayBebidas = produtos.filter((item)=>{
    return item.categoria === "Bebidas"
})
console.log(arrayBebidas)

// d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"
const arrayYpe = produtos.filter((elemento)=>{
    return elemento.nome.includes("Ypê")   
})
console.log(arrayYpe)

// ) e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". 
//  Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"
    const arrayFrase = arrayYpe.map((elemento)=>{
        return `Compre ${elemento.nome} por ${elemento.preco}`
    })
    console.log(arrayFrase)
    