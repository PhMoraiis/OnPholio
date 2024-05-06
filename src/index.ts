import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import Routes from './routes'

const startServer = async () => {
  const app = express()
  
  app.use(cors())
  app.use(express.json())
  app.use(Routes)
  
  app.listen(process.env.PORT ? Number (process.env.PORT): 3000, () => {
    console.log(`HTTP Server is running on http://localhost:${process.env.PORT ? Number (process.env.PORT): 3000}`)
  })
}

startServer()