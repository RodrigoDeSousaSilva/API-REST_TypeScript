import { videoRepository } from './../repositories/videoRepository';
import { Params } from './../../node_modules/@types/express-serve-static-core/index.d';
import { Request, Response } from "express";
import { roomRepository } from "../repositories/roomRepositorie"

export class RoomController {
    async create(req: Request, res: Response) {
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
}
    export class VideoController {
        async createVideo(req: Request, res: Response) {
            const { title, url } = req.body;
            const { idRoom } = req.params;
    
            try {
                const room = await roomRepository.findOneBy({ id: Number(idRoom) });
    
                if (!room) {
                    return res.status(404).json({ message: "Aula não existe" });
                }
    
                const newVideo = videoRepository.create({
                    title,
                    url,
                    room,
                });
    
                await videoRepository.save(newVideo);
    
                return res.status(201).json(newVideo);
            } catch (error) {
                console.error(error);
                return res.status(500).json({ message: "Internal Server Error" });
            }
        }
    }


