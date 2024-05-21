import { Router } from 'express'

const PagesRoutes = Router()

PagesRoutes.get('/pages', (Request, Response) => {
  Response.send('Hello World')
})

export default PagesRoutes