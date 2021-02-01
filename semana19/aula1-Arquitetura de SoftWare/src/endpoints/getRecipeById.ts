import { Request, Response } from "express"
import { getTokenData } from "../business/services/tokenGenerator";
import { selectRecipe} from "../data/selectRecipe";


export async function getRecipeById(req: Request, res: Response){
    try {

        const token = req.headers.authorization as string;

        getTokenData(token);
        
        const recipe = await selectRecipe(req.params.id);
    
        res.status(200).send({
            id: recipe.id,
            title: recipe.title,
            preparation: recipe.preparation,
            creation_date: recipe.creation_date
        });
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  }