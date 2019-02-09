const express = require('express')
const router = express.Router()

const responsables = require('../controllers/responsable.controller')

router.get('/', responsables.getResponsables)
router.post('/', responsables.createResponsables)
router.get('/:id', responsables.getResponsable)
router.put('/:id', responsables.updateResponsables)
router.delete('/:id', responsables.deleteResponsables)


module.exports = router