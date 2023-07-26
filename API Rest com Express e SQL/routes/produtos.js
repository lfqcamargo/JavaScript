const express = require('express')
const router = express.Router() /* DECLARANDO UMA VARIAVEL PARA AS ROTAS */

router.get('/', (req, res, next) => { /* RETONANDO TODOS produtos */
    res.status(200).send({
        mensagem: 'Usando o GET dentro da rota de produtos'
    })
})

router.get('/:id_produto', (req, res, next) => { /* RETORNANDO UM PRODUTO COM ID */
    const id = req.params.id_produto /* DEFININDO O PARAMETRO ID */

    if (id === 'especial') {
        res.status(200).send({
            mensagem: 'Usando o GET dentro da rota de produtos com um produto exclusivo',
            id: id
        })
    } else {
        res.status(200).send({
            mensagem: 'Voce passou um ID',
            id: id
        })
    }
    
})

router.post('/', (req, res, next) => { /* INSERIR UM PRODUTO */

    const produto = {
        nome: req.body.nome,
        precco: req.body.preco
    }

    res.status(201).send({
        mensagem: 'Produto Criado',
        produtoCriado: produto
    })
})

router.patch('/', (req, res, next) => { /* ATUALIZA UM PRODUTO */
    res.status(201).send({
        mensagem: 'Usando o PATCH dentro da rota de produtos'
    })
})

router.delete('/', (req, res, next) => { /* DELETA UM PRODUTO */
    res.status(201).send({
        mensagem: 'Usando o delete dentro da rota de produtos'
    })
})

module.exports = router