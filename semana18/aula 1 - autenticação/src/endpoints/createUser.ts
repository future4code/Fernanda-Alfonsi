import {Request,Response} from "express"
import { idGenerate } from "../services/idGenerated";
import{insertUser}from "../data/insertUser"

export default async function createUser(req: Request, res: Response){
    
    try{

        const { email, password} = req.body

        if (!email ||!password) {
          throw new Error('Preencha os campos "email"e"password" para criar o usuário')
        }

        const id: string = idGenerate();

        await insertUser(id, email, password);


    }catch(error){
        res.status(400).send({
            message: error.message || error.sqlMessage})

    }
} 
