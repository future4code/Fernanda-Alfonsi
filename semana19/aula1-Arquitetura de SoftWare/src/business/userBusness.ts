import { insertUser,selectUserByEmail, selectAllUsers,deleteUser } from "../data/userDatabase"

import { generateid } from "../business/services/idGenerator"
import { generateToken, getTokenData } from "../business/services/tokenGenerator";
import { hash, compare } from "../business/services/hashManager"
import { USER_ROLES } from "../business/entities/user";


export async function businessSignup(
    name: string,
    email: string,
    password: string,
    role: USER_ROLES
){

if (!name || !email || !password ||!role) {
    throw new Error('Os campos "name","email", "password" e "role" são obrigatórios')
 }

 if (password.length < 6) {
   throw new Error('Sua senha deve ter mais de seis caracteres')
}


 const id: string = generateid();

 const cypherPassword: string = hash(password)

 

 await insertUser({id,
    name,
    email,
    password:cypherPassword,
    role})

 const token = generateToken({
     id, 
     role:role
    });

    return token
}


export async function businessLogin(email:string, password:string) {

    
    if (!email || !password) {
        throw new Error('Os campos "email" e  "password", são obrigatórios');
     }

     const user = await selectUserByEmail(email);

     if (!user) {
        throw new Error("Usuário não encontrado ");
     }

     const passwordIsCorrect: boolean = await compare(
        password,
        user.password
     )

     if (!passwordIsCorrect) {
        throw new Error("Senha incorreta.");
     }

     const token: string = generateToken({
        id: user.id,
        role:user.role
        
     });

     return token
    
}

export async function businessGetAllUsers(token:string) {

     getTokenData(token);

     return await selectAllUsers()
    
}

export async function businessDeleteUser(input:{token:string, id:string}) {

   const verifiedToken = getTokenData(input.token);

   if (verifiedToken.role !== "ADMIN"){
      throw new Error("Apenas administradores podem deletar usuários!")
   }


   return await deleteUser(input.id)
  
}