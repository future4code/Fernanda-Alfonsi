import { connection } from "./conection";
import {User} from "../business/entities/user"


export async function insertUser(user:User):Promise<any> {
    
    const result = await connection.raw(`
  
    INSERT INTO UserCook (id, name, email, password)
    VALUES ('${user.id}', '${user.name}','${user.email}','${user.password}', '${user.role}');
    `)

    return result[0]

}




export async function selectProfile(id: string):Promise<any> {
    const userTableName = "UserCook";  
    const result = await connection.raw(`
    SELECT *
    FROM ${userTableName}
    WHERE id='${id}';
    `)

    return result[0][0]
   
}