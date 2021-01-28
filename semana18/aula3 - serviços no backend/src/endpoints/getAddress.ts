import { Request, Response } from "express";
import {getAddressByCep} from "../services/addressManager"
import {address} from "../types/Address";

export default async function getAddress(req:Request, res: Response){
    let errorCode:number=400
    try{

        const cep = req.params.cep

        console.log("CEP",req.params.cep)
        
        if(isNaN(Number(cep)) || cep.includes("-")) {
            throw new Error("Cep inválido, preencha apenas com números")
        }

      const address:address = await getAddressByCep(cep)

      res.status(200).send(address)

    }catch(error){
        res.status(errorCode).send(error.message)
    }
}