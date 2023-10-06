import { AlumnoModel } from '../models/Alumno.model.js'

export const ctrlCreateNewAlumno = async (req, res) => {
    const { nombre, edad } = req.body

    try {
        const newAlumno = new AlumnoModel({ nombre, edad })

        await newAlumno.save()

        res.status(201).json(newAlumno)
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error al crear el alumno' })
    }
}

export const ctrlGetAllAlumnos = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
}