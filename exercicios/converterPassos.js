/**
 * Converter passos em kilômetros
 * @author Amanda
 */
const input = require('readline-sync')
console.clear()
let passos, comprimento, distancia
passos = Number(input.question('Digite quantos passos: '))
comprimento = 0.76
distancia = passos * comprimento
console.log(`Você deu ${passos} passos, que convertidos em kilômetro dá: ${distancia}.`)