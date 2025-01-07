import { videoRepository } from './../repositories/videoRepository';
import { Params } from './../../node_modules/@types/express-serve-static-core/index.d';
import { roomRepository } from "../repositories/roomRepositorie"

export class RoomController {
    async create(req: any, res: any) {
        const { name, description } = req.body
        try {
            const newRoom = roomRepository.create({ name, description })
            await roomRepository.save(newRoom)

            return res.status(201).json(newRoom)
        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: 'internal Server Error' })
        }
    }
    async createVideo(req:any, res:any) {
        const {title, url} = req.body
        const {idRoom} = req.params

        try {
            const room = await roomRepository.findOneBy({id: Number(idRoom) })

            if (!room) {
                res.status(404).json({message: 'Aula não existe'})
            }

            const newVideo = videoRepository.create({
                title,
                url
            })

            await videoRepository.save(newVideo)
            return res.status(201).json(newVideo)
        }catch (error) {
            console.log(error)
            return res.status(500).json({ message: 'internal Server Error' })
        }
    }
}

