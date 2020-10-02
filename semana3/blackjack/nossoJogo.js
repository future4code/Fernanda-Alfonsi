/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10) 
 */


 console.log("Bem vindo ao Jogo de 21!")
 let inicio = confirm("Quer iniciar uma nova rodada?")
//  Sorteia as duas cartas do usuário e as soma.
 const carta1U = comprarCarta()
 const carta2U = comprarCarta()
 let somaU = carta1U.valor + carta2U.valor
 
//  Sorteia as duas cartas do computador e as soma.
 const carta1C = comprarCarta()
 const carta2C = comprarCarta()
  let somaC = carta1C.valor + carta2C.valor
//   Determina se o jogo segue ou acaba.

 if (inicio === true){

      console.log( "Usuáro - cartas: " + carta1U.texto + " " + carta2U.texto + " -pontuação " + somaU)
       
      console.log( "Computador - cartas: " + carta1C.texto + " " + carta2C.texto + " -pontuação " + somaC)
       
         
   

   if(somaU>somaC){
      console.log("Usuário ganhou!")

   }else if(somaU===somaC){
      console.log("Empate!")
   }else
      console.log("Computador ganhou!")   
   
  

   }else{
      console.log("O jogo acabou!!!")
   }
      
   
  
