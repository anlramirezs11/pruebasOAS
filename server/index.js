const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()

const {mongoose} = require('./database')

//Opciones
app.set('port', process.env.PORT || 3000)

//Middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(cors({origin:'http://localhost:4200'}))

//Routes
app.use('/api/actividades', require('./routes/actividades.routes'))
app.use('/api/responsables', require('./routes/responsables.routes'))



//Starting the server
app.listen(app.get('port'), () =>{
  console.log('Server on port ', app.get('port'));
})