import express, { Express} from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import { getAllUsers } from "./endpoints";
import { getUsersByName, getUsersByType, getOrderUsers, getLimitUsers, getAllFunctions } from "./endpoints";

dotenv.config();

export const connection = knex({
   client: "mysql",
   connection: {
      host: process.env.DB_HOST,
      port: 3306,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
   }
})

const app: Express = express();
app.use(express.json());
app.use(cors())

app.get('/users/all', getAllUsers);

// Exercício 1 A.
app.get('/users/search', getUsersByName);

// Exercício 2
app.get('users/search/order', getOrderUsers);

// Exercício 1 B
app.get('/users/search/:type', getUsersByType);

// // Exercício 2
app.get('/users/order', getOrderUsers);

// Exercício 3
app.get('/users/all/limit', getLimitUsers);

// Exercício 4
app.get('/users/all/search', getAllFunctions);


const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
});