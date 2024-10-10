/**
 * Assincronismo 
 * Async awati
 */
const fs = require('fs') //biblioteca internar do JS para lidar com arquivos

async function criarArquivo(){
    let conteudo = 'Amanda Nogueira \nExemplo de uso dos recursos async - await'
    await gravarArquivo('teste.txt', conteudo)
}
async function gravarArquivo(path, conteudo){
    try {
        await fs.promises.writeFile(path, conteudo)
        console.log('Arquivo gravado com sucesso')
    } catch (error) {
        console.log(error)
    }
}
console.clear()
criarArquivo()

