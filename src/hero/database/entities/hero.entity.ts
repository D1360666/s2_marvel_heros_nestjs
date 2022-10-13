import {Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable} from 'typeorm';
import { Comic } from './comic.entity';
@Entity()
export class Hero{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    idHero:string;

    @Column()
    name:string;
 
    @Column({nullable:true}) 
    description: string;

    @Column()
    path:string;

    @Column()
    extension:string;

    @ManyToMany(()=>Comic,(comic)=> comic.heros)
    @JoinTable({name:'hero_comic'})
    comics: Comic[];
}