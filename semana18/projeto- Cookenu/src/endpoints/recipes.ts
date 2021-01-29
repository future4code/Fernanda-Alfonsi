import { Request, Response } from "express";
import { selectUserByEmail } from "../data/selectUserByEmail";
import { generateToken, getTokenData } from "../services/tokenGenerator";
import { compare } from "../services/hashManager";
import { Recipes } from "../types/recipes";
import { generateid } from "../services/idGenerator"
import dayjs from 'dayjs';
export async function createRecipe(req: Request, res: Response) {

   try {

    var customParseFormat = require('dayjs/plugin/customParseFormat')
    dayjs.extend(customParseFormat)

    let editCreateDate = dayjs(req.body.creation_date, 'DD/MM/YYYY').format('YYY/MM/DD')

     const id: string = generateid();

     const cookUserId = getTokenData(req.headers.authorization as string) 
     
     const recipe: Recipes = {
        id,
        title: req.body.title,
        preparation: req.body.preparation,
        creation_date: editCreateDate;
        cook_user_id: cookUserId
    }
     

      if (!recipe.title || !recipe.preparation || recipe.creation_date) {
         throw new Error('Os campos "title", "preparation" e  "creation_date", são obrigatórios');
      }

      const user = await insertRecipe( recipe);

      if (!user) {
         throw new Error("User not found!");
      }

      const passwordIsCorrect: boolean = compare(
         input.password,
         user.password
      )

      if (!passwordIsCorrect) {
         throw new Error("Incorrect Password.");
      }

      const token = generateToken({
         id: user.id,
         
      });
      res.status(200).send({ token });

   } catch (error) {
      res.status(400).send({ message: error.message });
   }


}