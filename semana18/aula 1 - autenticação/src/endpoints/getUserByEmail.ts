import { Request, Response } from "express"
import { generateToken } from "../services/createToken";
import { selectUserByEmail } from "../data/selectUserByEmail";


export default async function getUserByEmail(req: Request, res: Response){
    try {

        const { email, password } = req.body

        if (!email || email.indexOf("@") === -1 ) {
            throw new Error('Preencha o campo "email" corretamente')
        }

          
      const user = await selectUserByEmail(email);

     

      if ( user[0].password !== password) {
        throw new Error("Senha inválida, tente novamenteee");
      }

  
      const token = generateToken({
        id: user.id,
      });
  
      res.status(200).send({
        token,
      });
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  }