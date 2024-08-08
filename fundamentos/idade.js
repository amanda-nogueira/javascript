/**
 * Estudo da estrutura de controle if-else
 * @author Amanda
 */
const input = require('readline-sync')
console.clear()
let idade
console.log('Estudo da estrutura if-else')
console.log('Validar maioridade')
idade = Number(input.question('Digite a sua idade: '))
//Uso da estrutura if-else para validar a idade
if (idade < 18) {
    console.log('Você é menor de idade!')
} else {
    console.log('Você é maior de idade!')
}
