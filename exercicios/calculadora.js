/**
 * Atividade - Calculadora usando funções
 * @author Amanda
 */
const input = require("readline-sync")
let num1, num2, operador

function somar(num1, num2) {
    return (console.log(`${num1} + ${num2} = ${num1 + num2}`))
}
function subtrair(num1, num2) {
    return (console.log(`${num1} - ${num2} = ${num1 - num2}`))
}

let multiplicar = function (num1, num2) {
    return (console.log(`${num1} x ${num2} = ${num1 * num2}`))
}

let dividir = function (num1, num2) {
    return (console.log(`${num1} / ${num2} = ${num1 / num2}`))
}

let porcentagem = (num1, num2) => {
    return (console.log(`${num1} % ${num2} = ${(num1 * num2) / 100 }`))
}

console.clear()
console.log("Calculadora")

num1 = Number(input.question("Digite o numero 1: "))
num2 = Number(input.question("Digite o numero 2: "))
console.log("")
console.log("1. Somar")
console.log("2. Subtrair")
console.log("3. Multiplicar")
console.log("4. Dividir")
console.log("5. Calcular porcentagem")

operador = Number(input.question('Digite uma opcao: '))

switch (operador) {
    case 1:
        somar(num1, num2)
        break

    case 2:
        dividir(num1, num2)
        break

    case 3:
        multiplicar(num1, num2)
        break

    case 4:
        dividir(num1, num2)
        break

    case 5:
        porcentagem(num1, num2)
        break
    default:
        console.log("Digite uma opcao valida")
}