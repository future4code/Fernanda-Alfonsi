// Exercício de Interpretação

// EXERCÍCIO 1

// No console aparecerá:
// a. false 
// b. false
// c. true
// e. boolean


// ECERCÍCIO 2

// a. undefined
// b.null
// c. 11
// d. 3
// e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// f. 9

// Exercício de escrita
// EXERCÍCIO 1

const idadeDoUsuario = prompt('Qual sua idade?')
const idadeDoAmigo = prompt('Qual a idade do seu ou sua melhor amigue?')
const comparar = Number(idadeDoUsuario)> Number(idadeDoAmigo)
console.log('sua idade é maior que a do seu melhor amigue?', comparar)
// // dex.js:26 sua idade é maior que a do seu melhor amigue? true
const diferença = Number(idadeDoUsuario) - Number(idadeDoAmigo)
console.log (diferença)
// // index.js:30 6

// EXERCÍCIO 2

let numPar = prompt(`Insira um número par`)
let resto = Number(numPar)%2
console.log(resto) 
// // Ao inserir o número par o resto sempre será 0.
// // index.js:38 0
// Ao inserir um numero impar o resto sempre será 1.
// index.js:38 1

// Exercício 3

let listaDeTarefas = []
let t1 = prompt(`Que tarefa você precisa fazer para o curso Labenu?`)
let t2 = prompt(`Que tarefa você precisa fazer para organisar a sua casa?`)
let t3 = prompt(`Que exercício físico voce precisa fazer para ficar bem todos os dias?`)
listaDeTarefas.push(t1, t2, t3)
console.log(listaDeTarefas)

// // index.js:49 (3) ["exercício3", "Tirar o pó", "alongamento"]
let remova = prompt(`Didite o Indice da tarefa que você já realizou. Ex: 0 -para a tarefa1, 1 -para a tarefa2`)
listaDeTarefas.splice(remova, 1)
console.log(listaDeTarefas)

// index.js:54 (2) ["exercício3", "alngamento"]

// Exercício 4

let emailDoUsuario = prompt(`Qual seu e-mail?`)
let nomeDoUsuario = prompt(`Qual seu nome?`)

console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}!`)

// index.js:65 O e-mail fefealfonsi@gmail.com foi cadastrado com sucesso. Seja bem-vinda(o), Fernanda!
