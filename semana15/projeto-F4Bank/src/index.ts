import express, { Express, Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import {cadastro, conta} from "./acaunts"

const app: Express = express();

app.use(express.json());
app.use(cors());

app.get("/users", (req:Request, res:Response) => {
   res.send(cadastro)
 })

 

app.post("/users/create", (req: Request, res: Response)=>{

   let errorCode: number = 400;
       
      const {nome, CPF, dataDeNascimentoString}=req.body
      const [day,month,year]= dataDeNascimentoString.split("/")
      const dataDeNascimento:Date = new Date(`${year}-${month}-${day}`)
      const idadeEmMilisegundos:number = Date.now() -  dataDeNascimento.getTime()
      const idadeEmAnos:number = idadeEmMilisegundos/1000/60/60/24/365


      const cpfCadastrado:conta|undefined = cadastro.find((cliente)=>cliente.CPF ===req.body.CPF)


      const reqBody: conta = {
         "nome":nome, 
         "CPF":CPF ,
         "dataDeNascimento":dataDeNascimento ,
         "saldo":0,
         "extratoDoUsuario": [],
        
       }

   try {


      if(idadeEmAnos<18){
         res.statusCode = 406
         throw new Error("Para abrir uma conta você deve ter 18 ano")
      }

      if(cpfCadastrado){
         res.statusCode = 404
         throw new Error("Este CPF já está cadastrado")
      }


       if(!reqBody.nome || !reqBody.CPF || !reqBody.dataDeNascimento){
         res.statusCode = 422;
           throw new Error("Algum campo está inválido. Preencha corretamente.");
       }

       cadastro.push(reqBody);
   
       res.status(200).send({message: "Cadastro inserido com sucesso!"});
       
   } catch (error) {
       res.status(errorCode).send({message: error.message});
   }

});

//Este endpoint retorna o saldo do cliente através de uma busca pelo CPF.
app.get("/users/saldo", (req: Request, res: Response) => {
   let errorCode: number = 400;
   try {
       const cpf: string = req.query.cpf as string;

       if (!cpf) {
           errorCode = 422;
           throw new Error("CPF inválido. Por favor preencha corretamente");
       }

       const cliente = cadastro.find(((u: conta) => u.CPF === cpf));
       if (!cliente) {
           errorCode = 404;
           throw new Error("CPF invalido, não encontramos o cliente");
       }

       const result = String(`Olá ${cliente.nome}, seu saldo é de R$ ${cliente.saldo}`)
       res.status(200).send(result);

   } catch (error) {
       res.status(errorCode).send(error.message);
   }

});
// 3. Crie um endpoint `put` que receba um nome, um CPF e um valor. Ele deve adicionar o valor ao saldo do usuário. O nome e o CPF devem ser iguais ao que estiver salvo no sistema Se algum dos dados for diferente, exiba uma mensagem de erro.
app.put("/users", (req: Request, res: Response)=>{

   let errorCode: number = 400;

   try {

      const nome: string = req.query.nome as string;
      const cpf: string = req.query.cpf as string;

       const reqBody: {saldo: number} = {
           saldo: Number(req.body.saldo),
         }

      
    //    if(!nome || !cpf){
    //     errorCode = 422;
    //     throw new Error("Nome ou CPF inválidos. Preencha corretamente.");
    // }

   

       const myUserIndex = cadastro.findIndex(((u: conta) => ( u.nome === nome) || (u.CPF=== cpf)));
    

       if (myUserIndex  === -1) {
           errorCode = 404;
           throw new Error("Cliente não encontrado");
       }

       cadastro[myUserIndex].saldo = reqBody.saldo;
   
       res.status(200).send({message: "Saldo inserido com sucesso!"});
       
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