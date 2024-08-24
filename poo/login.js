/**
 * POO - Fundamentos da programação orientada a objetos
 * Encapsulamento
 * @author Amanda
 */
class Usuarios {
    //Atributos
    constructor(login, senha) {
        this.login = login //atributo publico
        //---------------------------------------------------
        let _senha = senha //atibuto privado (encapsulamento)
        //Método para obter a senha(get)
        this.getSenha = () => _senha
        //Método para modificar a senha(set)
        this.setSenha = (novaSenha) => _senha = novaSenha
        //---------------------------------------------------
    }
    //Métodos
    logar() {
        console.log(`Usuário: ${this.login}`)
        console.log(`Senha: ${this.getSenha()}`)
        if (this.login === 'admin' && this.getSenha() === '123@senac') {
            console.log('Usuário autenticado')
        } else {
            console.log('Usuário e/ou senha inválido(s)')
        }
    }
}
console.clear()
const user1 = new Usuarios('admin', '123@123')
user1.logar()
user1.setSenha('123@senac') //setar a senha
user1.logar()