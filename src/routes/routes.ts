import { RoomController, VideoController } from '../controllers/RoomController'
import { SubjectController } from '../controllers/SubjectController'

const Router = require("express")
 
const routes = Router()

routes.post('/subject', new SubjectController().create)
routes.post('/room', new RoomController().create)
routes.post('/rooom/:idRoom/create', new VideoController().createVideo)

export default routes