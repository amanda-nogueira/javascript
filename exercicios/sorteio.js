/**
 * Sorteio de aluno de 1 à 16
 * @author Amanda
 */
const input = require('readline-sync')
let sorteio
input.question('Pressione a tecla [Enter] para sortear um numero')
sorteio = Math.floor(Math.random() * 16 + 1)
console.log(sorteio)