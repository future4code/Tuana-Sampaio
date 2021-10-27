import { Request, Response} from "express"
import connection from "../../connection"
import { getTokendata } from "../../services/authenticator"
import generateId from "../../services/idgenerator"
import { recipesTableName } from "../../types"


export default async function createRecipe(
    req: Request,
    res: Response
): Promise<void>{
    try {
        const token = req.headers.authorization

        //o que será passado no body pelo usuário
        const {title, description} = req.body

        //id do autor da receita
        const tokenData = getTokendata(token!)

        //validação se o token foi passado
        if(!tokenData){
            res.statusCode = 401
            throw new Error("Unauthorized");   
        }
        //validação se título e descrição foram preenchidos
        if(!title || !description){
            res.statusCode = 422
            throw new Error("'title' and 'description' required");   
        }

        //gerar um id para cada receita
        const id = generateId()

        //data de criação da receita
        const createdAt = new Date()

        //inserir a receita na tabela
        await connection(recipesTableName).insert({
            id, 
            title,
            description,
            created_at: createdAt,
            author_id: tokenData!.id
        })

        //responder a requisição em caso de sucesso
        res.send("Recipe succesfully created!")
        
        //responder a requisição em caso de erro
    } catch (error) {
        console.log(error)
        if(res.statusCode === 200){
            res.status(500).send("Internal server error")
        }else {
            res.send(error)
        }
    }
}