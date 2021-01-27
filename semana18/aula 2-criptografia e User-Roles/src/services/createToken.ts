import * as jwt from "jsonwebtoken";
import {AuthenticationData}from '../types/autenticationType'


  const expiresIn = "1min";
  export function generateToken(input: AuthenticationData): string {
    const token = jwt.sign(
      {id: input.id,},
      process.env.JWT_KEY as string,
      {expiresIn}
    );

    return token;
  
}

