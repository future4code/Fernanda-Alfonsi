/**Exercícios de interpretação de código
Ex.1 Coversor de moedas

É uma função que recebe um parâmetro "valorEmDolar" e executa o seguinte:
guarda na variável "cotacao" um valor recebido do usuário no prompt já transformando a string em número com o Number() e retorna uma frase que começa com uma string "R$" e adiciona a soma da variável "cotacao" com o valor recebido no parametro "valorEmDolar" da função. 

Em seguida uma variável meuDinheiro recebe o valor da função "conversorDeMoedas" com parâmetro 100
No console será impresso o valor da Variável "meuDineiro" que devolverá 100 multiplicado pelo valor que digitar o usuário no prompt**/


/** Ex.2 -InvesteDinheiro
 A função "investeDinheiro()" recebe dois parâmetros "TipoDeInvestimento" e "valor".
 Dentro da função cria uma variável "valorAposInvestimento" que receberá o resultado da multiplicação do valor colocado no parâmetro por números atrelados ao tipo de investimento a ser escolhido nos parâmetros da função "investeDinheiro" que estão organizados nas cases.
 São eles: poupança, Renda Fixa, CDB, Ações. 
 Caso nenhum desses "tiposDeInvertimentos" sejam digitados, será emitido um alerta no prompt.

 Esta função retornará a variável "valorAposInvestimento" 

 Neste código também serão criadas mais duas variáveis usando o comando const:
  "novoMontante" que receberá  o refultado da função "investe dinheiro ("Ações,150)"e a "segundoMontante" que receberá o resultado da função"investeDinheiro("tesouroDireto",200)"
  
  No console será impresso promeiro o valor quardado dentro de "novomontante que é 165 e uma mensagem de alerta será emitida no prompt já que "Tesouro direto" não é um case dentro da switch**/

  /** Ex.3 - pares e impares.
   O código exibe uma Array "numeros" com díversos números e duas arrays vazias: "array1" e "array2" . 
   Depois estabelece um loop "for of" que passatá por cada elemento dessa array e verivicará  cada elemento desta levando seu valor para a variavel número. Dentro do Laço "for of" têm um If que verifica se o  resto da divisão de "número" é 0, sabendo assim se ele é par. se for, ele é enpurrado para a "array1" e se não for (else) sera empurrado para a "array2" pelo elemento "".push()"
   
   No console será impresso a frase : Quantidade total de números 14 ( que é dada pela leitura do comprimento da array"numeros" pelo elemento ".length")

   Será impresso também o comprimento da array1(de pares) e da "array2" (de impares)
   **/

   /** Ex.4 Maior e menor número
    
    O código é composto por uma array de números  positivos e negativos.
    Abaixo foi criada duas variaveis, "numero1" e "numero2" que receberão um valor depois que a array for verificada pelo elemento de laço "for of".

    Dentro do laço temos dois elementos "if":
    
    O primeiro irá verificar se cada valor da array é menor que o valor "infinit" (que, segundo a explicação do Caio, é o maior numero que tem já que é infinito) atribuido à variável "numero1". Se for, a variável "numero1" receberá o novo valor de "número" até a lista toda ser verificada 

    O segundo "if" irá verificar se cada valor da array é maior que o valor "0" atribuido à variável "numero2". Se for, a variável "numero2" receberá o novo valor de "numero" até a lista toda ser verificada.

    no console será impresso o valor da variável numero1 que é "-10" e o valor da variável numero2 que é "1590"  **/

    //   Exercícios de Lógica de Programação

      /** Exercício 1

    Existem algumas maneiras de percorrer uma lista. Podemos usar Laços, "for of", "while", ou "for", podemos usar "switch case" ou as funções de array como "forEach()", "map()" e "filter()".
    
    Exemplo de laços:
    
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9,  10, 11, 12, 13, 14, 15]
    let arrayPar = []
    for(let valores of array){
        if(valores%2 === 0){
            arrayPar.push(valores)
        }
     
    }
   
    console.log(arrayPar)
    let i=array[0]
    while(i<array.length){
        comandos aqui

        i++
    }

    for(let i=0; i< array.length;i+=1){
        comandos aqui
    }
   **/
  /** Exercício 2
    a-) false
    b-) true
    c-)true
    d-)true
    e-)true 
    
    **/

   /** Exercício 3 
   Este código ainda não funciona por alguns motivos:
   1-Não foi pedido ao usuário a insersão no prompt da variável "quantidadeDeNumerosPares" 
   2- A variável "i"  não recebe a implementação gerando assim um loop infinito. 
   3-O console está imprimindo a multiplicação de i por dois e não o número par.
   4- Par isso é preciso além de implementar uma verificação dos números através de if  e só adicionar +1 à "i" se o número for par.
   5-) A variável número será implementada fora do "if" para receber +1 a cada vez que o loop voltar.

   Correção de Implementação:

   const quantidadeDeNumerosPares = Number(prompt("Digite a quantidade de números pares a serem impressos"))
    let contaPar = 0
    let numero = 0
    while(contaPar < quantidadeDeNumerosPares ) {
        if(numero % 2 === 0){
            console.log(numero)
            contaPar+=1
        }
     numero += 1
    }    
  **/

   /** Exercício 4 

function queTrianguloEEsse(lado1, lado2, lado3){

    if((lado1 === lado2)&& (lado1 === lado3) && (lado2===lado3)){
        console.log("Este triângulo é Equilátero")
    }else if((lado1 !== lado2)&& (lado1 !== lado3) && (lado2!==lado3)){
        console.log("Este triangulo é Escaleno")
    }else{
        console.log("este triângulo é isóceles")
    }
}

queTrianguloEEsse()**/

/** Exercício 5 
  
const comparaNumero = (numero1, numero2)=>{

    // Identifica qual é o maior)
    if(numero1>numero2){
    console.log(`O maior é ${numero1}`)
    }else if(numero1===numero2) {
        console.log(`${numero1} e ${numero2} são iguais`)

    }else{
        console.log(`O maior é ${numero2}`)
    }

    // Identifica se são divisíveis
    if(numero1 % numero2 ===0){
        console.log(`${numero1} é divisível por ${numero2}`)
    }else{
        console.log(`${numero1} não é divisível por ${numero2}`)
    }

    if(numero2 % numero1 ===0){
        console.log(`${numero2} é divisível por ${numero1}`)
    }else{
        console.log(`${numero2} não é divisível por ${numero1}`)
    }

    // diferençaentre os números

    if((numero1-numero2) >= 0){
        let diferenca1 = (numero1-numero2)
        console.log("A diferença entre eles é" + diferenca1 )
    }else if ((numero2-numero1) >= 0){
        let diferenca2 = (numero2-numero1)
        console.log(`A diferença entre eles é ${diferenca2}`)
    }
}

comparaNumero()**/

// Exercícios de Funções

 /** Exercício 1 

let arrayDeNumeros=[ 2, 0.5, 4, 1, 5, 6, 20, 7, -10, 10, 9, -1, 1008]

function segundoMaiorEMenor(array){
    let menorNumero =arrayDeNumeros[0]
    let maiorNumero =arrayDeNumeros[0]
    let segundoMenor =arrayDeNumeros[0]
    let segundoMaior =arrayDeNumeros[0]
    for(numero of arrayDeNumeros){
        if(numero<menorNumero){
            menorNumero=numero
        }
        
        if(numero>maiorNumero){
            maiorNumero=numero
        }    
    }

    let indexmenor = arrayDeNumeros.indexOf(menorNumero)
    arrayDeNumeros.splice(indexmenor,1)
    let indexmaior = arrayDeNumeros.indexOf(maiorNumero)
    arrayDeNumeros.splice(indexmaior,1)
    
    

    for(numero of arrayDeNumeros){
        if(numero<segundoMenor){
            segundoMenor=numero
        }
        if(numero>segundoMaior){
            segundoMaior=numero
        }    

    }
    console.log(arrayDeNumeros)

    console.log (`${segundoMenor} é o segundo menor número e ${segundoMaior} é o segundo maior número da arrayDeNumeros `)
}

segundoMaiorEMenor(arrayDeNumeros)
**/

/** Exercício 2 
let funcaoNaoNomeada=()=>{
    alert("Hello Future4")
}
funcaoNaoNomeada()**/


// Exercícios de Objetos

/** Exercício 1 
Arrays e Objetos são listas que servem para guardar dados. Criando assim, uma forma mais eficaz de utilizar o código sem precisar criar uma função para cada valor. 

Usa-se uma array quando a seleção de dados que vamos usar é simples e sem a necessidade de criar categorias, como por exemplo, uma lista de números que você quer separar como par ou ímpar, ou de nomes que você quer verificar se um deles está cadastrado ou não, ou até mesmo com strings, números e bolleanos juntos, caso você queira depois separa por type.

Objetos são listas também, mas organizadas com "compartimentos" que guardam informações sobre uma mesma referência. por exemplo se tenho uma lista de modelos para fazer uma propaganda e quero escolher uma pessoa com características físicas específicas como altura , cor da pele, e tipo de cabelo, organizo essas informações em objetos e quando for procurar pessoas com estas características, tenho uma função de filtro para saber, por exemplo, que pessoas desta lista tem o tipo de cabelo que eu preciso para a propaganda de shampoo para cabelos crespos.

Posemos ter também listas formadas por objetos e lista que fazem parte de uma das chaves do objeto. 
**/

/** Exercício 2 

let objeto={largura: "x", altura:"y", perímetro: "z", área:"w"}

function criaRetangulo(lado1, lado2){
    let retangulo={
        ...objeto,
      largura:lado1,
      altura: lado2,
      perímetro:(2*lado1+lado2),
      área:(lado1*lado2)
    }
    console.log(retangulo)
}


criaRetangulo(3,4)
**/

/** Exercício 3
  const filme={
        título: "Que Horas Ela Volta?",
        ano: 2015,
        diretor:"Anna Muylaert",
        elenco:"Regina Casé, Camila Márdila, Karine Teles, Michel Joelsas e Lourenço Mutarelli"
    }
console.log(`Venha assistir ao filme ${filme.título}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.elenco}`)

**/

/** Exercício 4
const pacatoCidadao={
    nome: "João",
    idade: 30,
    email: "pacatocidadao@joão.com.br",
    endereço:"Ladeira da Preguiça, 1000, Bairo do Sono, Carneirinhos-SP",
}

let anonimizarPessoa = ()=>{
    let listaAnonimos={
        ...pacatoCidadao,
        nome: "Anônimo"
    }
    console.log(listaAnonimos)
}
anonimizarPessoa()
**/