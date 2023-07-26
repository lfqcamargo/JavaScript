function User (nome, email) {
    this.nome = nome
    this.email = email

    this.exibirInfos = function () {
        return `${this.nome}, ${this.email}`
    }
}

//const novoUser = new User('Lucas', 'lucas.f_95@hotmail.com')

//console.log(novoUser.exibirInfos())

function Admin(role) {
    User.call(this, 'Lucas', 'lucas.f_95@hotmail.com')
    this.role = role || 'estudante'
}

Admin.prototype = Object.create(User.prototype)
const NovoUser = new Admin('admin')
console.log(NovoUser.exibirInfos())
console.log(NovoUser.role)