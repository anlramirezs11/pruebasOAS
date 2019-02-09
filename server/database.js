const mongoose = require('mongoose')

const URI = 'mongodb://db:27017/actividades'

mongoose.connect(URI)
  .then(db => console.log('DB is conected'))
  .catch(err => console.log(err))

module.exports = mongoose