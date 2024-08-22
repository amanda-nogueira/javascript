/**
 * Atividade 4: POO - carros)
 * @author Amanda
 */
//Classe modelo (abstração)
class Carro {
    //Atributos
    constructor(ano, cor, modelo, chassi) {
        this.ano = ano
        this.cor = cor
        this.modelo = modelo
        this.chassi = chassi
    }
    //Métodos
    criarCarro() {
        console.log('---------------------------------------')
        console.log("  ┍━┑  ")
        console.log("--   --")
        console.log("  u u  ")
        console.log(`Ano do carro: ${this.ano}`)
        console.log(`Cor do carro: ${this.cor}`)
        console.log(`Modelo do carro: ${this.modelo}`)
        console.log(`Chassi do carro: ${this.chassi}`)
    }
    ligarCarro() {
        console.log(`Ligando ${this.modelo}`)
    }
    desligarCarro() {
        console.log(`Desligando ${this.modelo}`)
    }
    acelerarCarro() {
        console.log('Vruuuuuuuuuuuuuuuum')
    }
}
//Classe modelo com herança
class Aviao extends Bloco {
    //Atributos
    constructor(ano, cor, modelo, chassi, envergadura) {
        super(ano, cor, modelo, chassi)
        this.envergadura = envergadura
    }
    //Métodos
    criarAviao(){
        
    }
}