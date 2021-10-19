import { Character } from "../entities/Character"
import { BaseDatabase } from "./BaseDatabase"

export class CharacterDatabase extends BaseDatabase {
  async create(character: Character) {
    await BaseDatabase.connection("character")
      .insert(character)
  }

  async getAll() {
    return BaseDatabase.connection("character").select()
  }

  async deleteById(id: number) {
    return BaseDatabase.connection("character")
      .delete()
      .where({ id })
  }
}


