import { Router } from 'express'

const AuthRoutes = Router()

AuthRoutes.get('/auth', (Request, Response) => {
  Response.send('Hello World')
})

export default AuthRoutes