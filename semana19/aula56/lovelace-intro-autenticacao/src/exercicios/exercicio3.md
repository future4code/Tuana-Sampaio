*a. Altere a sua tabela de usuários para ela possuir uma coluna `role`. Considere que pode assumir os valores `normal`  e `admin`. Coloque `normal` como valor padrão.*
R- ALTER TABLE to_do_list_users ADD COLUMN role ENUM DEFAULT ("NORMAL", "ADMIN") DEFAULT "NORMAL"

*b. Altere o type `AuthenticationData e a função getData()` para representarem esse novo tipo no token.*
R- export enum USER_ROLES{
  NORMAL = "NORMAL",
  ADMIN = "ADMIN"
}

export interface authenticationData{
  id: string
  role: USER_ROLES
}

export interface user extends authenticationData {
   email: string
   name: string
   nickname: string
   password:string
}

const token = new Authenticator().generateToken({ id, role })

c. *Altere o cadastro para receber o tipo do usuário e criar o token com essa informação*
R- const { name, nickname, email, password, role } = req.body

const cipherPassword: string = new HashManager().generateHash(password)

    const newUser: user = { id, name, nickname, email, password:cipherPassword, role }


d*. Altere o login para criar o token com o `role` do usuário*
R- // gerar o token
    const token = new Authenticator().generateToken({
      id: user.id,
      role: user.role
    })