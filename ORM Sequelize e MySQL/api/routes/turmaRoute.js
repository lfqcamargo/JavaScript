const { Router } = require('express')
const TurmaController = require('../controllers/TurmaController.js')

const router = Router()

router.get('/turma', TurmaController.pegaTodosAsTurmas)
router.get('/turma/:id', TurmaController.pegaUmaTurma)
router.post('/turma', TurmaController.criaTurma)
router.put('/turma/:id', TurmaController.atualizaTurma)
router.delete('/turma/:id', TurmaController.apagaTurma)

module.exports = router