// Exercício-1
// const inverterString =(string)=> {
//     let array = string.split('').slice(0).reverse().join('')
//     console.log(array)
// }
// inverterString("roma")


// Exercício-2
// const testePalindromo =(string)=> {
//     let stringSemEspacos= string.replace(/\s/g, '').toLowerCase()
//     let array = stringSemEspacos.split('')
//     let stringInvertida= array.slice(0).reverse().join('')
    
//     if(stringSemEspacos===stringInvertida){
//         return "É palíndromo"
//     }else{
//         return "Não é palíndromo"
//     }
// }

// console.log(testePalindromo("Anotaram a data da maratona"))

// Exercício-3

// const combinacoesPossiveis =(string)=> {
//     let array = string.split('')
//     console.log(array)
 
//     combinations = [];
//     for(i = 0; i < array.length; ++i) {
    
//         for(x= i+1; x < array.length; ++x) {
//             combinations.push([array[i],array[x]])
//         }
//     }
//     let combinationArray = combinations.join('') 
        
//     console.log("Combinação",combinations)
//     console.log("CombinaçãoS",combinationArray)
// }

// console.log(combinacoesPossiveis("coisa"))


// Exercício-4

// const ordemAlfabetica =(string)=> {
//     let array = string.split('')
//     console.log(array.sort().join(''))
 
    
// }

// ordemAlfabetica("agir")


// Exercício-5

// const primiraMaiuscula =(string)=> {
//     let array = string.split(" ");
//     for (let i = 0; i < array.length; i++) {
//         let letter = array[i];
//         array[i] = letter[0].toUpperCase() + letter.slice(1);
//     }
//    console.log( array.join(" "))
// }

// primiraMaiuscula("primeira maiuscula")


// Exercício-6

const primiraMaiuscula =(string)=> {
    let array = string.split(" ");
    for (let i = 0; i < array.length; i++) {
        let letter = array[i];
        array[i] = letter[0].toUpperCase() + letter.slice(1);
    }
   console.log( array.join(" "))
}

primiraMaiuscula("primeira maiuscula")