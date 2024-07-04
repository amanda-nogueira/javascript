/**
 * Cálculo de desconto
 * @author Amanda
 */
const input = require('readline-sync')
console.clear()
console.log('Cálculo de desconto')
let total, desconto, valorDesc, totalComDesc
total = Number(input.question('Digite o valor total da compra: '))
desconto = Number(input.question('Digite o valor de desconto em %: '))
valorDesc = (total * desconto) / 100
totalComDesc = total - valorDesc
console.log('Valor total da compra é ' + `${total.toFixed(2)}` + ' e o valor de desconto é ' + desconto + '%' +
 ', que finaliza o valor da compra com desconto em R$' 
+ `${totalComDesc.toFixed(2)}`)