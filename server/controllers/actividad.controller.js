const Actividad = require('../models/actividad')
const actividadCtrl = {}

actividadCtrl.getActividades = async (req, res) =>{
  const actividades = await Actividad.find()
  res.json(actividades)    
}

actividadCtrl.getActividad = async (req, res) =>{
  const actividad = await Actividad.findById(req.params.id)
  res.json(actividad)  
}

actividadCtrl.createActividades = async (req, res) => {
  const actividad = new Actividad({
    descripcion: req.body.descripcion,
    f_registro: req.body.f_registro,
    f_limite: req.body.f_limite,
    responsable: req.body.responsable,
    soporte: req.body.soporte,
    estado: req.body.estado
  })
  await actividad.save()
  res.json({
    'status':'actividad creada'
  }) 
}

actividadCtrl.updateActividades = async (req, res) => {
  //const {id} = req.params
  const actividad = {
    descripcion: req.body.descripcion,
    f_registro: req.body.f_registro,
    f_limite: req.body.f_limite,
    responsable: req.body.responsable,
    soporte: req.body.soporte,
    estado: req.body.estado
  }
  await Actividad.findByIdAndUpdate(req.params.id, {$set: actividad})
  res.json({
    status: 'Actividad actualizada'
  })  
}

actividadCtrl.deleteActividades = async (req, res) =>{
  //const {id} = req.params
  await Actividad.findByIdAndRemove(req.params.id)
  res.json({
    status: 'Actividad eliminada'
  })
}

module.exports = actividadCtrl