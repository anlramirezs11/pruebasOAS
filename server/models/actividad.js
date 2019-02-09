const mongoose = require('mongoose')
const { Schema } = mongoose

const ActividadSchema = new Schema({
  descripcion: {type:String, required: true},
  f_registro: {type:String, required:true},
  f_limite: {type:String, required:true},
  responsable: {type:String, required:true},
  soporte: {type:String, required:true},
  estado: {type:String, required:true}
})

module.exports = mongoose.model('Actividad', ActividadSchema)


