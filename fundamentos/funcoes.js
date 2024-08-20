/**
 * Estudo das funções em JS
 * Funções simples (literais)
 * @author Amanda
 */
function hello(){
    console.log('Hello Function!')
}
hello()
console.log('')
const hello2 = function(){ //Função atribuída (função anônima)
    console.log('Hello function atribuída')
}
hello2()
console.log('')
const hello3 = () => { //Função atribuída simplificada (arrow function)
    console.log('Hello, arrow function')
}
hello3()
console.log('')
const hello4 = _ => console.log('Hello, arrow fuction one line') //Função atribuída simplificada (arrow function) 1 linha de código
hello4()