import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity('Hero')
export class Hero{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    idCharacter:string;

    @Column()
    name:string;
 
    @Column() 
    description: string;

    @Column()
    thumbnail:string;
}