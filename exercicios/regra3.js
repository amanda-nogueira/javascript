/**
 * Regra de 3
 * @author Amanda
 */

const input = require('readline-sync')
console.clear()
console.log('Cálculo do valor da porcetagem')
console.log('X % de Y = valor')
let x, y, valor //variáveis
x = Number(input.question('Digite o valor de X:')) //entrada
y = Number(input.question('Digite o valor de Y:'))
valor = (x * y)/100 //processamento
console.log(`${x}% de ${y} = ${valor.toFixed(2)}`)
_______________
