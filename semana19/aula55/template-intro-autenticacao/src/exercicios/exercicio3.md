a. O que a linha as string faz? Por que precisamos usar ela ali?

R- ela informa que a chave que volta será uma string. É preciso colocar porque senão o typescript reclama e pode dessa forma quebrar o código.

b. Agora, crie a função que gere o token. Além disso, crie um type  para representar o input dessa função.
R- export class Authenticator{
    public generateToken = (
        payload: authenticationData
    ): string=>{
           
      const token = sign(
       payload,
       process.env.JWT_KEY,
        { expiresIn: "10h" }
      )
  
      return token
    }
  
    public getTokenData = (
      token : string
    ): authenticationData | null=>{
      try{

        const tokenData = verify(
          token,
          process.env.JWT_KEY
      ) as authenticationData

      return{
        id: tokenData.id
      } 

      }catch(error){
        return null
      }
    }
  }