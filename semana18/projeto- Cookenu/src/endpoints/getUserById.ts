import { Request, Response } from "express"
import { getData } from "../services/getData";
import { selectOtherProfile } from "../data/selectOtherProfile";


export async function getUserById(req: Request, res: Response){
    try {

        const token = req.headers.authorization as string;

        getData(token);
        
        const user = await selectOtherProfile(req.params.id);
    
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