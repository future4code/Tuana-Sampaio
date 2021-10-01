import express, {Express} from 'express'
import cors from 'cors'
import { AddressInfo } from "net";
import { connection } from '../connection';
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();

app.use(express.json());
app.use(cors());

//criar o usuário
app.post("/user", async(req,res)=> {
    try{
        await connection.raw(`
        INSERT INTO users(name, nickname, email)
        VALUES(
            "${req.body.name}",
            "${req.body.nickname}",
            "${req.body.email}",
        )
        `)
        res.status(201).send("Created")
    }catch(error){
        console.log(error);
        res.status(500).send(error)
    }
})


//criar tarefa
app.post("/task", async(req,res)=> {
    try{
        await connection.raw(`
        INSERT INTO users(title, description, limitDate, creatorUserId)
        VALUES(
            "${req.body.title}",
            "${req.body.description}",
            "${req.body.limitDate}",
            "${req.body.creatorUserId}",
        )
        `)
        res.status(201).send("Task Created")
    }catch(error){
        console.log(error);
        res.status(500).send(error)
    }
})

//Pegar tarefa pelo id
app.get("/task/:id", async(req,res)=> {
    try{
        await connection.raw(`
        SELECT * FROM tasks(id, taskId, title, description, limitDate, status, creatorUserId, creatorUserNickname)
    `)
        res.status(201).send("OK")
    }catch(error){
        console.log(error);
        res.status(500).send("Task not found")
    }
})


//Pegar usuário pelo id
app.get("/user/:id", async(req,res)=> {
    try{
        await connection.raw(`
        SELECT * FROM users(id, nickname)
    `)
        res.status(201).send("OK")
    }catch(error){
        console.log(error);
        res.status(500).send("Usuário não encontrado")
    }
})

//Editar usuário
app.put("/user/edit/:id", async(req,res)=> {
    try{
        await connection("users")
        .update({
            name: req.body.name,
	        nickname: req.body.nickname,
            email: req.body.email
        })
        .where({id:req.params.id})
        res.end()

    }catch(error){
        console.log(error);
        res.status(500).send(error)
    }
})


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});