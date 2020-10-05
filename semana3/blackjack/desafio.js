/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 *
 * 
 */

let inicio = confirm("Quer iniciar uma nova rodada?")

let cartaU = ["1","2"]
let cartaC = ["1", "2"]
//  Sorteia as duas cartas do usuário e as soma.
cartaU[0] = comprarCarta()
cartaU[1]= comprarCarta()
let somaU = Number([cartaU[0].valor + cartaU[1].valor])

//  Sorteia as duas cartas do computador e as soma.
cartaC[0] = comprarCarta()
cartaC[1] = comprarCarta()
 let somaC = Number([cartaC[0].valor + cartaC[1].valor])
//   Determina se o jogo segue ou acaba.
let i = 3
let j=3
if (inicio === true){
   if ((cartaU[0] && cartaU[1] ==="A") || (cartaC[0] && cartaC[1]) ==="A"){
      cartaU[0] = comprarCarta()
      cartaU[1] = comprarCarta()

      cartaC[0] = comprarCarta()
      cartaC[1] = comprarCarta()
   }

   let primeiraRodada = confirm(`Suas cartas são : ${cartaU[0].texto} ${cartaU[1].texto}. A carta revelada do computador é ${cartaC[0].texto} \n Deseja comprar mais uma carta?`)
   if(somaU<=21 && primeiraRodada===true)
   
      
      while (somaU<=21 && outrasRodadas===true){
         cartaU.slice([i]) = comprarCarta()
         somaU.slice(+ cartaU[i])
         outrasRodadas = confirm(`Suas cartas são ${cartaU}. A carta revelada do computador é ${cartaC[0]}\n Deseja comprar mais uma carta?`)
         i+=1
      }
      if(somaU=21)
         while (somaC<21){
         cartaC.slice([i]) = comprarCarta()
         somaC.slice(+ cartaU[i])
         j+=1
         }
         rodadafim = confirm(`Suas cartas são ${cartaU}.Sua pontuação é${somaU}.As carta do computador são ${cartaC}. A pontuação do computador é ${somaC}\n ${mensagem}Deseja comprar mais uma carta?`)


   }else{
      if(somaU>somaC){
         console.log("Usuário ganhou!")
    
      }else if(somaU===somaC){
         console.log("Empate!")
      }else{
         console.log("Computador ganhou!")
      }

   }

}else{
     console.log("O jogo acabou!!!")
}