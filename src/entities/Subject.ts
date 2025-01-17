
import { Room } from './Room';
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn} from "typeorm";

@Entity('subjects')
export class Subject {
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: 'text'})
    name: string

    @ManyToMany(() => Room, room => room.Subjects)
    @JoinTable({
        name: 'room_subject',
        joinColumn: {
            name: 'room_id',
            referencedColumnName: 'id'
        },
    inverseJoinColumn: {
        name: 'subject_id',
        referencedColumnName: 'id'
    }
    })
    rooms: Room[]
}