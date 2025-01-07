import { SubjectController } from '../controllers/SubjectController'

const Router = require("express")
 
const routes = Router()

routes.post('/subject', new SubjectController().create)

export default routes