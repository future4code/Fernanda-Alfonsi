import { connection } from "../index";

export async function insertUser(id: string, email: string,  
    password: string):Promise<any> {
       
    const result = await connection.raw(`
    INSERT INTO User ("id","email", "password") 
    VALUES (${id}, ${email},${password});
    `)

    return result[0]
   
}