import { Router } from 'express'

const SectionsRoutes = Router()

SectionsRoutes.get('/sections', (Request, Response) => {
  Response.send('Hello World')
})

export default SectionsRoutes