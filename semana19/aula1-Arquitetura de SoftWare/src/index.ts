import express, {Express} from "express"
import cors from "cors"
import {AddressInfo} from "net"
import {signup, login, getAllUsers, deleteUserById} from "./controller/userController"




const app:Express = express();

app.use(express.json());
app.use(cors());



app.put('/user/signup', signup)

app.post('/user/login', login)

app.get('/user/all', getAllUsers)

app.delete('/user/delete/:id', deleteUserById)

// app.get('/user/:id', getUserById)

// app.get('/recipe/:id', getRecipeById)

const server = app.listen(process.env.PORT || 3003, () =>{
    if(server){
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`);
    }else{
        console.error (`failure upon starting server.`);
    }
});