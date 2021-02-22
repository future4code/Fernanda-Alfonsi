import { CustomError } from "../errors/CustomError";
import { User, stringToUserRole, UserRole } from "../model/User";
import userDatabase, { UserDatabase } from "../data/UserDatabase";
import hashGenerator, { HashGenerator } from "../services/hashGenerator";
import idGenerator, { IdGenerator } from "../services/idGenerator";
import tokenGenerator, { TokenGenerator } from "../services/tokenGenerator";

export class UserBusiness {

   constructor(
      private userDatabase: UserDatabase,
      private hashGenerator: HashGenerator,
      private tokenGenerator:TokenGenerator,
      private idGenerator:IdGenerator
   ){}

   public async signup(
      name: string,
      email: string,
      password: string,
      role: string
   ) {
      try {
         if (!name || !email || !password || !role) {
            throw new CustomError(422, "Missing input");
         }

         if (email.indexOf("@") === -1) {
            throw new CustomError(422, "Invalid email");
         }

         if (password.length < 6) {
            throw new CustomError(422, "Invalid password");
         }

         const id = idGenerator.generate();

         const cypherPassword = await hashGenerator.hash(password);

         await userDatabase.createUser(
            new User(id, name, email, cypherPassword, stringToUserRole(role))
         );

         const accessToken = tokenGenerator.generate({
            id,
            role,
         });
         return { accessToken };
      } catch (error) {
         if (error.message.includes("email")) {
            throw new CustomError(409, "Email already in use")
         }

         throw new CustomError(error.statusCode, error.message)
      }

   }

   public async login(email: string, password: string) {

      try {
         if (!email || !password) {
            throw new CustomError(422, "Missing input");
         }

         const user = await userDatabase.getUserByEmail(email);

         if (!user) {
            throw new CustomError(401, "Invalid credentials");
         }

         const isPasswordCorrect = await hashGenerator.compareHash(
            password,
            user.getPassword()
         );

         if (!isPasswordCorrect) {
            throw new CustomError(401, "Invalid credentials");
         }

         const accessToken = tokenGenerator.generate({
            id: user.getId(),
            role: user.getRole(),
         });

         return { accessToken };
      } catch (error) {
         throw new CustomError(error.statusCode, error.message)
      }
   }

   public async getUserById(id: string) {

      try {
         
         const user = await userDatabase.getUserById(id);

         if (!user) {
            throw new CustomError(404, "User not found");
         }

         return { 
            id: user.getId(),
            name: user.getName(),
            email: user.getEmail(),
            role: user.getRole()
         };

      } catch (error) {
         throw new CustomError(error.statusCode, error.message)
      }
   }

   public async getAllUsers(role: UserRole) {

      try {

         if (stringToUserRole (role) !== UserRole.ADMIN) {
            throw new CustomError(401,
              "You must be an admin to access this endpoint"
            );
          }
         
         const users = await userDatabase.getAllUsers();

         

         return users.map((user)=>({

            id: user.getId(),
            name: user.getName(),
            email: user.getEmail(),
            role: user.getRole()

         }))

         

      } catch (error) {
         throw new CustomError(error.statusCode, error.message)
      }
   }

   public async getMyProfile(id:string) {

      try {

         const user = await userDatabase.getUserById(id);

         if (!user){
            throw new CustomError (404, "User not found");
         }

         return {
            id: user.getId(),
            name: user.getName(),
            email: user.getEmail(),
            role: user.getRole()
         }

      } catch (error) {
         throw new CustomError(error.statusCode, error.message)
      }
   }
}

export default new UserBusiness(userDatabase,
   hashGenerator,
   tokenGenerator,
   idGenerator)