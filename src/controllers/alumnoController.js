import { AlumnoModel } from '../models/Alumno.model.js'


// crear alumno
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


// obtener todos los alumnos
export const ctrlGetAllAlumnos = async (req, res) => {
    try {
        const allAlumnos = await AlumnoModel.find()
        res.status(200).json(allAlumnos)
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error al obtener los alumnos' })
    }
}

// obtener un alumno
export const ctrlGetAlumnoById = async (req, res) => {
    const alumnoId = req.params.id

    try {
        const alumno = await AlumnoModel.findById(alumnoId)

        if(!alumno){
            return res.sendStatus(403)
        }

        res.status(200).json(alumno)
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error al obtener el alumno' })
    }
}

// actualizar alumno
export const ctrlUpdateAlumno = async (req, res) => {
    const alumnoId = req.params.id
    const { nombre, edad } = req.body

    try {
        await AlumnoModel.findByIdAndUpdate(alumnoId, { nombre, edad })

        res.status(200).json({message: 'Alumno actualizado'})
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error al actualizar el alumno' })
    }
}

// eliminar alumno
export const ctrlDeleteAlumno = async (req, res) => {
    const alumnoId = req.params.id
    
    try {
        await AlumnoModel.findByIdAndDelete(alumnoId)
        res.sendStatus(202)
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error al eliminar el alumno' })
    }
}









