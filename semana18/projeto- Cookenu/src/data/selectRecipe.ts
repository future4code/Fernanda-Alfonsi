import { connection } from "../index";

export async function selectRecipe(id: string):Promise<any> {
    const userTableName = "Recipes";  
    const result = await connection.raw(`
    SELECT *
    FROM ${userTableName}
    WHERE id='${id}';
    `)

    return result[0][0]
   
}