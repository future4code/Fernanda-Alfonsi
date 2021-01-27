import knex from "knex";
import express from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import createUser from "./endpoints/createUser";
import getUserByEmail from "./endpoints/getUserByEmail";
import getUserById from "./endpoints/getUserById";

dotenv.config();
export const connection = knex({
  client: 'mysql',
  connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      port: 3306
  }
})


const app = express();
app.use(express.json());



app.post('/user/signup', createUser)

app.post('/user/login', getUserByEmail)

app.get('/user/profile', getUserById)


const server = app.listen(process.env.PORT || 3000, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});