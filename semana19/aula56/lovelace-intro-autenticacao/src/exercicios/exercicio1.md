a. O que são os round e salt? Que valores são recomendados para o round? Que valor você usou? Por quê?
R- Salt é uma string aleatória criada pelo bcrypt antes de criar o hash. Para o round o valor recomendado é o 12, que é padrão. Quanto maior o cost, maior o tempo de execução do
algoritmo. A recomendação é utilizar o maior que conseguir para os equipamentos
utilizados rodarem no tempo desejado;

Agora, crie a função que verifique se uma string é correspondente a um hash, use a função compare do bcryptjs
R - public compareHash = (plainText:string, cipherText:string)=>{
        const result = compareSync(plainText, cipherText)

        return result
    }
}