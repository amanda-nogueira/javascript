/**
 * Ficha do aluno /Cálculo do IMC 
 * @author Amanda
 */
console.clear()
const input = require('readline-sync')
const colors = require('colors')
let nome, idade, peso, altura, imc
console.log(' _____ __  __  _____ ')
console.log('|_   _|  \\/  |/ ____|')
console.log('  | | | \\  / | |   ')
console.log('  | | | |\\/| | |   ')
console.log(' _| |_| |  | | |____ ')
console.log('|_____|_|  |_|\\_____|')
console.log('')
nome = input.question('Digite o seu nome: ')
idade = Number(input.question('Digite a sua idade: '))
peso = Number(input.question('Digite o seu peso em kg: ').replace(',', '.'))
altura = Number(input.question('Digite a sua altura em cm: '))
imc = peso/((altura/100) * (altura/100))
console.log('')
console.log('________________________________________')
console.log('')
console.log('Ficha do aluno'.italic.bold)
console.log('Nome: ' + nome)
console.log('Idade: ' + idade)
console.log('Peso: ' + peso)
console.log('Altura: ' + altura)
console.log('IMC: ' + imc)
if (imc < 18.5){ console.log('Você está no nível de' + ' MAGREZA'.blue)  } 
else if (imc < 25) { console.log('Você está no nível' + ' PESO IDEAL'.green) }
else if(imc < 30) { console.log('Você está no nível' + ' SOBREPESO'.yellow) }
else if(imc < 40) { console.log('Você está no nível' + ' OBESIDADE'.magenta) } 
else { console.log('Você está no nível' + ' OBESIDADE GRAVE'.red.bold) }
console.log('')