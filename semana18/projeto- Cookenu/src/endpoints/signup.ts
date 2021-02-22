import { Request, Response } from "express";
import {insertUser} from "../data/insertUser";
import { generateid } from "../services/idGenerator"
import { generateToken } from "../services/tokenGenerator";
import { hash } from "../services/hashManager"
import { User } from "../types/user";


export async function signup(req: Request, res: Response) {
   try {

    const {name, email, password} = req.body

      if (!name || !email || !password) {
         throw new Error('Os campos "name","email" e  "password", são obrigatórios')
      }

      if (password.length < 6) {
        throw new Error('Sua senha deve ter mais de seis caracteres')
     }


      const id: string = generateid();

      const cypherPassword: string = hash(password)

      const user: User={
          id,
          name,
          email,
          password:cypherPassword

      }

      await insertUser(user)

      const token = generateToken({id});

      res
         .status(200)
         .send({token});

   } catch (error) {
      res.status(400).send({
         message: error.message || error.sqlMessage
      })
   }
}