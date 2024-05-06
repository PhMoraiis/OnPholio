import { Router } from 'express'

const Routes = Router()

Routes.get('/', (Request, Response) => {
  Response.send('Hello World')
})

export default Routes