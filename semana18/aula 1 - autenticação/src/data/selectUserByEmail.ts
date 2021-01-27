import { connection } from "../index";

export async function selectUserByEmail(email: string):Promise<any> {
    const userTableName = "User";  
    const result = await connection.raw(`
    SELECT *
    FROM ${userTableName}
    WHERE email='${email}';
    `)

    return result[0][0]
   
}