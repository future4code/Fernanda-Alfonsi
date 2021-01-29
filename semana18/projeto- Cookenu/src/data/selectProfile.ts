import { connection } from "../index";

export async function selectProfile(id: string):Promise<any> {
    const userTableName = "UserCook";  
    const result = await connection.raw(`
    SELECT *
    FROM ${userTableName}
    WHERE id='${id}';
    `)

    return result[0][0]
   
}