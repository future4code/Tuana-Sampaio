import express, { Request, Response } from "express";
import cors from "cors"
import { AddressInfo } from "net";
import { countries } from "./data";

const app = express();
app.use(express.json()) //recebendo body em formato json
app.use(cors())

//Endpoint 1 - Buscar todos os países

app.get('/countries/all', (req: Request, res: Response) => {
   res.status(200).send(countries)
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

