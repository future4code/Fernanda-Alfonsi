

// **Exercícios de interpretação de código**
// EXERCÍCIO 1 
// O código que começa com as variáveis "valor" e "i" como "0" usa a estrutura de repetição para atribuir à variavel "valor" o mesmo que será atribuida à "i" a partir da incrementação que soma 1 à "i" e  enquanto "i"  for menor que 5.

// Assim que a condição i<5 for falsa , imprime-se no console o valor 4 .


// EXERCÍCIO 2
// a. será impresso no console apenas os números que forem maiores de 18
// b.A não ser que seja criada uma função para contar o indice, não é possivel apenas com o "for..of" fazer isso, pois ele apenas imprimirá os elementos da lista.
// 

// **Exercícios de escrita de código**

// EXERCÍCIO 3 .a



// for(let valores of arrayOriginal){
//     console.log(valores)
// }
// // EXERCÍCIO 3 .b
// for(let valores of arrayOriginal){
//     console.log(valores/10)
// }

// EXERCÍCIO 3.c
let arrayOriginal = [-1, 2, -5, 3, 4, 5, 6, 7, 8, 9, 22, 11, 12, -1, 13, 14, 15, 20]

let novoarray = []
for(let valores of arrayOriginal){
    if(valores%2===0){
        novoarray.push = [valores]
       
}
    console.log(novoarray)
}

// EXERCÍCIO 3.d
// for(let index = 0; index < arrayOriginal.length;index+=1){
//        console.log(`O elemento do index ${index} é ${arrayOriginal[index]}`)
//     }

// EXERCÍCIO 3.e




// let maior=arrayOriginal[0]
// let menor=arrayOriginal[0]
// for(let n of arrayOriginal){
//     if(maior<n){
//         maior=n
        
//     }
//     if(menor>n){
//         menor=n
//     }
    
// }
// console.log("O maior número é "+ maior+" e o menor é "+menor)



