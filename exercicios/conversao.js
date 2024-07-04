/**
 * Conversão de real para euro
 * @author Amanda
 */
const input = require('readline-sync')
console.clear()
console.log('Conversão de Real para Euro')
let real, euro, total
real = Number(input.question('Digite o valor em reais: '))
euro = Number(input.question('Digite a cotacao do valor do euro: '))
total = real / euro
console.log(`R$ ${real.toFixed(2)} equivale a ${total.toFixed(2)} euros`)