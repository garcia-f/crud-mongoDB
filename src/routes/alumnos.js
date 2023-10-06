import { Router } from 'express'
import { 
    ctrlGetAllAlumnos,
    ctrlGetAlumnoById,
    ctrlCreateNewAlumno,
    ctrlDeleteAlumno,
    ctrlUpdateAlumno
 } from '../controllers/alumnoController.js'

const alumnoRouter = Router()

// ver todos los alumnos
alumnoRouter.get('/', ctrlGetAllAlumnos)

// ver un alumno
alumnoRouter.get('/:id', ctrlGetAlumnoById)

// crear un alumno
alumnoRouter.post('/', ctrlCreateNewAlumno)

// actualizar un alumno
alumnoRouter.put('/:id', ctrlUpdateAlumno)

// eliminar un alumno
alumnoRouter.delete('/:id', ctrlDeleteAlumno)

export { alumnoRouter }