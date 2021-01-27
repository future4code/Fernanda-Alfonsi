import { Request, Response } from "express";
import {selectAllUsers} from "./data"
import {selectUsersByName,selectUsersByType, selectOrderUsers, selectLimitUsers, selectAllFunctions} from "./data"
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
         throw new Error("No user found")
      }

      res.status(200).send(users)
      
   } catch (error) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
}


export const getUsersByType = async(req: Request,res: Response): Promise<void> =>{
   try {
      const {type} = req.params as searchUser
      const users = await selectUsersByType(`${type}`)
     

      if(!users.length){
         res.statusCode = 404
         throw new Error("No user found")
      }

      res.status(200).send(users)
      
   } catch (error) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
}

// Exercício 2

export const getOrderUsers = async(req: Request,res: Response): Promise<void> =>{
   try {
      const {orderBy="name"} = req.query as searchUser
      const users = await selectOrderUsers(`${orderBy}`)

      if (orderBy !== "name" && orderBy !== "type"){
         res.statusCode = 422
         throw new Error(`Valores válidos para "orderBy" são "name" e "type"`)
      }

      if(!users.length){
         res.statusCode = 404
         throw new Error("No user found")
      }

      res.status(200).send(users)
      
   } catch (error) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
}

// Exercício 3

export const getLimitUsers = async(req: Request,res: Response): Promise<void> =>{
   try {
      const resultsPerPage: number = 5
      const users = await selectLimitUsers(resultsPerPage)

      

      if(!users.length){
         res.statusCode = 404
         throw new Error("No userrr found")
      }

      res.status(200).send(users)
      
   } catch (error) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
}

// Exercício 4

export const getAllFunctions = async(req: Request,res: Response): Promise<void> =>{
   try {
      const {
         name,
         type,
         orderBy = "name",
         orderType = "DESC",
         page = "1"
      } = req.query as searchUser

      const resultsPerPage: number = 5
      const pageNumber: number = Number(page)
      const offset: number = resultsPerPage * (pageNumber - 1)
      

      const users = await selectAllFunctions(
         `${name}`, 
         `${type}`, 
         `${orderBy}`, 
         `${orderType}`,  
         `${offset}`, 
         `${resultsPerPage}`)

      if (orderBy !== "name" && orderBy !== "type"){
         res.statusCode = 422
         throw new Error(`Valores válidos para "orderBy" são "name" e "type"`)
      }

      if (
         orderType !== "ASC" &&
         orderType !== "DESC"
      ) {
         res.statusCode = 422
         throw new Error(`Valores válidos para "orderType" são "ASC" e "DESC"`)
      }

      if (!pageNumber) {
         res.statusCode = 422
         throw new Error(`"page" deve ser um número positivo`)
      }

      if(!users.length){
         res.statusCode = 404
         throw new Error("No useeeerrr found")
      }

     

      res.status(200).send(users)
      
   } catch (error) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
}