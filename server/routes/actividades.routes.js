const express = require('express')
const router = express.Router()

const actividades = require('../controllers/actividad.controller')

router.get('/', actividades.getActividades)
router.post('/', actividades.createActividades)
router.get('/:id', actividades.getActividad)
router.put('/:id', actividades.updateActividades)
router.delete('/:id', actividades.deleteActividades)


module.exports = router