*a. Para realizar os testes corretamente, qual deles você deve modificar primeiro? O cadastro ou o login? Justifique.*
R- no cadastro, pois é onde o usuário vai digitar pela primeira vez seus dados e sua senha.

*b. Faça a alteração do primeiro endpoint*
R- const id: string = new IdGenerator().generateId()

    const cipherPassword: string = new HashManager().generateHash(password)

    const newUser: user = { id, name, nickname, email, password:cipherPassword }


*c. Faça a alteração do segundo endpoint*
R- const passwordIsCorrect:boolean = new HashManager().compareHash(password, user.password)
    
      if (!user || !passwordIsCorrect) {
      res.statusCode = 401 // "Unauthorized"
      throw new Error("Credenciais inválidas")
    }

*d. No exercício de ontem, nós criamos o endpoint `user/profile`. Também temos que modificar esse endpoint devido à adição da criptografia? Justifique.*