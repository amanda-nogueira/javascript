/**
 * Assincronismo - Promise
 * Fetch
 */
const input = require('readline-sync')
console.clear()
console.log("VIA CEP")

let cep = input.question("Digite o CEP: ")
let urlAPI = `https://viacep.com.br/ws/${cep}/json/`
console.log(urlAPI) //teste

//Uso de promise (fetch)
fetch(urlAPI)
.then((response) => {
    return response.json()
})
.then((dados) => {
    console.log(dados.logradouro)
    console.log(dados.bairro)
    console.log(dados.localidade)
    console.log(dados.uf)
})
.catch((error) => {
    console.log(error)
})