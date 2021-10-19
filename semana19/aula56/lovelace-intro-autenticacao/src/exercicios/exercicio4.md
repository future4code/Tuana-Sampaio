a. Altere o endpoint para que retorne um erro de Unauthorized para os usuários que "não sejam normais" e tentem acessar esse endpoint
R- if(tokenData.role !== "ADMIN"){
         res.statusCode = 403 //forbidden
         res.statusMessage = "Unauthorized"
         throw new Error()
      }