import { connection } from "../index";

export async function selectOtherProfile(id: string):Promise<any> {
    const userTableName = "UserCook";  
    const result = await connection.raw(`
    SELECT *
    FROM ${userTableName}
    WHERE id='${id}';
    `)

    return result[0][0]
   
}