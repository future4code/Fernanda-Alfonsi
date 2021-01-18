import knex from "knex";
import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";

/**************************************************************/

dotenv.config();

/**************************************************************/

const connection = knex({   
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
});

/**************************************************************/

const app = express();

app.use(express.json());


const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

/**************************************************************/

// app.get('/Actor', testEndpoint)

// async function testEndpoint(req:Request, res:Response): Promise<void>{
//   try {
//     const result = await connection.raw(`
//       SELECT * FROM Actor
//     `)

//     res.status(200).send(result[0])
//   } catch (error) {
//     res.status(400).send(error.message)
//   }
// }
/****************************************************************** */
const getActorById = async (id: string): Promise<any> => {
  try { const result = await connection.raw(`
    SELECT * FROM Actor WHERE id = '${id}'
  `)
  console.log(result[0])
  return result[0]
  } catch (error) {
      console.log(error.sqlMessage || error.message)
    }
  }

// getActorById('004');

// *b. Faça uma função que busque um ator pelo nome;*

// const getActorByname = async (name: string): Promise<any> => {
//   try { const result = await connection.raw(`
//     SELECT * FROM Actor WHERE name = "${name}"
//   `)
//   console.log(result[0])
//   return result[0]
//   } catch (error) {
//       console.log(error.sqlMessage || error.message)
//     }
//   }

//   getActorByname("Silvero Pereira");

  // *c. Faça uma função que receba um `gender` retorne a quantidade de itens na tabela Actor com esse `gender`. Para atrizes, `female` e para atores `male`.*

  const countActorByGender = async (gender: string): Promise<any> => {
    try { 
      const result = await connection.raw(`
      SELECT COUNT(*) as "count ${gender}" FROM Actor WHERE gender = "${gender}"
      `)
      
      const count = result[0]
      console.log(count)
      return count

    } catch (error) {
        console.log(error.sqlMessage || error.message)
      }
    }

    // countActorByGender("male");

    // Exercício 2
    // a. Uma função que receba um salário e um id e realiza a atualização do salário do ator em questão
    // const updateSalaryActorById = async (id:string,salary: number): Promise<any> => {
    //     try { 
    //       const result = await connection("Actor")
    //       .update({
    //         salary: salary,
    //       })
    //       .where("id", id);
          
    //       const updateSalary = result
    //       console.log(updateSalary)
    //       return updateSalary
    
    //     } catch (error) {
    //         console.log(error.sqlMessage || error.message)
    //       }
    //     }
    //     updateSalaryActorById("001", 11000)

        // b. Uma função que receba um id e delete um ator da tabela

        // const deleteActorById = async (id:string): Promise<any> => {
        //   try { 
        //     const result = await connection("Actor")
        //     .delete()
        //     .where("id", id);
            
        //     return result
      
        //   } catch (error) {
        //       console.log(error.sqlMessage || error.message)
        //     }
        //   }
        //   deleteActorById("001");

          // *c. Uma função que receba um `gender` e devolva a média dos salários de atrizes ou atores desse `gender`*

          // const averageSalaryActorByGender = async (gender:string): Promise<any> => {
          //   try { 
          //     const result = await connection("Actor")
          //     .select()
          //     .avg("salary as averenge")
          //     .where("gender", gender);
          //     console.log(gender,result)
          //     return  result
        
          //   } catch (error) {
          //       console.log(error.sqlMessage || error.message)
          //     }
          //   }
          //   averageSalaryActorByGender("male");

            // Exercício 3
            // a)

            // app.get("/actor/:id", async (req: Request, res: Response) => {
            //   try {
            //     const id = req.params.id;
            //     const actor = await getActorById(id);
            
            //     res.status(200).send(actor)
            //   } catch (err) {
            //     res.status(400).send({
            //       message: err.message,
            //     });
            //   }
            // });
            
            // b. Crie um endpoint agora com as seguintes especificações:

            // - Deve ser um GET (`/actor`)
            // - Receber o gênero como um *query param* (`/actor?gender=`)
            // - Devolver a quantidade de atores/atrizes desse gênero

            app.get("/actor/count", async (req: Request, res: Response) => {
              try {
                
                const caunt = await countActorByGender(req.query.gender as string);
            
                res.status(200).send(caunt)
              } catch (err) {
                res.status(400).send({
                  message: err.message,
                });
              }
            });