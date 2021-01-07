//importando express com Request e Response e cors
import express, {Request, Response} from 'express';
import cors from 'cors';

//extra: importando configuração de rede do node
import { AddressInfo } from "net";
//iniciando a aplicação web com express
const app = express();

//ativando os módulos de Bodyparser e cors
app.use(express.json());
app.use(cors());

type user = {
    id: number,
    name: string,
    email: string,
    type: UserType,
    age: number
}

enum UserType {
    ADMIN = "ADMIN",
    NORMAL = "NORMAL"
}
let users: user[] = [
    {
        id: 1,
        name: "Alice",
        email: "alice@email.com",
        type: UserType.ADMIN,
        age: 12
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@email.com",
        type: UserType.NORMAL,
        age: 36
    },
    {
        id: 3,
        name: "Coragem",
        email: "coragem@email.com",
        type: UserType.NORMAL,
        age: 21
    },
    {
        id: 4,
        name: "Dory",
        email: "dory@email.com",
        type: UserType.NORMAL,
        age: 17
    },
    {
        id: 5,
        name: "Elsa",
        email: "elsa@email.com",
        type: UserType.ADMIN,
        age: 17
    },
    {
        id: 6,
        name: "Fred",
        email: "fred@email.com",
        type: UserType.ADMIN,
        age: 60
    }
]

// Exercício-1
//a-Qual método HTTP você deve utilizar para isso? 
// Resposta: O metodo é o GET.
// b-Como você indicaria a entidade que está sendo manipulada? 
// Resposta: A entidade seria o user, sendo indicada pela sintaxe "/user" indicada no parâmetro na URL



app.get("/user", (req:Request, res:Response)=>{
      const userList=users;
      res.status(200).send(userList)
})

// Exercício 2
// a. Como você passou os parâmetros de type para a requisição? Por quê?

// Resposta: Passei os parâmetros usando o query params pois é melhor em caso de buscas dentro de um mesmo conjunto de dados.   

// b. Você consegue pensar em um jeito de garantir que apenas `types` válidos sejam utilizados?
// Resposta: Usando uma estrutura de if para tratar os erros  conseguimos 


app.get("/user", (req: Request, res: Response) => {
    let errorCode: number = 400;
    try {
        const type:string = (req.query.type as string).toUpperCase();

        if (type!== UserType.ADMIN && type!== UserType.NORMAL ) {
            errorCode = 422;
            throw new Error("tipo inválido. Por favor preencha corretamente");
        }

        const myUser = users.filter((u: user) => u.type === type.toUpperCase() )

        if (!myUser) {
            errorCode = 404;
            throw new Error("Usuário não encontrado");
        }

        const result = myUser;
        res.status(200).send(result);

    } catch (error) {
        res.status(errorCode).send(error.message);
    }
})

// Exercício 3
//a.Qual é o tipo de envio de parâmetro que costuma ser utilizado por aqui? Resposta:

//b.Altere este endpoint para que ele devolva uma mensagem de erro caso nenhum usuário tenha sido encontrado.Resposta:

app.get("/user", (req: Request, res: Response) => {
    let errorCode: number = 400;
    try {
        const nome: string = req.query.nome as string;

        if (!nome) {
            errorCode = 422;
            throw new Error("Nome inválido. Por favor preencha corretamente");
        }

        const myUser = users.find(((u: user) => u.name.toLowerCase() === nome.toLowerCase()));
        if (!myUser) {
            errorCode = 404;
            throw new Error("Usuário não encontrado");
        }

        const result = myUser;
        res.status(200).send(result);

    } catch (error) {
        res.status(errorCode).send(error.message);
    }

});

// Exercício 4
//a.Mude o método do endpoint para PUT. O que mudou? Resposta:

//b.Você considera o método PUT apropriado para esta transação? Por quê?.Resposta:

app.post("/user", (req: Request, res: Response)=>{

    let errorCode: number = 400;

    try {

        const reqBody: user = {
            id: Date.now(),
            name: req.body.name,
            email: req.body.email,
            type: req.body.type,
            age: req.body.age,
        }

        if(!reqBody.age || !reqBody.email || !reqBody.type || !reqBody.name){
            errorCode = 422;
            throw new Error("Algum campo está inválido. Preencha corretamente.");
        }

        users.push(reqBody);
    
        res.status(200).send({message: "Usuário inserido com sucesso!"});
        
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
  
