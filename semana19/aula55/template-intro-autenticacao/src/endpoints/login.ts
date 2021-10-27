import { Request, Response } from "express";
import { connection } from "../data/connection";
import { Authenticator } from "../services/Authenticator";

export const login = async(
    req: Request,
    res: Response
)=>{
    try{
        //buscar usuário por email
        const {email, password} = req.body
        const [user] = await connection("to_do_list_users")
        .where({email})

        //conferir se o usuario existe e a senha está correta
        if (!user || user.password !== password){
            res.statusCode = 401 // "Unauthorized"
            throw new Error ("Credenciais inválidas")
        }

       // Validação do email
        if (!req.body.email || req.body.email.indexOf("@") === -1) {
            throw new Error("Invalid email");
    }

        //Validação da senha
        if (!req.body.password || req.body.password.length < 6) {
            throw new Error("Invalid password");
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