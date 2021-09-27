import express, { Request, Response } from "express";
import cors from "cors"
import { AddressInfo } from "net";
import { countries } from "./data";

const app = express();
app.use(express.json()) //recebendo body em formato json
app.use(cors())

//Endpoint 1 - Buscar todos os países

app.get('/countries', (req: Request, res: Response)=>{
   try{
      const name: string = req.query.name as string
      const country: country | undefined = countries.filter(country)=> country
   }catch(error){

   }
})

//servidor
const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});

