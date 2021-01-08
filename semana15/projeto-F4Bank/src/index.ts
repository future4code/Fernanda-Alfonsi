import express, { Express, Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import {cadastro, conta} from "./acaunts"

const app: Express = express();

app.use(express.json());
app.use(cors());

app.get("/user", (req:Request, res:Response) => {
   res.send(cadastro)
 })

app.post("/user", (req: Request, res: Response)=>{

   let errorCode: number = 400;

   try {

       const reqBody: conta = {
         "nome":req.body.name, 
         "cpf": req.body.cpf ,
         "dataDeNascimento": req.body.dataDeNascimento ,
         "saldo":req.body.saldo,
         "extratoDoUsuario": [],
        
       }

       if(!reqBody.nome || !reqBody.cpf || !reqBody.dataDeNascimento || !reqBody.saldo){
           errorCode = 422;
           throw new Error("Algum campo está inválido. Preencha corretamente.");
       }

       cadastro.push(reqBody);
   
       res.status(200).send({message: "Cadastro inserido com sucesso!"});
       
   } catch (error) {
       res.status(errorCode).send({message: error.message});
   }

});

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});