/**
 * Estrutura de dados
 * Array (vetor)
 */
//Array simples
//                 0             1          2          3
let times = ['Corinthians', 'São Paulo', 'Santos', 'Palmeiras']
console.log(times)
console.table(times)
console.log(times[0])

//Array multidimensional (matriz)
let boletim = [[8,7,9,3], [4,5,8,6]] //"linhas de uma tabela"
console.log(boletim)
console.table(boletim)
console.log(boletim[0][1])

//Estrutura de dados
let alunosEM1 = ["Victor", "Amanda", "Saulo", "Diego", "Bruno", "Edson"]
//Exibindo o tamanho do vetor
console.log(alunosEM1.length)

//CRUD - (Creat, Read, Uptade, Delete)
console.log(alunosEM1) //Read
console.table(alunosEM1)

//CRUD Creat
alunosEM1.push("Jorge")
console.log(alunosEM1)
console.table(alunosEM1)

//CRUD Uptade
alunosEM1[0] = "Vitor"
console.log(alunosEM1)
console.table(alunosEM1)

//CRUD Delete
delete alunosEM1[2]
console.log(alunosEM1)
console.table(alunosEM1)

///Percorrendo um vetor
let notas = [3, 8, 5, 9, 2]
console.log(notas)
console.table(notas)

//Laço FOR
for(let i = 0; i < notas.length; i++){
    console.log(notas[i])
}

//ForEach - simplificação do laço FOR para percorrer um vetor
notas.forEach((n) => {
    console.log(n)
})

//MAP - mapeamento dos dados de um vetor
//Exemplo 1: Adicionar 1 ponto as notas
let notasAtual = notas.map((na) => {
    return na + 1
})
console.log(notasAtual)

//Exemplo 2: Conversão do sistema de pontos para letras
//NA - Não atendeu (nota < 5); PA - Parcialmente atendido (nota entre 5 e 7); A - Atendeu (nota > 7)
let notasConv = notas.map((nc) => {
    if(nc < 5){
        return ("NA")
    }else if(nc > 7){
        return ("A")
    }else{
        return ("PA")
    }
})
console.log(notas)
console.table(notasConv)

//Iniciando um veotr como um objeto
let alunosEM2 = new Array("Tony", "Peter", "Thor", "Natasha")
console.log(alunosEM2)
console.table(alunosEM2)

//Estrutura de dados usando array e objetos
let alunosEM3 = [
    { nome: "Amanda", idade: 26, bolsista: false },
    { nome: "Lais", idade: 27, bolsista: false },
    { nome: "Aline", idade: 34, bolsista: false },
    { nome: "Robson", idade: 35, bolsista: true },
    { nome: "Francisco", idade: 35, bolsista: false }
]

console.log(alunosEM3)
console.table(alunosEM3)

//Exemplo 1: Ordenar A-Z
alunosEM3.sort((a,z) =>{
    return (a.nome.localeCompare(z.nome))
})
console.table(alunosEM3)

//Exemplo 2: Ordenar por idade
alunosEM3.sort((x, y) =>{
    return (x.idade - y.idade)
})
console.table(alunosEM3)


//ATENÇÃO !! Na filtragem criar uma cópia para exibição (... cópia do array)
let alunosOrdenados = [...alunosEM3]
alunosOrdenados.sort((a,z) => {
    return (a.nome.localeCompare(z.nome))
})
console.table(alunosOrdenados)

//Busca personalizadas
//Exemplo 1: alunos bolsistas
console.log(alunosEM3.filter((b) =>{
    return b.bolsista === true
}))

//Exemplo 2: alunos com idade superior a 30 anos
console.log(alunosEM3.filter((i) =>{
    return i.idade > 30
}))