/**
 * Estudo da estrutura de repetição infinita WHILE
 * @author Amanda
 */
console.clear()
const input = require('readline-sync')
let x = 1, y = 1 //Modificar valores para testar a diferença entre while, do-while
while(x < 11){
    console.log('Teste da estrutura WHILE')
    x++
}
input.question('Pressione a teclar [Enter] para continuar')
console.clear()
do{
    console.log('Teste da estrutura DO-WHILE')
    y++
}while(y < 11)