a. Crie o endpoint que realize isso, com as funções que você implementou anteriormente
R-xport const login = async(
    req: Request,
    res: Response
)=>{
    try{
        //buscar usuário por email
        const {email, password} = req.body
        const [user] = await connection("to_do_list_users")
    .where({email})

        //conferir se o usuario existe e a senha está correta
        if(!user || user.password !== password){
            res.statusCode = 401 // "Unauthorized"
            throw new Error ("Credenciais inválidas")
        }

        //gerar o token
        const token = new Authenticator().generateToken({
            id: user.id
        })

        //enviar a resposta
        res.send({token})

    } catch(error) {
        if (res.statusCode === 200) {
            res.status(500).send({ message: "Internal server error" })
         } else {
            res.send({ message: error.sqlMessage || error.message })
         }
    }
}