/**
 * Cálculo do volume de um aquário
 * @author Amanda
 */
const input = require('readline-sync')
console.clear()
console.log('Cálcule o volume de água em um aquário')
let comprimento, largura, altura, litros //variáveis
comprimento = Number(input.question('Digite o comprimento em cm do aquario: ')) //entrada
largura = Number(input.question('Digite a largura em cm do aquario: '))
altura = Number(input.question('Digite a altura em cm do aquario: '))
litros = (comprimento * largura * altura) / 1000
console.log(`No aquário cabe ${litros.toFixed(1)} litros de água`)
