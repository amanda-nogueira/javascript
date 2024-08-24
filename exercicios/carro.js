/**
 * Atividade 4: POO - carros)
 * @author Amanda
 */
const colors = require('colors')
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
        console.log(`Ligando ${this.modelo}`.green)
    }
    desligarCarro() {
        console.log(`Desligando ${this.modelo}`)
    }    
    acelerarCarro() {
        console.log('Vruuuuuuuuuuuuuuuum'.bgMagenta)
        console.log('🚗')
    }
}
//Classe modelo com herança
class Aviao extends Carro {
    //Atributos
    constructor(ano, cor, modelo, chassi, envergadura) {
        super(ano, cor, modelo, chassi)
        this.envergadura = envergadura
    }
    //Métodos
    criarAviao() {
        console.log(`Ano do avião: ${this.ano}`)
        console.log(`Cor do avião: ${this.cor}`)
        console.log(`Modelo do avião: ${this.modelo}`)
        console.log(`Chassi do avião: ${this.chassi}`)
        console.log(`Envergadura do avião: ${this.envergadura}`)
    }
    ligarAviao() {
        console.log(`Ligando ${this.modelo}`.green)
    }
    acelerarAviao() {
        console.log(' Vruuuuuuuuuuuuuuuum '.bgMagenta)
        console.log('✈️')
    }
    fazerPouso() {
        console.log(' 🛬  '.bgCyan)
    }
}
console.log('██    ████ █████  ██████ ██████████    ███ '.blue)
console.log('██    ██████   ████      ██     ████  ████ '.blue)
console.log('██    █████████████   ████████  ██ ████ ██ '.bgBlue)
console.log(' ██  ██ ████   ████    ████     ██  ██  ██ '.yellow)
console.log('  ████  ████   ██ ██████ █████████      ██ '.yellow)
console.log('Vamos viajar?')

const carro1 = new Carro(1997, 'Branco', 'Civic', '4bfc5896gt9655')
carro1.criarCarro()
carro1.ligarCarro()
carro1.acelerarCarro()
carro1.desligarCarro()
console.log('')
const carro2 = new Carro(2024, 'Preto', 'HRV', '5RFT8965FR2121')
carro2.criarCarro()
carro2.ligarCarro()
carro2.acelerarCarro()
carro2.desligarCarro()
console.log('')
const aviao1 = new Aviao(2010, 'Branco', 'Boeing 737', 'PR-XMG', '35.80')
aviao1.criarAviao()
aviao1.ligarAviao()
aviao1.acelerarAviao()
aviao1.fazerPouso()
console.log('')
const aviao2 = new Aviao(2020, 'Azul', 'A380', 'PR-XMG', '80')
aviao2.criarAviao()
aviao2.ligarAviao()
aviao2.acelerarAviao()
aviao2.fazerPouso()