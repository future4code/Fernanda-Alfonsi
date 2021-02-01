import { Request, Response } from "express";
import { getTokenData } from "../business/services/tokenGenerator";
import { Recipes } from "../types/recipes";
import { generateid } from "../business/services/idGenerator"
import dayjs from 'dayjs';
import {insertRecipe} from "../data/insertRecipe"


export async function createRecipe(req: Request, res: Response) {

   try {

    var customParseFormat = require('dayjs/plugin/customParseFormat')
    dayjs.extend(customParseFormat)

     let editCreateDate = dayjs(req.body.creation_date, 'DD/MM/YYYY').format('YYYY/MM/DD')

     const id: string = generateid();

     const token = req.headers.authorization as string

     const cookUserId = getTokenData(token) 

     const recipe: Recipes = {
        id,
        title: req.body.title,
        preparation: req.body.preparation,
        creation_date: editCreateDate,
        cook_user_id: cookUserId.id
    }
     

      if (!recipe.title || !recipe.preparation || !recipe.creation_date) {
         throw new Error('Os campos "title", "preparation" e  "creation_date", são obrigatórios');
      }

       await insertRecipe(recipe)

    
      res.status(200).send({ recipe });

   } catch (error) {
      res.status(400).send({ message: error.message });
   }


}