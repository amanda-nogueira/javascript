/**
 * Estudo das funções em JS
 * Funções com parâmetros
 * @author Amanda
 */
//IMPORTANTE!! Funções atribuídas obrigatóriamente precisam ser criadas no início do código (antes de serem executadas)
function somar(num1, num2){ //Função literal com parâmetros
    return(console.log(num1 + num2))
}
somar(2, 5)
console.log('')
let somarAtribuida = function (num1, num2) { //Função atribuída (função anônima) com parâmetros
    return (console.log(num1 + num2))
}
somarAtribuida(5 , 4)
console.log('')
let somarAf = (num1, num2) => { //Função atribuída simplificada (arrow function) com parâmetros
    return (console.log(num1 + num2))
}
somarAf(7, 9)
console.log('')
//Função atribuída simplificada (arrow function) com parâmetros em 1 linha de código (neste caso o return é implícito)
let somarAFS = (num1, num2) => console.log(num1 + num2)
somarAFS(1, 3)
console.log('')