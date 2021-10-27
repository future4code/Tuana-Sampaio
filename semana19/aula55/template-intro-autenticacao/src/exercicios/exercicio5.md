a. Crie uma função que retorne as informações de um usuário a partir do email
R-const getUserByEmail = async(email: string): Promise<any> => {
   const result = await connection
     .select("*")
     .from('to_do_list_users')
     .where({ email });

   return result[0];
  }
}