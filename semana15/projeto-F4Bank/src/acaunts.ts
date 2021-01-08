export enum CONTINENTS {
    AFRICA = "África",
    AMERICA = "América",
    ASIA = "Ásia",
    EUROPE = "Europa",
    OCEANIA = "Oceania"
 }
 
 export type conta = {
    nome:string, 
    cpf: number, 
    dataDeNascimento: number,
    saldo:number,
    extratoDoUsuario:extract[]
 }
 export type extract= {
    valor:number,
    data:number,
    descricao: string
 }
    

 
   
 
 
 export const cadastro: conta[] = [
    {
        "nome":"Fernanda", 
        "cpf": 9876543210, 
        "dataDeNascimento": 30011984,
        "saldo":34,
        "extratoDoUsuario":[
            {
                valor:0,
                data:8012021,
                descricao:"conta de luz"
            }
        ]
    },
    {
        "nome":"Eduardo", 
        "cpf": 9876543211, 
        "dataDeNascimento": 5121985,
        "saldo":34,
        "extratoDoUsuario":[
            {
                valor:0,
                data:8012021,
                descricao:"conta de luz"
            }
        ]
    },
    {
        "nome":"Leandro", 
        "cpf": 9876543212, 
        "dataDeNascimento": 19041988,
        "saldo":34,
        "extratoDoUsuario":[
            {
                valor:0,
                data:8012021,
                descricao:"conta de luz"
            }
        ]
    },
    {
        "nome":"Luiz", 
        "cpf": 9876543213, 
        "dataDeNascimento": 11121988,
        "saldo":34,
        "extratoDoUsuario":[
            {
                valor:0,
                data:8012021,
                descricao:"conta de luz"
            }
        ]
    },
    {
        "nome":"Marina", 
        "cpf": 9876543214, 
        "dataDeNascimento": 24041990,
        "saldo":34,
        "extratoDoUsuario":[
            {
                valor:0,
                data:8012021,
                descricao:"conta de luz"
            }
        ]
    },
    {
        "nome":"Diana", 
        "cpf": 9876543215, 
        "dataDeNascimento": 30041988,
        "saldo":34,
        "extratoDoUsuario":[
            {
                valor:0,
                data:8012021,
                descricao:"conta de luz"
            }
        ]
    },
    {
        "nome":"Wesley", 
        "cpf": 9876543216, 
        "dataDeNascimento": 2111993,
        "saldo":34,
        "extratoDoUsuario":[
            {
                valor:0,
                data:8012021,
                descricao:"conta de luz"
            }
        ]
    },
    {
        "nome":"Augusto", 
        "cpf": 9876543217, 
        "dataDeNascimento": 30011985,
        "saldo":34,
        "extratoDoUsuario":[
            {
                valor:0,
                data:8012021,
                descricao:"conta de luz"
            }
        ]
    },
]