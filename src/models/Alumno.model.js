import { model, Schema } from 'mongoose'

const Alumno = new Schema({
    nombre: {
        type: String,
        required: true
    },
    edad: {
        type: Number,
        required: true
    }
}, {
    versionKey: false
})

const AlumnoModel = model('Alumno', Alumno)

export { AlumnoModel }