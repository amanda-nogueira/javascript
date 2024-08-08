/**
 * Exercício sorteio de um jogo de dado
 * @author Amanda
 */
console.clear()
const input = require('readline-sync')
let face
console.log('Jogo do dado')
input.question('Pressione a tecla [Enter] para jogar o dado: ')
face = Math.floor(Math.random() * 6) //Sorteio da face de um dado
//Math == classe matemática, floor == conversão para números inteiros, random() * 6 == gerador de númerps aleatório de 0 a 5
console.log(`Face do dado: ${face}`)
switch (face) {
    case 0:
        console.log('⚀')
        break
    case 1:
        console.log('⚁')
        break
    case 2:
        console.log('⚂')
        break
    case 3:
        console.log('⚃')
        break
    case 4:
        console.log('⚄')
        break
    case 5:
        console.log('⚅')
        break
}
