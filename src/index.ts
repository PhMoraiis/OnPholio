// Desc: This is the main file that will start the server and listen to the port
import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import RootRoutes from './RootRoutes'
import AuthRoutes from './routes/Auth'
import UsersRoutes from './routes/Users'
import TenantsRoutes from './routes/Tenants'
import PagesRoutes from './routes/Pages'
import SectionsRoutes from './routes/Sections'
import FieldsRoutes from './routes/Fields'

const startServer = async () => {
  const app = express()
  
  app.use(cors({
    origin: process.env.CORS_ORIGIN ? process.env.CORS_ORIGIN : 'http://localhost:3000',
    credentials: true
  }))
  app.use(cookieParser())
  app.use(express.json())

  app.use(RootRoutes)
  app.use(AuthRoutes)
  app.use(UsersRoutes)
  app.use(TenantsRoutes)
  app.use(PagesRoutes)
  app.use(SectionsRoutes)
  app.use(FieldsRoutes)

  app.listen(process.env.PORT ? Number (process.env.PORT): 3000, () => {
    console.log(`HTTP Server is running on http://localhost:${process.env.PORT ? Number (process.env.PORT): 3000}`)
  })
}

startServer()