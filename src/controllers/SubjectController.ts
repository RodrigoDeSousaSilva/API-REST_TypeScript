import { subjectRepository } from "../repositories/subjectRepository";

export class SubjectController {

    async create(req: any, res: any) {
        const { name } = req.body
        if (!name) {
            return res.status(400).json({ message: "O Nome é obrigatorio" });
        }
        try{
            const newSubject = subjectRepository.create({ name })
            await subjectRepository.save(newSubject)
            return res.status(201).json(newSubject)
        }catch (error) {
            console.log(error)
            return res.status(500).json({message: 'internal Server Error'})
        }
    }
}