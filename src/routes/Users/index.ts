import { Router } from 'express'

const UsersRoutes = Router()

UsersRoutes.get('/users', (Request, Response) => {
  Response.send('Hello World')
})

export default UsersRoutes