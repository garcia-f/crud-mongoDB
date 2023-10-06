import express from 'express';
import { connectToMongo } from './database.js' // requiero la conexion a la base de datos
import 'dotenv/config'
import { alumnoRouter } from './src/routes/alumnos.js'

const app = express()

app.set('view engine', 'ejs')  // setear el motor de plantillas, el motor de plantillas va a ser ejs

// para capturar los datos de los inputs
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(express.static('public')) // setear la carpeta public para los archivos estaticos


// rutas
app.use('/', alumnoRouter)


// ruta de prueba
app.get('/', (req, res) => {
    res.send('Hola Mundo')
})


app.listen(process.env.PORT, () => {
    connectToMongo()
    console.log('server on port', process.env.PORT)
})


