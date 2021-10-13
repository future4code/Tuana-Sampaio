import { Request, Response } from "express";
import { CharacterDatabase } from "../database/CharacterDatabase";
import { InputError } from "../errors/InputError";

export default async function deleteCharacter(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const { id } = req.params

      if (!Number(id)) {
         // throw new CustomError("Invalid input", 406)
         throw new InputError()
      }

      const characterDatabase = new CharacterDatabase()
      await characterDatabase.deleteById(Number(id))

      res.status(200).end()

   } catch (error: any) {
      res.status(error.statusCode || 400).send(error.message || "Unexpected error")
   }
}
