import { Router } from 'express'

const RootRoutes = Router()

RootRoutes.get('/', (Request, Response) => {
  Response.send('Hello World')
})

export default RootRoutes