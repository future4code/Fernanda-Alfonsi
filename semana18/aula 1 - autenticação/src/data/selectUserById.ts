import { connection } from "../index";

export async function selectUserById(id: string):Promise<any> {
    const userTableName = "User";  
    const result = await connection.raw(`
    SELECT *
    FROM ${userTableName}
    WHERE id='${id}';
    `)

    return result[0][0]
   
}