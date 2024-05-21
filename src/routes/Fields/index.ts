import { Router } from 'express'

const FieldsRoutes = Router()

FieldsRoutes.get('/fields', (Request, Response) => {
  Response.send('Hello World')
})

export default FieldsRoutes