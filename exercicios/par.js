/**
 * Mostrar números pares
 * @author Amanda
 */ 
console.clear()
let pares = 0
console.log('Números pares de 2 à 20')
for(let i = 1; i < 21; i++){
    if(i % 2 === 0){
        pares++
        console.log(`${i}`)
    }
}
console.log(`${pares} pares`)