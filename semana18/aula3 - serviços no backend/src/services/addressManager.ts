import axios from "axios"
import {address} from "../types/Address"

const URL = "https://viacep.com.br/ws";

export async function getAddressByCep(cep:string):Promise<address>{
    try{
    const result = await axios.get(`${URL}/${cep}/json`);

    console.log("result",result.data)

    const {logradouro, bairro, localidade, uf}=result.data

    const myAddress: address = {
        place:logradouro,
        neighborhood:bairro,
        city:localidade,
        state:uf
    }
    
    return myAddress

}catch(error){
    throw new Error(error.message)
}
}



    