import { Request, Response } from "express";
import {selectAllUsers} from "./data"
import {selectUsersByName} from "./data"
import {searchUser} from "./types/searchUser"
export const getAllUsers = async(req: Request,res: Response): Promise<void> =>{
    try {
       const users = await selectAllUsers()
 
       if(!users.length){
          res.statusCode = 404
          throw new Error("No Users found")
       }
 
       res.status(200).send(users)
       
    } catch (error) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }


 export const getUsersByName = async(req: Request,res: Response): Promise<void> =>{
   try {
      const {name} = req.query as searchUser
      const users = await selectUsersByName(`${name}`)
     

      if(!users.length){
         res.statusCode = 404
         throw new Error("No users found")
      }

      res.status(200).send(users)
      
   } catch (error) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
}