import { Request, Response } from "express"
import { idGenerate } from "../services/idGenerated";
import { insertUser } from "../data/insertUser"
import { generateToken } from "../services/createToken";

export default async function createUser(req: Request, res: Response) {

    try {

        const { email, password } = req.body

        if (!email || !password) {
            throw new Error('Preencha os campos "email"e"password" para criar o usuário')
        }

        if (req.body.email.indexOf("@") === -1) {
            throw new Error("E-mail invalido, preencha corretamente");
        }

        if (password.length < 6) {
            throw new Error("Sua senha deve ter mais de seis caracteres");
        }
        const id: string = idGenerate();

        await insertUser(id, email, password);

        const token = generateToken({id});

        res.status(200).send({token});


    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })

    }
} 
