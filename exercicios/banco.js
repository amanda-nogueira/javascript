/**
 * Exercício de fixação dos conceitos de POO
 * @author Amanda
 */
const colors = require('colors')
//Classe modelo
class Conta {
    //Atributos encapsulados
    constructor(numero, titular, saldo) {
        this._numero = numero
        this._titular = titular
        this._saldo = saldo
    }
    //Métodos
    getNumero() {
        return this._numero
    }
    getTitular() {
        return this._titular
    }
    getSaldo() {
        return this._saldo
    }
    exibirSaldo() {
        console.log(`O saldo da conta de ${this.getTitular()} é R$ ` + (`${this.getSaldo().toFixed(2)}`.green))
    }
    depositar(valor) {
        this._saldo += valor
        console.log(`Crédito de R$ ${valor.toFixed(2)}`.blue)
    }
    sacar(valor) {
        if (valor > this.getSaldo()) {
            console.log(` * Pix de R$ ${valor.toFixed(2)} não realizado`.red)
            console.log('Saldo insuficiente. Operação cancelada'.bgMagenta)
        } else {
            this._saldo -= valor
            console.log(`Débito de R$ ${valor.toFixed(2)}`.red)
        }
    }
    pix(valor, destino) {
        if (valor > this.getSaldo()) {
            console.log(` * Débito de R$ ${valor.toFixed(2)}`.red)
            console.log('Saldo insuficiente. Operação cancelada'.bgMagenta)
        } else {
            this._saldo -= valor
            destino.depositar(valor)
            console.log(`PIX de R$ ${valor.toFixed(2)} para ${destino.getTitular()} realizado com sucesso`.bgWhite.bold)
        }
    }
}
class ContaPoupanca extends Conta {
    //Atributos
    constructor(numero, titular, saldo) {
        super(numero, titular, saldo)
    }
    //Método
    exibirSaldoPoupanca(){
        console.log(`O saldo da conta poupança de ${this.getTitular()} é R$ ` + (`${this.getSaldo().toFixed(2)}`.green))
    }
}
console.clear()
console.log('Banco NG')
console.log(" ____    ____  ____     __   ___       ____    ____ ".yellow)
console.log("|    \\  /    ||    \\   /  ] /   \\     |    \\  /    |".yellow)
console.log("|  o  )|  o  ||  _  | /  / |     |    |  _  ||   __|".yellow)
console.log("|     ||     ||  |  |/  /  |  O  |    |  |  ||  |  |".yellow)
console.log("|  O  ||  _  ||  |  /   \\_ |     |    |  |  ||  |_ |".yellow)
console.log("|     ||  |  ||  |  \\     ||     |    |  |  ||     |".yellow)
console.log("|_____||__|__||__|__|\\____| \\___/     |__|__||___,_|".yellow)
console.log('')

let cc1 = new Conta(1, 'Bernardo', 50000)
console.log(`Cliente: ${cc1.getTitular()} | Conta: ${cc1.getNumero()}`.bold)
cc1.exibirSaldo()
cc1.depositar(1000)
cc1.exibirSaldo()
cc1.sacar(2005)
cc1.exibirSaldo()
console.log('')

let cc2 = new Conta(2, 'José', 85600)
console.log(`Cliente: ${cc2.getTitular()} | Conta: ${cc2.getNumero()}`.bold)
cc2.exibirSaldo()
cc2.depositar(100)
cc2.exibirSaldo()
cc2.sacar(2005)
cc2.exibirSaldo()
cc2.sacar(83695)
cc2.exibirSaldo()
console.log('')

let cc3 = new Conta(3, 'Amanda', 95000)
console.log(`Cliente: ${cc3.getTitular()} | Conta: ${cc3.getNumero()}`.bold)
cc3.exibirSaldo()
cc3.depositar(200)
cc3.exibirSaldo()
cc3.sacar(100000)
cc3.exibirSaldo()
cc3.pix(820, cc2)
cc3.exibirSaldo()

console.log('')
cc2.exibirSaldo()
console.log('')

console.log('__________________________________________________________')
console.log('')
let cp1 = new ContaPoupanca(10, 'Bernardo', 1500)
console.log(`Cliente: ${cp1.getTitular()} | Conta: ${cp1.getNumero()}`.bgCyan.bold)
cp1.exibirSaldoPoupanca()
console.log('')