import { Request, Response} from "express"
import connection from "../../connection"
import { recipesTableName } from "../../types"


export default async function getRecipesById(
    req:Request,
    res: Response
): Promise<void>{
    try {
        //guardar a receita
        const [recipe] = await connection(recipesTableName)
        .where({ id:req.params.id})

        if(!recipe){
            res.statusCode = 404
            throw new Error("Recipe not found");
            
        }

        res.send({
            id: recipe.id,
            title: recipe.title,
            description: recipe.description,
            createdAt: recipe.created_at
        })
        
    } catch (error) {
        console.log(error)
        if(res.statusCode === 200){
            res.status(500).send("Internal server error")
        }else {
            res.send(error)
        }
    }
}
