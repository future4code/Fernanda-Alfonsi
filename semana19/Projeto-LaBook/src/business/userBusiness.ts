import { User } from "./entities/user"

export const businessSignup = async(input:User)=>{

    if (!input.name 
        || !input.email 
        || !input.password
        ) {
        res.statusCode = 406
        message = '"name", "email" and "password" must be provided'
        throw new Error(message)
     }

     const id: string = generateId()

     const cypherPassword = await hash(input.password);

     await connection('labook_users')
        .insert({
           id,
           name,
           email,
           password: cypherPassword
        })

     const token: string = generateToken({ id })
}