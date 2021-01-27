import {connection} from "./index"



export async function selectAllUsers():Promise<any> {
    const result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula48_exercicio;
    `)
 
    return result[0]
 }

 // Exercício 1 A

 export async function selectUsersByName(name:string):Promise<any> {
  
   const result = await connection.raw(`
   SELECT * 
   FROM aula48_exercicio
   WHERE name LIKE "%${name}%";
   `)

   return result[0]
}

// Exercício 1 B

export async function selectUsersByType(type:string):Promise<any> {
  
   const result = await connection.raw(`
   SELECT * 
   FROM aula48_exercicio
   WHERE type LIKE "${type}"
   `)

   return result[0]
}

// Exercício 2

export async function selectOrderUsers(orderBy:any):Promise<any> {
  
   const result = await connection.raw(`
   SELECT *
   FROM aula48_exercicio
   ORDER BY ${orderBy};
   `)

   return result[0]
}

// Exercício 3

export async function selectLimitUsers(resultsPerPage:Number):Promise<any> {
  
   const result = await connection.raw(`
   SELECT *
   FROM aula48_exercicio
   LIMIT ${resultsPerPage};
`)

   return result[0]
}

// Exercício 4

export async function selectAllFunctions(name: any, type: any, orderBy: any, orderType: any, offset:any, resultPerPage: any):Promise<any> {
  
   const result = await connection.raw(`
   SELECT *
   FROM aula48_exercicio
   WHERE name LIKE "%${name}%" || "%${type}%"
   ORDER BY ${orderBy}||${orderType}
   LIMIT ${resultPerPage}
   OFFSET ${offset};
`)

   return result[0]
}