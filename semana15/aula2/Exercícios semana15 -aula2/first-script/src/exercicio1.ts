// Parte A
const minhaString: string = "Eita Mundão"
// Ao atribuitr um número para a  variávem minhaString que está tipada como string, ela dá um erro grifando o nome da variável.

// Parte B
const meuNumero: number = 67

// Para que esta variável também aceite string devemos usar o Union Type inserindo uma | entre os tipos.

const meuNumero2: number | string = "sessenta e sete"

// Parte C
const pessoa:{nome:string, idade: number, corFavorita: string}={
    nome: "Fernanda",
    idade: 36,
    corFavorita: "verde"
}
    // Para garantirque o objeto só tenha as propriedades descritas acima precisamos definir os tipos para cada propriedade do objeto:

//Parte D

// type pessoas = {
//     nome:string, 
//     idade: number, 
//     corFavorita: string,
// }
// const pessoinhas: pessoas[]=[
//     {
//         nome: "Fernanda",
//         idade: 36,
//         corFavorita: "verde",
//     },

//     {
//         nome: "Diana",
//         idade: 32,
//         corFavorita: "azul",
//     },

//     {
//         nome: "Marina",
//         idade: 30,
//         corFavorita: "laranja",
//     }
// ]

// Parte E
enum coresDoArcoiris {
    VERMELHO = "Vermelho",
    LARANJA = "Laranja",
    AMARELO = "Amarelo",
    VERDE = "Verde",
    AZUL = "Azul",
    VIOLETA = "Violeta",
    ANIL = "Anil"
}

type pessoas = {
    nome:string, 
    idade: number, 
    corFavorita: coresDoArcoiris,
}
const pessoinhas: pessoas[]=[
    {
        nome: "Fernanda",
        idade: 36,
        corFavorita: coresDoArcoiris.VERDE
    },

    {
        nome: "Diana",
        idade: 32,
        corFavorita: coresDoArcoiris.AZUL
    },

    {
        nome: "Marina",
        idade: 30,
        corFavorita: coresDoArcoiris.LARANJA
    }
]