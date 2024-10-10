/**
 * Estrutura de dados
 */

const funcionario1 = {}
console.log(typeof(funcionario1))

//Adicionar dados a estrutura - Creat
funcionario1.nome = "Francisco"
funcionario1.cargo = "Funcionário Publico"
funcionario1.email = "francisco@pmpsp.com"
funcionario1.salario = 8000
funcionario1.insta = "@francisco"

//Listar os dados da estrutura - Read
console.log(funcionario1)
console.log(funcionario1.cargo)

//Modificar os dados da estrutura - Uptade
funcionario1.nome = "Francisco Silva"
console.log(funcionario1)

//Excluir dados da estrutura - Delete
delete funcionario1.insta
console.log(funcionario1)

const funcionario2 = {nome: "Bernardo", cargo: "CEO", email: "bernardo@ceosp.com", salario: 9800000}
console.log(funcionario2)

const endereco1 = {logradouro: "Bat Caverna", cidade: "Gothan City", estado: "New Jersey"}
console.log(endereco1)

const funcionario3 = {nome: "Alfred Pennywort", cargo: "Mordomo", email: "alfred@emailsp.com", salario: 20000, ... endereco1}
console.log(funcionario3)

const funcionario4 = {nome: "Dick Grayson", cargo: "Acrobata", email: "dick@emailsp.com", salario: 2000, ... endereco1}
console.log(funcionario3)

const funcionario5 = {nome: "Tony Stark", cargo: "Engenheiro", email: "tony@email.com", salario: 3750000, armadura: {versao: "Mark II", ano: 2010, reator: "Arc 01"}, 
switUp: () => {console.log("🤖")}}
console.log(funcionario5)
console.log(funcionario5.cargo)
console.log(funcionario5.armadura.versao)
funcionario5.switUp()

