// -------------Exercícios de interpretação de código------------

// // 
// const filme = {
// 	nome: "Auto da Compadecida", 
// 	ano: 2000, 
// 	elenco: [
// 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
// 		"Virginia Cavendish"
// 		], 
// 	transmissoesHoje: [
// 		{canal: "Telecine", horario: "21h"}, 
// 		{canal: "Canal Brasil", horario: "19h"}, 
// 		{canal: "Globo", horario: "14h"}
// 		]
// }

// console.log(filme.elenco[0])
// console.log(filme.elenco[filme.elenco.length - 1])
// console.log(filme.transmissoesHoje[2])
// ```

// a) O que vai ser impresso no console?

// Resposta: "Matheus Nachtergaele"
//            "Virginia Cavendish"
//             "Globo"  

// 2. Leia o código abaixo

//         const cachorro = {
//     	nome: "Juca", 
//     	idade: 3, 
//     	raca: "SRD"
//     }

//     const gato = {...cachorro, nome: "Juba"}

//     const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

//     console.log(cachorro)
//     console.log(gato)
//     console.log(tartaruga)
//     ```

//     a) O que vai ser impresso no console?
//     Resposta = console.log(cachorro) imprime : ["Juca", 3, "SRD"]
//                console.log(gato) imprime : ["Juba", 3, "SRD"]
//                console.log(tartaruga) imprime : "goto", 3 "SRD"

//     b) O que faz a sintaxe dos três pontos antes do nome de um objeto?
//     Respota: copia o objeto.

//     3. Leia o código abaixo

    
    // function minhaFuncao(objeto, propriedade) {
    // 	return objeto[propriedade]
    // }

    // const pessoa = {
    //   nome: "Caio", 
    //   idade: 23, 
    //   backender: false
    // }

    // console.log(minhaFuncao(pessoa, "backender"))
    // console.log(minhaFuncao(pessoa, "altura"))
    

    //  a) O que vai ser impresso no console?
    // Resposta= false
    //            undefined
    // b) Explique o valor impresso no console. Você sabe por que isso aconteceu?
    // Resposta = na primeira ele pediu a chave backender do objeto pessoa; Já no segundo pediu uma chave que não foi definida anteriormente;

    // --------------------Exercícios de escrita de código----------------------
// 1.a)Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente três apelidos). 
// Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo: 
    
    const pessoa = {
        nome: "Ana",
        apelidos: ["Anita", "aninha", "ninha"]
               
    }
     const mudarApelidos = (apelidosParaMudar) => {

    }

    console.log (`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos}`)

    // b)  b) Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome, mas com uma nova lista de três apelidos. 
    // Depois, chame a função feita no item anterior passando como argumento o novo objeto
        
    const novosApelidos = {...pessoa, apelidos: ["juju", "nana", "keke"]} 
        
        mudarApelidos(novosApelidos)
        console.log(novosApelidos)


        // 2.

        const usuario1 = {
            nome: "Bruno",
            idade: 23,
            profissao: "Instrutor",
           
        }

                           
            const usuario2 = {
                nome: "Clara",
                idade: 31,
                profissao: "Enfermeira"
            }
               

                function imprimirArray(objeto) {
                    return [objeto.nome, objeto.nome.length, objeto.idade, objeto.profissao, objeto.profissao.length]
                }
                 
                console.log(imprimirArray(usuario1))
                console.log(imprimirArray(usuario2))

                


        // // 3.
                const carrinho = [{nome:" "}, {disponivel:}]

                const fruta1 ={
                nome: "Maçã",
                disponivel: true
         }

                const fruta2 = {
                    nome: "Banana",
                    disponivel: true
                }   

                const fruta3 = {
                    nome: "Goiaba",
                    disponivel: true
                }

                function colocarFrutaDentroDoArrayCarrinho(){
                    
                    carrinho.push(fruta1.nome, fruta2.nome, fruta3.nome)
                    
                }
                colocarFrutaDentroDoArrayCarrinho()
                console.log(carrinho)
                console.log(`Nome:${fruta1.nome}, Disponivel: ${fruta1.disponivel}`)
                console.log(`Nome:${fruta2.nome}, Disponivel: ${fruta2.disponivel}`)
                console.log(`Nome:${fruta3.nome}, Disponivel: ${fruta3.disponivel}`)
               