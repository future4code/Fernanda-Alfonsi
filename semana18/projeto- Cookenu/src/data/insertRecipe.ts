import { connection } from "../index";
import { Recipes} from "../types/recipes"


export async function insertRecipe(recipe:Recipes):Promise<any> {
    try{
        const result = await connection.raw(`
  
    INSERT INTO Recipes (id, title, preparation, creation_date, cook_user_id)
    VALUES ('${recipe.id}', '${recipe.title}', '${recipe.preparation}', '${recipe.creation_date}', '${recipe.cook_user_id}');
    `)

   
    return result[0]

    }catch(error){
        console.log(error)
        throw new Error(error.sqlMessage)

    }
    
    

}