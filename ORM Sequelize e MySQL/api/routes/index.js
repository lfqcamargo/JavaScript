const bodyParser = require ('body-parser')
const pessoas = require('./pessoasRoute.js')
const niveis = require('./nivelRoute.js')
const turma = require('./turmaRoute.js')

module.exports = app => {
    app.use(bodyParser.json())
    app.use(pessoas, niveis, turma)
   
}