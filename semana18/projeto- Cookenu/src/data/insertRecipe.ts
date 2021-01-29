import { connection } from "../index";
import { Recipes} from "../types/recipes"


export async function insertUser(recipe:Recipes):Promise<any> {
    
    const result = await connection.raw(`
  
    INSERT INTO UserCook (id, name, email, password)
    VALUES ('${recipe.id}', '${recipe.title}', '${recipe.preparation}', '${recipe.creation_date}', '${recipe.cook_user_id}');
    `)

    return result[0]

}