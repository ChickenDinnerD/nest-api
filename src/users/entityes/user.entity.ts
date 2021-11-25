import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Role } from "../enums/role.enum";


@Entity({name:"users"})
export class User {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({ length: 16 })
    username: string;

    @Column()
    password: string;

    @Column({ default: 'ADMIN', name: 'role'})
    currentRole: Role;

    @CreateDateColumn({name: 'created_at'})
    createdAt: Date;
};
