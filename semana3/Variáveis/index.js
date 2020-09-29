// Exercícios de interpretação

// Ex.1 primeiro será impresso o valor 10, depois será impresso o valor 10 5
// Ex.2 será impresso os valores 20,10,10

// Exercícios de escrita de código.

// EXERCICIO 1-
let nome
let idade
console.log(typeof nome)  
console.log(typeof idade)  

// index.js:11 undefined
// index.js:12 undefined
// A resposta para ambos os types foi undefined, pois não atribuimos nenhum valor.  

let nomeDoUsuario=prompt("Qual seu nome?")
let idadeDoUsuario=prompt("Qual sua Idade?")
nome = nomeDoUsuario
idade = idadeDoUsuario

console.log (typeof nome)  
console.log (typeof idade) 

// index.js:23 string
// index.js:24 string
// A resposta para  ambos foi string, pois ao pedirmos para o usuário inserir um dado usando o Prompt, por padrão ele devolve uma String.

console.log(`Olá ${nome} você tem ${idade} anos`)

// index.js:30 Olá Fernanda você tem 36 anos

// EXERCÍCIO 2

let carnaval=prompt("Qual seu bloquinho de carnaval preferido em São Paulo?")
console.log( "Meu bloquinho preferido no Carnaval é", carnaval)
let pascoa=prompt("Ná pascoa, você prefere viajar ou passar com a familia?")
console.log("Na páscoa eu prefiro", pascoa)
let natal=prompt("Qual sua comida preferida de Natal?")
console.log("minha comida preferida no natal é",natal)
let anoNovo=prompt("Qual seu destino de viagem no ano novo?")
console.log("Meu destino preferido de viagem no Ano Novo é", anoNovo)
let aniversario=prompt("Prefere fazer a festa de aniversário em casa ou fora de casa?")
console.log("No meu aniversário eu prefiro fazer a festa", aniversario)



// index.js:37 Meu bloquinho preferido no Carnaval é Cordão da Santa
// index.js:39 Na páscoa eu prefiro viajar
// index.js:41 minha comida preferida no natal é damasco
// index.js:43 Meu destino preferido de viagem no Ano Novo é Ubatuba
// index.js:45 No meu aniversário eu prefiro fazer a festa buteco

// EXERCÍCIO 3

let listaRangos = ["Temaki", "Pizza", "Parmesão", "Sopa", "Guaca Mole"]
console.log(listaRangos)

index.js:58 (5) ["Temaki", "Pizza", "Parmesão", "Sopa", "Guaca Mole"]



console.log( `Essas são minhas comidas preferidas: \n ${listaRangos[0]} \n ${listaRangos[1]} \n ${listaRangos[2]} \n ${listaRangos[3]} \n ${listaRangos[4]} \n`)
// index.js:60 Essas são minhas comidas preferidas: 
//  Temaki 
//  Pizza 
//  Parmesão 
//  Sopa 
//  Guaca Mole 



let rangoUsuario=prompt( "Qual sua comida preferida")
listaRangos[1] = rangoUsuario
console.log( `Essas são minhas comidas preferidas: \n ${listaRangos[0]} \n ${listaRangos[1]} \n ${listaRangos[2]} \n ${listaRangos[3]} \n ${listaRangos[4]} \n`)
// index.js:66 Essas são minhas comidas preferidas: 
//  Temaki 
//  pipoca 
//  Parmesão 
//  Sopa 
//  Guaca Mole 

let covid19Quest=["Você usa a máscara para sair?", "Utiliza álcool gel para higienizar as mãos?", "Evita aglomeração?"]
let covid19Resp = [true, true, false]
console.log (`\n ${covid19Quest[0]}, ${covid19Resp[0]} \n ${covid19Quest[1]}, ${covid19Resp[1]} \n ${covid19Quest[2]}, ${covid19Resp[2]}\n`)



// index.js:87 
//  Você usa a máscara para sair?, true 
//  Utiliza álcool gel para higienizar as mãos?, true 
//  Evita aglomeração?, false

