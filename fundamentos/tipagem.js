/**
 * Estudos das variáveis - tipagem dinâmica
 * @author Amanda
 */
console.clear()
console.log("Strings______________")
let nome = "Amanda"
console.log(typeof(nome))
console.log(nome)
//Concatenação (unir um texto com o conteúdo de uma variável)
console.log("professora: " + nome) //Evitar concatenar dessa forma
console.log(`professora: ${nome}`) //USAR ESSE FORMATO
console.log("Números______________")
let peso = 60
let altura = 1.57
console.log(typeof(peso))
console.log(typeof(altura))
console.log(Number.isInteger(peso))
console.log(Number.isInteger(altura))
let imc = peso / (altura * altura)
console.log(`IMC: ${imc.toFixed(2)}`) //toFixed(2) arredondar para 2 casas decimais.
//ATENÇÃO !!
console.log(10/0)
console.log("2" + 2)
console.log("2" - 2)
console.log("2" * 2)
console.log("2" / 2)
console.log("2x" - 2)
console.log(0.5 + 0.5)
console.log(0.1 + 0.2)
console.log("Boleanos_________________")
let chave = true
console.log(typeof(sw))
let lampada = false
console.log(typeof(lampada))
console.log(`Chave: ${chave} Lâmpada: ${lampada}`)
console.log()