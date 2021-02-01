import { Request, Response } from "express";
import { selectUserByEmail } from "../data/selectUserByEmail";
import { generateToken } from "../business/services/tokenGenerator";
import { compare } from "../business/services/hashManager";
import {loginInput} from "../types/loginInput"
export async function login(req: Request, res: Response) {

   try {

     const input: loginInput = {
        email: req.body.email,
        password: req.body.password
     }

      if (! input.email || ! input.password) {
         throw new Error('Os campos "email" e  "password", são obrigatórios');
      }

      const user = await selectUserByEmail( input.email);

      if (!user) {
         throw new Error("User not found!");
      }

      const passwordIsCorrect: boolean = compare(
         input.password,
         user.password
      )

      if (!passwordIsCorrect) {
         throw new Error("Incorrect Password.");
      }

      const token = generateToken({
         id: user.id,
         
      });
      res.status(200).send({ token });

   } catch (error) {
      res.status(400).send({ message: error.message });
   }


}

