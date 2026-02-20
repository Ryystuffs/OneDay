import { Router } from 'express'
import { addStudent, updateStudent, deleteStudent } from '../controllers/studentController.js'

export const routes = new Router()

routes.post('/add', addStudent)
routes.patch('/update/:id', updateStudent)
routes.delete('/delete/:id', deleteStudent)