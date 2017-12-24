import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 255 })
    name: string;

    @Column({ length: 255})
    email: string;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP", select: false })
    createdAt: Date

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP", select: false })
    updatedAt: Date

}