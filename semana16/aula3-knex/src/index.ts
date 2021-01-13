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

app.get('/Actor', testEndpoint)

async function testEndpoint(req:Request, res:Response): Promise<void>{
  try {
    const result = await connection.raw(`
      SELECT * FROM Actor
    `)

    res.status(200).send(result[0])
  } catch (error) {
    res.status(400).send(error.message)
  }
}
/****************************************************************** */
// const getActorById = async (id: string): Promise<any> => {
//   try { const result = await connection.raw(`
//     SELECT * FROM Actor WHERE id = '${id}'
//   `)
//   console.log(result[0])
//   return result[0]
//   } catch (error) {
//       console.log(error.sqlMessage || error.message)
//     }
//   }

// getActorById('002');

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
      SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
      `)
      
      const count = result[0]
      console.log(count)
      return count

      

    } catch (error) {
        console.log(error.sqlMessage || error.message)
      }
    }

    countActorByGender("female");