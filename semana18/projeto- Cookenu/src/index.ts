import express, {Express} from "express"
import cors from "cors"
import {AddressInfo} from "net"
import knex from "knex";
import dotenv from "dotenv";
import {signup} from "./endpoints/signup"
import {login} from "./endpoints/login"
import {getProfile} from "./endpoints/profile"
import {createRecipe} from "./endpoints/recipes"
import { getUserById } from "./endpoints/getUserById"
import { getRecipeById } from "./endpoints/getRecipeById";

const app:Express = express();

app.use(express.json());
app.use(cors());

dotenv.config();

export const connection = knex({
	client: "mysql",
	connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  }
});

app.post('/user/signup', signup)

app.post('/user/login', login)

app.get('/user/profile', getProfile)

app.post('/recipe/creation', createRecipe)

app.get('/user/:id', getUserById)

app.get('/recipe/:id', getRecipeById)

const server = app.listen(process.env.PORT || 3003, () =>{
    if(server){
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`);
    }else{
        console.error (`failure upon starting server.`);
    }
});