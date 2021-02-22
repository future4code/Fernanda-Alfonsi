import { connection } from "../index";
import {User} from "../types/user"


export async function insertUser(user:User):Promise<any> {
    
    const result = await connection.raw(`
  
    INSERT INTO UserCook (id, name, email, password)
    VALUES ('${user.id}', '${user.name}','${user.email}','${user.password}');
    `)

    return result[0]

}