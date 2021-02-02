import { connection } from "./conection";
import {User} from "../business/entities/user"


export async function insertUser(user:User):Promise<any> {
    const userTableName = "UserS19A1"
    const result = await connection.raw(`
  
    INSERT INTO ${userTableName}(id, name, email, password, role)
    VALUES ('${user.id}', '${user.name}','${user.email}','${user.password}', '${user.role}');
    `)
    
    return result[0]

}


export async function selectUserByEmail(email: string):Promise<any> {
    const userTableName = "UserS19A1";  
    const result = await connection.raw(`
    SELECT *
    FROM ${userTableName}
    WHERE email='${email}';
    `)

    return result[0][0]

}

export async function selectAllUsers():Promise<any> {
    const userTableName = "UserS19A1";  
    const result = await connection.raw(`
    SELECT *
    FROM ${userTableName};
    `)

    return result[0]
   
}

export async function deleteUser(id:string):Promise<void> {
    const userTableName = "UserS19A1";  
    const result = await connection.raw(`
    DELETE FROM ${userTableName} WHERE id='${id}';
    `)

    return result[0]
   
}