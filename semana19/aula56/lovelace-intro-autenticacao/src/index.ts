import app from "./app"
import editUser from './endpoints/editUser'
import createUser from './endpoints/createUser'
import { login } from "./endpoints/login"
import {getUser} from './endpoints/getUser'
import { HashManager } from "./services/HashManager"

app.post('/users/signup', createUser)
app.post("/users/login", login)
app.put('/users', editUser)
app.get('/users/profile', getUser)

const hash = new HashManager().generateHash("banananinha")

//console.log(
    //new HashManager().compareHash(
      //  "banananinha",
      //  "ciphertext"
 //   )
//)