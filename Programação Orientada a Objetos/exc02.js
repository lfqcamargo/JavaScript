const user = {
    nome: "Lucas",
    email: "lucas.f_95@hotmail.com",
    nascimento: "1995/22/11",
    role: "estudante",
    ativo: true,
    exibirInfos: function () {
        console.log(this.nome, this.email)
    }
}

const admin = {
    nome: "Zika",
    email: "zikando@hotmail.com",
    role: "admin",
    CriarCurso() {
        console.log("Curso Criado!")
    }
}

Object.setPrototypeOf(admin, user)

admin.CriarCurso()
admin.exibirInfos()