import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import { routes as studentRoutes} from './routes/studentRoute.js'

dotenv.config()

const app = express();

app.use(cors())
app.use(express.json())

app.use('/student/api', studentRoutes)

export function start() {
  app.listen(3000, () => {
    console.log('Listening at http://localhost')
  })
}


