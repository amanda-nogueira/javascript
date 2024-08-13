/**
 * Jogo do dado - Exemplo de uso de uma função simples
 * @author Amanda
 */
const input = require('readline-sync')
let face
let confirma
jogarDado()
function jogarDado() {
    console.clear()
    console.log('Jogo do dado')
    input.question('Pressione a tecla [Enter] para jogar o dado: ')
    face = Math.floor(Math.random() * 6 + 1)
    console.log(`Face do dado: ${face}`)
}
confirmar = input.question("Deseja jogar novamente?[s/n]: ")
if (confirmar === "s") {
    jogarDado()
}
else {
    console.log("Obrigado!")
}