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