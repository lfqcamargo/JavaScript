const User = require('./User.js')

class Docente extends User {
    constructor (nome, email, nacimento, role = 'docente', ativo = true) {
        super(nome, email, nacimento, role, ativo) 
    }
    aprovaEstudante(estudante, curso) {
        return `estudante ${estudante} aprovado no curso ${curso}.`
    }
}

module.exports = Docente;