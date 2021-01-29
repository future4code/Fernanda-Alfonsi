import * as jwt from "jsonwebtoken";
import {AuthenticationData} from "../types/authenticationData"


export function getData (token: string): AuthenticationData{
  const payload = jwt.verify(
      token, 
      process.env.JWT_KEY as string) as any;

  const result = {
    id: payload.id,
  };
 
  return result;
};