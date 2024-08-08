/**
 * Estrutura para cálculo de combustível
 * @author Amanda
 */
const colors = require('colors')
const input = require('readline-sync')
console.clear()
console.log('Cálculo de combustível')
let etanol, gasolina
etanol = Number(input.question('Digite o valor do etanol: '))
gasolina = Number(input.question('Digite o valor da gasolina: '))
if (etanol < 0.7 * gasolina) {
    console.log('Compensa abastecer com ' +  'ETANOL'.bgBlue)
} else {
    console.log('Compensa abastecer com ' + 'GASOLINA'.bgGreen)
}