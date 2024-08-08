/**
 * Desafio do JokenPow
 * @author Amanda
 */
console.clear()
const input = require('readline-sync')
let opcao, jogador, computador
console.log('0. Pedra')
console.log('1. Papel')
console.log('2. Tesoura')
computador = Math.floor(Math.random() * 3)
jogador = Number(input.question('Digite a opcao desejada: '))
console.log('')
switch(opcao){
    case 0:
        console.log('Pedra')
        break
    case 1:
        console.log('Papel')
        break
    case 2:
        console.log('Tesoura')
    break
}
console.log(`Jogador escolheu ${jogador} ` + opcao)
console.log(`Computador escolheu ${computador} `)
if(jogador == computador){
    console.log('Empate')
}else if(jogador == 0 && computador == 1){
    console.log('Computador venceu')
}else if(jogador == 1 && computador == 0){
    console.log('Jogador venceu')
}else if(jogador == 1 && computador == 2){
    console.log('Computador venceu')
}else if(jogador == 2 && computador == 1){
    console.log('Jogador venceu')
}else if(jogador == 2 && computador == 0){
    console.log('Computador venceu')
}else if(jogador == 0 && computador == 2){
    console.log('Jogador venceu')
}


