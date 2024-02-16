//Uma loja vende seus produtos no sistema entrada mais duas prestações, sendo a entrada maior ou igual a
//cada uma das duas prestações; estas devem ser iguais, inteiras e as maiores possíveis. Por exemplo, se o
//valor da mercadoria for R$ 270,00, a entrada e as duas prestações são iguais a R$ 90,00; se o valor da
//mercadoria for R$ 302,00, a entrada é de R$ 102,00 e as duas prestações são iguais a R$ 100,00.
//Escreva um algoritmo que receba o valor da mercadoria e forneça o valor da entrada e das duas
//prestações, de acordo com as regras acima.

import { question } from "readline-sync";

 console.log(` ==== VALOR EM ENTRADA E DUAS PRESTAÇOES ==== `)

//ENTRADA

const valordamercadoria = Number(question(` Valor da mercadoria : `))

//PROCESSAMENTO

const duasprestaçoes = Math.ceil(valordamercadoria / 3 ) //Math.ceil() para arredondar para cima a terça parte do valor da mercadoria

const entrada = duasprestaçoes

//saida

const mensagem = (`
----------------------------------
VALOR DA ENTRADA : ${entrada.toFixed(2)} reais
VALOR DAS DUAS PRESTACOES : ${duasprestaçoes.toFixed(2)} reais
----------------------------------
`)

console.log(mensagem)



































