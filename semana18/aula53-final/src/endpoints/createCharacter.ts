import { Request, Response } from "express"
import { CharacterDatabase } from "../database/CharacterDatabase"
import { Character } from "../entities/Character"
import { CustomError } from "../errors/CustomError"
import { InputError } from "../errors/InputError"

export default async function createCharacter(
   req: Request,
   res: Response
): Promise<void> {

   try {
      const { name, gender, description } = req.body

      if (!name || !gender) {
         // res.status(406)
         // throw new Error("Invalid input")

         // throw new CustomError("Invalid input", 406)

         throw new InputError()
      }

      const character = new Character(
         name,
         gender,
         description
      )

      const characterDatabase = new CharacterDatabase()
      await characterDatabase.create(character)

      res.status(201).end()
   } catch (error: any) {
      res.status(error.statusCode || 400).send(error.message || "Erro inesperado")
   }
}
