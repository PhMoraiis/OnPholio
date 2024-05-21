import { Router } from 'express'

const TenantsRoutes = Router()

TenantsRoutes.get('/tenants', (Request, Response) => {
  Response.send('Hello World')
})

export default TenantsRoutes