import * as jwt from "jsonwebtoken";
import {AuthenticationData}from '../types/autenticationType'


export function getData (token: string): AuthenticationData{
  const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
  const result = {
    id: payload.id,
  };
  console.log(result)
  return result;
};