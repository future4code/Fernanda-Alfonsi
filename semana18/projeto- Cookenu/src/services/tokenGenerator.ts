import * as jwt from "jsonwebtoken";
import {AuthenticationData} from "../types/authenticationData"

export function generateToken(
   payload: AuthenticationData
): string {

   const token: string = jwt.sign(
      payload,
      process.env.JWT_KEY as string,
      { expiresIn: "20 min" }
   );

   return token;
}

export function getTokenData(token: string): AuthenticationData {
   const payload = jwt.verify(
      token,
      process.env.JWT_KEY!
   ) as AuthenticationData
    console.log(payload, payload.id)
   return {
      id: payload.id,
   
   }
}

