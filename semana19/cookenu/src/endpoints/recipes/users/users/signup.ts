import { Request, Response} from "express"
import connection from "../../../../connection"

import { generateToken } from "../../../../services/authenticator"
import { generateHash } from "../../../../services/hashManager"
import generateId from "../../../../services/idgenerator"
import { userTableName } from "../../../../types"

export default async function signup(
    req:Request,
    res: Response
): Promise<void> {
    try {
        const { name, email, password} = req.body

        //validação se título e descrição foram preenchidos
        if(!name || !email || !password){
            res.statusCode = 422
            throw new Error("'name', 'email' and 'password' required");   
        }
        
        if(password.length < 6){
            res.statusCode = 422
            throw new Error("'password' has to be 6 characters minimun");   
        }
        //verificar se já existe um usuário cadastrado
        const [user] = await connection(userTableName).where({email})

        if(user){
            res.statusCode = 409
            throw new Error("'email' already exist");   
        }
        const id: string = generateId()

        const cypherPassword: string = generateHash(password)

        const token: string = generateToken({id})

        await connection(userTableName).insert({id, name, email, password: cypherPassword})
        
        res.send({token})

    } catch (error) {
        console.log(error)
        res.status(500).send("Internal server error")
    }
} 