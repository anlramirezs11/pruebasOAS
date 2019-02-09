const mongoose = require('mongoose')
const { Schema } = mongoose

const ResponsableSchema = new Schema({
  nombre: {type:String, required: true},
  correo: {type:String, required:true},
  telefono: {type:Number, required:true}
})

module.exports = mongoose.model('Responsable', ResponsableSchema)



