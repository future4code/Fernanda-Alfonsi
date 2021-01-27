import { Request, Response } from "express"
import { getData } from "../services/getData";
import { selectUserById } from "../data/selectUserById";


export default async function getUserById(req: Request, res: Response){
    try {

        const token = req.headers.authorization as string;
        console.log("p1",token)
   
        const authenticationData = getData(token);
        console.log(token)
        const user = await selectUserById(authenticationData.id);
    
        res.status(200).send({
          id: user.id,
          email: user.email,
        });
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  }