import { Router } from 'express'
import { addStudent, updateStudent, deleteStudent } from '../controllers/studentController'

export const routes = new Router()

routes.post('/add', addStudent)
routes.patch('/update', updateStudent)
routes.delete('/delete', deleteStudent)