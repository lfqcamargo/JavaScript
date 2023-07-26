const express = require('express') /* PARA FAZER O MODULO app PRIMEIRO IMPORTAMOS O EXPRESS */
const app = express() /* EM SEGUIDA DEFINIMOS UMA VARIAVEL PARA O EXPRESS QUE FOI IMPORTADO */
const rotasProdutos = require('./routes/produtos.js') /* PEGANDO AS ROTAS DO PRODUTO */
const rotasPedidos = require('./routes/pedidos.js')
const morgan = require('morgan') 
const { error } = require('console')
const bodyParser = require('body-parser')

app.use(morgan('dev')) /* MOSTRAR NO TERMINAL */
app.use(bodyParser.urlencoded({extended: false})) /* APENAS DADOS SIMPLES */
app.use(bodyParser.json()) /* ACEITER APENAS JSON NO BODY */

app.use('/produtos', rotasProdutos) /* CASO FOR /PRODUTOS, UTILIZAREMOS A rotasProdutos */
app.use('/pedidos', rotasPedidos) /* CASO FOR /PRODUTOS, UTILIZAREMOS A rotasPedidos */

app.use((req, res, next) => { /* CONFIGURAÇÕES DO HEADER */
    res.header('Acess-Control-Allow-Origin', '*') /* PERMISSÃO PARA TODOS */
    res.header(
        'Acess-Control-Allow-Header',
        'Origin, X-Requrested-With, Content-Type, Accept, Authorization')

        if (req.method === 'OPTIONS') {
            res.header('Acess-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
            return res.status(200).send({})
        }
        next()
})

app.use((req, res, next) => {
    const erro = new Error('Não encontrado')
    erro.status = 404
    next(erro)
})

app.use((erro, req, res, next) => {
    res.status(error.status || 500)
    return res.send({
        erro: {
            mensagem: error.message
        }
    })
})


/* AGORA IREMOS USAR O app PARA CRIAR UM ALGUNS DOS PARAMETROS DO SERVIDOR, NESTE CASO UTILIZANDO UMA FUNÇÃO.
IREMOS PASSAR NESTA FUNÇÃO A REQUISIÇÃO, A RESPOSTA, E O PRÓXIMO. */

app.use((req, res, next) => {
    res.status(200).send({ /* O res É A RESPOSTA QUE DAREMOS AO CLIENTE, JUNTAMENTE COM O STATUS. O send SERÁ O OBJETO QUE IRÁ SER ENVIADO */
        messagem: 'OK, Deu Certo' /* NESTE CASO IREMOS RESPONDER O CLIENTE COM UM OBJETO DO TIPO MENSAGEM */
    })
})

module.exports = app /* AQUI IREMOS MANDAR O app PARA O SERVER */