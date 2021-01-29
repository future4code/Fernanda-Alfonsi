import { connection } from "../index";



export async function selectUserByEmail(email:string):Promise<any> {
    
    const result = await connection.raw(`
    SELECT *
    FROM UserCook 
    WHERE email= '${email}';
    `)
    return result[0][0]
}