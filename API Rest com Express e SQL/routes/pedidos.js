const express = require('express')
const router = express.Router() /* DECLARANDO UMA VARIAVEL PARA AS ROTAS */

router.get('/', (req, res, next) => { /* RETONANDO TODOS PEDIDO */
    res.status(200).send({
        mensagem: 'Usando o GET dentro da rota de pedido'
    })
})

router.get('/:id_produto', (req, res, next) => { /* RETORNANDO UM PRODUTO COM ID */
    const id = req.params.id_produto /* DEFININDO O PARAMETRO ID */

    if (id === 'especial') {
        res.status(200).send({
            mensagem: 'Usando o GET dentro da rota de pedido com um produto exclusivo',
            id: id
        })
    } else {
        res.status(200).send({
            mensagem: 'Voce passou um ID',
            id: id
        })
    }
    
})

router.post('/', (req, res, next) => { /* INSERIR UM PEDIDO */

    const pedido = {
        id_produto: req.body.id_produto,
        quantidade: req.body.quantidade
    }

    res.status(201).send({
        mensagem: 'O Pedido foi criado',
        pedidoCriado: pedido
    })
})

router.patch('/', (req, res, next) => { /* ATUALIZA UM PEDIDO */
    res.status(201).send({
        mensagem: 'Usando o PATCH dentro da rota de pedido'
    })
})

router.delete('/', (req, res, next) => { /* DELETA UM PEDIDO */
    res.status(201).send({
        mensagem: 'Usando o delete dentro da rota de pedido'
    })
})

module.exports = router