const user = {
    nome: "Lucas",
    email: "lucas.f_95@hotmail.com",
    nascimento: "1995/22/11",
    role: "admin",
    ativo: true,
    exibirInfos: function () {
        console.log(this.nome, this.email)
    }
}

user.exibirInfos()

const exibir = function() {
    console.log(this.nome)
}

const exibirr = exibir.bind(user)
exibirr()