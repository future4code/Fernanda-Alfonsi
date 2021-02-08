import * as jwt from "jsonwebtoken";
import {authenticationData} from "../entities/user"

export function generateToken(
   payload: authenticationData
): string {

   const token: string = jwt.sign(
      payload,
      process.env.JWT_KEY as string,
      { expiresIn: "20 min" }
   );

   return token;
}

export function getTokenData(token: string): authenticationData {
   return jwt.verify(
      token,
      process.env.JWT_KEY!
   ) as authenticationData
   
   // return {
   //    id: payload.id,
   
   // }
}

