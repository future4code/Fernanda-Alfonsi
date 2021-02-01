import { Request, Response } from "express"
import { getData } from "../business/services/getData";
import { selectProfile } from "../data/selectProfile";


export async function getProfile(req: Request, res: Response){
    try {

        const token = req.headers.authorization as string;

        const authenticationData = getData(token);
        
        const user = await selectProfile(authenticationData.id);
    
        res.status(200).send({
          id: user.id,
          name: user.name,
          email: user.email,
        });
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  }