import {connection} from "./index"
import {searchUser} from "./types/searchUser"
// import {getUsersByName} from "./endpoints"


export async function selectAllUsers():Promise<any> {
    const result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula48_exercicio;
    `)
 
    return result[0]
 }

 

 export async function selectUsersByName(name:string):Promise<any> {
  
   const result = await connection.raw(`
   SELECT * FROM aula48_exercicio
   WHERE name LIKE "% ${name} %"
   `)

   return result[0]
}