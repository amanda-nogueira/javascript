/**
 * Exemplo de encadeamento do laço for
 * @author Amanda
 */
console.clear()
for(let i = 1; i < 11; i++){
    console.log('')
    console.log(`Tabuada do ${i}:`)
    for(let x = 1; x < 11; x++)
    console.log(`${x} x ${i} = ${x * i}`)
}