/**
 * Cálculo da quantidade de tijolos baianos 8 furos por metro quadrado, sabendo que 1m2 = 28 tijolos.
 * @author Amanda
 */
const input = require('readline-sync')
console.clear()
let m2, tijolos //váriavel
console.log('Cálculo da quantidade de tijolos por metro quadrado (tijolo baiano 8 furos')
m2 = Number(input.question('Quantos metros quadrados voce precisa? ')) //entrada
tijolos = m2 * 28 //preocessamento
console.log(`Você precisará de ${tijolos} tijolos`)