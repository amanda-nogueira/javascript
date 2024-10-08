/**
 * Cálculo da média de 2 notas
 * @author Amanda
 */
const input = require('readline-sync') //Importar o pacote readline-sync (input no console)
const colors = require('colors')
let nota1, nota2, media //Variáveis
console.clear()
console.log('Calculo da média') //captura da nota pelo pacote readline-sync
nota1 = Number(input.question('Digite a nota 1: ')) //entrada
nota2 = Number(input.question('Digite a nota 2: ')) //entrada
media = (nota1 + nota2) / 2 //processamento
console.log(`Média: ${media.toFixed(2)}`) //saída
if (media < 5) {
    console.log('Você está reprovado!'.red)
} else {
    console.log('Você está aprovado!'.blue.italic)
}