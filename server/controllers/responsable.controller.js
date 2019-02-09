const Responsable = require('../models/responsable')
const responsableCtrl = {}

responsableCtrl.getResponsables = async(req, res) =>{
  const responsables = await Responsable.find()
  res.json(responsables) 
}

responsableCtrl.getResponsable = async (req, res) =>{
  const responsable = await Responsable.findById(req.params.id)
  res.json(responsable) 
}

responsableCtrl.createResponsables = async (req, res) =>{
  const responsable = new Responsable({
    nombre: req.body.nombre,
    correo: req.body.correo,
    telefono: req.body.telefono
  })
  await responsable.save()
  res.json({
    'status':'Responsable creado'
  }) 
}

responsableCtrl.updateResponsables = async (req, res) =>{
  //const {id} = req.params
  const responsable = {
    nombre: req.body.nombre,
    correo: req.body.correo,
    telefono: req.body.telefono
  }
  await Responsable.findByIdAndUpdate(req.params.id, {$set: responsable})
  res.json({
    status: 'Responsable actualizado'
  })  
}

responsableCtrl.deleteResponsables = async (req, res) =>{
  //const {id} = req.params
  await Responsable.findByIdAndRemove(req.params.id)
  res.json({
    status: 'Responsable eliminado'
  })
}

module.exports = responsableCtrl