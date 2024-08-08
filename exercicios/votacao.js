/**
 * Exercício de sistema de votação no Brasil
 * @author Amanda
 */
const input = require('readline-sync')
const colors = require('colors')
console.clear()
let idade
console.log('Votação no Brasil, você pode votar?')
idade = Number(input.question('Digite a idade: ')) //entrada
console.log(`Você tem: ${idade.toFixed()}`) //saída
if (idade < 16) {
    console.log('Você ainda NÃO pode votar!'.yellow)
} else if (idade >= 18 && idade <= 70) {
    console.log('Você DEVE votar!'.red)
} else {
    console.log('Você PODE votar!'.blue.italic)
}