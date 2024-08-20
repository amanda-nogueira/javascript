/**
 * Atividade 4: POO - carros)
 * @author Amanda
 */
//Classe modelo (abstração)
class Bloco {
    //atributos
    constructor(ano, cor) {
        this.ano = ano
        this.cor = cor
    }
}
criarCarro(){
    console.log('---------------------------------------')
    console.log("  ┍━┑  ")
    console.log("--   --")
    console.log("  u u  ")
    console.log(`Ano do ${this.ano}`)
    console.log(`Cor do ${this.cor}`)
}
ligarCarro(){
    console.log('---------------------------------------')
    console.log('Vruuuuuuuuuuuuuum')
}
desligarCarro(){
    console.log()
}