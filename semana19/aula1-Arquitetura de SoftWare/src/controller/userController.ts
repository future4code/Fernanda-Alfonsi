import { Request, Response } from "express";
import { authenticationData, User } from "../business/entities/user";
import { getTokenData } from "../business/services/tokenGenerator";
import {businessDeleteUser, businessGetAllUsers, businessLogin, businessSignup} from "../business/userBusness"


export async function signup(req: Request, res: Response) {
   try {

    const {name, email, password, role} = req.body

     const token = await businessSignup(name, email, password, role)

      res
         .status(200)
         .send({message: "Usuário Criado",token});

   } catch (error) {
      res.status(400).send({
         message: error.message || error.sqlMessage
      })
   }
}




export async function login(req: Request, res: Response) {

   try {

     const { email, password} =req.body
     
     const token = await businessLogin(email,password)

      res.status(200).send({ message: "Usuário logado!", token });

   } catch (error) {
      res.status(400).send({ message: error.message });
   }
}

export async function getAllUsers(req: Request, res: Response){
    try {

        const token = req.headers.authorization as string;

      
        
        const users = await businessGetAllUsers(token);
    
        res.status(200).send( users );


    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  }

export async function deleteUserById(req: Request, res: Response){
    try {

        const input = {
            token:req.headers.authorization!,
            id:req.params.id,
        }
      
        
       await businessDeleteUser (input);
    
        res.status(200).send({message:"Usuário apagado com sucesso"});

        
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  }