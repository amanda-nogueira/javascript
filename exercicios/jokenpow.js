/**
 * Desafio do JokenPow
 * @author Amanda
 */
inicio()
function inicio() 
{
    console.clear()
    const input = require('readline-sync')
    let jogador, computador, confirmar
    console.log("Escolha uma opção: ")
    console.log("")
    console.log(" 1. Pedra")
    console.log(" 2. Papel")
    console.log(" 3. Tesoura")

    jogador = Number(input.question("Digite uma opcao: "))

    switch (jogador) {
        case 1:
            console.clear()
            console.log("O jogador escolheu PEDRA")
            break
        case 2:
            console.clear()
            console.log("O jogador escolheu PAPEL")
            break
        case 3:
            console.clear()
            console.log("O jogador escolheu TESOURA")
            break
        default:
            console.log('Opcao invalida')
            break
    }

    computador = Math.floor(Math.random() * 3)
    // console.log(`O computador escolheu: ${computador}`)

    switch (computador) {
        case 1:
            console.log("O computador escolheu PEDRA")
            break
        case 2:
            console.log("O computador escolheu PAPEL")
            break
        case 3:
            console.log(" O computador escolheu TESOURA")
            break
        default:
            console.log('Opcao invalida')
            break
    }
    if ((jogador === 2 && computador === 1 ||
        jogador === 3 && computador === 2 ||
        jogador === 1 && computador === 3)) { // ganho do jogador
        console.log('Jogador ganhou')
    } if ((computador === 2 && jogador === 1 ||
        computador === 3 && jogador === 2 ||
        computador === 1 && jogador === 3)) { // ganho do computador
        console.log('Computador ganhou')
    } else if ((computador === jogador)) {
        console.log('EMPATE')
    }
    confirmar = input.question("Deseja continuar?[S/N]: ")
    if (confirmar === "S") {
        inicio()
    }
    else {
        console.log("Obrigado!")
    }
}