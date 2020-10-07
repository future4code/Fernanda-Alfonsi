// **Exercícios de interpretação de código**
// Exercício 1
// a. Será impresso no console os valores 10 referente a 2*5 e 50 referente a 10*5
// b. as respostas estariam guardadas nas funções, mas não imprimiria nada no console.

//  Exercício 2
// a. seria impresso no console  os dois primeiros nomes da array "Darvas e Caio"
// será impresso os nomes de Amanda e Caio, nesta sequência.


// Exercício 3
//  a função metodo percorre os objetos da array e busca entre eles quais são pares, assim que detectados o programa faz uma nova lista "arrayFinal" apenas com os quadrados dos pares  e retorna esta lista. Um nome melhor pra esta função seria "quadradoDoPares. ""

// **Exercícios de escrita de código**
// Exercício 4
// 4A.

// function oiSouEu(){
//     console.log(`Oie! Meu nome é Fernanda, tenho 36 anos, moro em São Paulo minha vida inteira e, neste momento, sou estudante`)
// }
// oiSouEu()


// index.js:19 Oie! Meu nome é Fernanda, tenho 36 anos, moro em São Paulo minha vida inteira e, neste momento, sou estudante

// 4B.

// let nome = prompt("Qual seu nome?")
// let idade = Number(prompt("Qual sua idade?"))
// let cidade = prompt("Qual sua Cidade?")
// let estudante = prompt("Você é estudante? Responda sim ou não")

// let meusDados=(nome, idade, cidade, estudante)=>{
//     if (estudante==="sim"){
//         estudante ="sou" 

//     }else{
//         estudante = "não sou"
//     }

//     console.log(`Oie! Meu nome é ${nome}, tenho ${idade} anos, moro em ${cidade} minha vida inteira e, neste momento, ${estudante} estudante`)
// }
// const resultado=meusDados(nome, idade, cidade, estudante)



// index.js:41 Oie! Meu nome é Fernanda, tenho 36 anos, moro em São Paulo minha vida inteira e, neste momento, sou estudante

// Exercício 5
// 5A.
// let doisNumeros=(a,b)=>{
//     const soma = Number(a+b)
//     console.log(soma)
// }
// doisNumeros(10, 205)


// index.js:53 215


// 5B.

// let compararNumeros=(a,b)=>{
//     if(a>=b){
//       return true 
//     }else{
//         return false
//     }
// }
//  let resultado = compararNumeros(3, 3)
//  console.log(resultado)

//  index.js:71 true

// 5C.

// function dezXMensagem(texto){
//     for(let i=0; i<10; i++){
//         console.log(texto)
//     }
// }
// let mensagem = dezXMensagem("oi gente")


// 10
// index.js:70 oi gente

// Exercício 6
// 6A.
const lista = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

// const comprimentoLista =(lista)=>{
//     console.log(lista.length)

// }
// comprimentoLista(lista)


// index.js:98 10

// 6B.

// let parbolleano=(n)=>{
//     if(n%2===0){
//        return true 
       
//     }else{
//         return false
       
//     }
// }
// const resultado=parbolleano(6)
// console.log(resultado)

// // 6C. 
// let soPares=[] 
// const listaDePares=(lista)=>{
//     for(let numero of lista){
//         if(numero%2===0){
//             soPares.push(numero)
//         }else{
//         }
//     } console.log( soPares.length)
// }
// listaDePares(lista)
// // index.js:127 6

// 6D.
// let soPares=[] 
// const listaDePares=(lista)=>{
//     for(let n of lista){
//         if(n%2===0){
//             soPares.push(n)
          
//         }else{
           
//         }
//     } console.log(soPares)
// }
// const resultado = listaDePares(lista)

//index.js:138 (6) [10, 78, 90, 52, 84, 22]

