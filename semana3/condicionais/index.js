
// **Exercícios de interpretação de código**
// EXERCÍCIO 1
// O código pega um número digitado pelo usuário e guarda da variável "respostaDoUsuario"
// Depois  passa o conteúdo da variável Resposta do usuário que é uma string  para uma outra variável "número " que guarda o mesmo conteudo da "respostaDoUsuario" mas agora convertida em um número pela função "Number"
//  Em seguida faz o teste  com o If: se o número dividido por 2 tiver o resto 0 ( ou seja números pares) a mensagem será: "passou no teste". Caso o número não tenha o resto 0 (números impares) a mensagem será ""não passou no teste.

// EXERCÍCIO 2
// a. O Código acima serve para verificar a lista de frutas (através de comparação de igualdades) disponíveis e seus preços. Assim que a fruta for escolhida e seu preço verificado na lista, imprime uma mensagem no console com  a fruta escolhida e o valor dela.
// b. A mensagem será: O preço da fruta maça é R$ 2,25
// c. Se retirássemos o Break a mensagem seria "O preço da fruta Pêra é R$ 5", pois consideraria o último valor que é o do default. 

// EXERCICIO 3 
// a. A promeira linha pede para o usuário digitar um número ao mesmo tempo em que o converte de ´tipo string para o tipo número.
// b. se o usuário digitar 10 a mensagem será "esse número passou no teste" se for -10 não terá nenhuma mensagem.
// c.Aparecerá que a variável "mensagem " não está definida, pois o escopo filho não compartilha seu conteudo com o escopo pai. 

// **Exercícios de escrita de código**

// EXERCÍCIO 4

const maioridade =Number(prompt("Qual sua idade?"))

if(maioridade>=18){
    console.log("você pode dirigir")
}else{
    console.log("Você não pode dirigir")
// }

// // EXERCÍCIO 5
const periodo = prompt("Qual o período que você estuda? Digite M (para matutino), V (para vespertino) ou N (para noturno)").toLowerCase()

if(periodo==="m"){
    console.log("Bom dia! Hora de tomar um cafezão")
}else if (periodo==="v"){
    console.log("Boa tarde! A preguiça bateu, mas vamos em frente.")
} else{
    console.log("Boa noite! Sabemos que está cansado, mas irá conseguir")
}

// EXERCÍCIO 6
const periodo = prompt("Qual o período que você estuda? Digite M (para matutino), V (para vespertino) ou N (para noturno)").toLowerCase()
let turno
switch(periodo){
     case "m":
        turno = "Bom dia! Hora de tomar um cafezão"
        break;
    case "v":
        turno = "Boa tarde! A preguiça bateu, mas vamos em frente."
        break;
    case "n":
        turno = "Boa noite! Sabemos que está cansado, mas irá conseguir"
        break;
    default:   
        turno = "Olá, não conseguimos verificar qual seu período. Poderia digitar novamente?"
         break; 
}       
console.log(turno)

// EXERCÍCIO 7

const genero = prompt("Olá amante da 7ª arte! Qual gênero de filme você gostaria de assistir?").toLowerCase()
const precoingresso = Number(prompt("Agora conta pra gente até qual valor você aceitaria pagar o ingresso?"))

if(genero==="fantasia" && precoingresso<=15){
        console.log("Bom filme! Não esqueça a pipoca!")
   
    } else{
        console.log("Ahh, que pena! Escolha outro filme!")
}