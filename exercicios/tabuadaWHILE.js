/**
 * Tabuada usando estrutura WHILE
 * @author Amanda
 */
console.clear()
const input = require('readline-sync')
let valor
let i = 1
console.log('Tabuada com WHILE')
valor = Number(input.question('Digite o valor da tabuada: '))
console.log('')
while(i < 11){
        console.log(`${i} x ${valor} = ${i * valor}`)
        i++
}