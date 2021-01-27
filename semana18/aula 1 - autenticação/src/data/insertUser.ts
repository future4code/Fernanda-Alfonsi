import { connection } from "../index";

export async function insertUser(id: string, email: string, password: string):Promise<any> {
    const userTableName = "User";  
    const result = await connection.raw(`
    INSERT INTO ${userTableName} (id, email, password)
    VALUES ('${id}', '${email}','${password}');
    `)

    return result[0]
   
}