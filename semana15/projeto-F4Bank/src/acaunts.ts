
 export type conta = {
    nome:string, 
    CPF: string, 
    dataDeNascimento:Date|string,
    saldo:number,
    extratoDoUsuario:extract[]
 }
 export type extract= {
    valor:number,
    data:Date|string,
    descricao: string
 }
    

 
   
 
 
 export const cadastro: conta[] = [
    {
        "nome":"Fernanda", 
        "CPF": "987.654.321-0", 
        "dataDeNascimento": "1984-01-30",
        "saldo":100,
        "extratoDoUsuario":[
            {
                valor:0,
                data:"2021-01-08T00:00:00.000Z",
                descricao:"conta de luz"
            }
        ]
    },
    {
        "nome":"Eduardo", 
        "CPF": "987.654.321-1", 
        "dataDeNascimento": "05/12/1985",
        "saldo":200,
        "extratoDoUsuario":[
            {
                valor:0,
                data:"2021-01-08T00:00:00.000Z",
                descricao:"conta de luz"
            }
        ]
    },
    {
        "nome":"Leandro", 
        "CPF": "987.654.321-2", 
        "dataDeNascimento": "19/04/1988",
        "saldo":300,
        "extratoDoUsuario":[
            {
                valor:0,
                data:"2021-01-08T00:00:00.000Z",
                descricao:"conta de luz"
            }
        ]
    },
    {
        "nome":"Luiz", 
        "CPF": "987.654.321-3", 
        "dataDeNascimento": "11/12/1988",
        "saldo":400,
        "extratoDoUsuario":[
            {
                valor:0,
                data:"2021-01-08T00:00:00.000Z",
                descricao:"conta de luz"
            }
        ]
    },
    {
        "nome":"Marina", 
        "CPF": "987.654.321-4", 
        "dataDeNascimento": "24/04/1990",
        "saldo":500,
        "extratoDoUsuario":[
            {
                valor:0,
                data:"2021-01-08T00:00:00.000Z",
                descricao:"conta de luz"
            }
        ]
    },
    {
        "nome":"Diana", 
        "CPF": "987.654.321-5", 
        "dataDeNascimento": "30/04/1988",
        "saldo":600,
        "extratoDoUsuario":[
            {
                valor:0,
                data:"2021-01-08T00:00:00.000Z",
                descricao:"conta de luz"
            }
        ]
    },
    {
        "nome":"Wesley", 
        "CPF": "987.654.321-6", 
        "dataDeNascimento": "02/11/1993",
        "saldo":700,
        "extratoDoUsuario":[
            {
                valor:0,
                data:"2021-01-08T00:00:00.000Z",
                descricao:"conta de luz"
            }
        ]
    },
    {
        "nome":"Augusto", 
        "CPF": "987.654.321-7", 
        "dataDeNascimento": "30/01/1985",
        "saldo":800,
        "extratoDoUsuario":[
            {
                valor:0,
                data:"2021-01-08T00:00:00.000Z",
                descricao:"conta de luz"
            }
        ]
    },
    
]