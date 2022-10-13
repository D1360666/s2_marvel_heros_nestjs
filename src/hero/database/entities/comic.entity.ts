import {Entity, Column, PrimaryGeneratedColumn, ManyToMany} from 'typeorm';
import { Hero } from './hero.entity';

@Entity({name:'comic'})
export class Comic{
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column()
    idComic:number;

    @Column()
    name:string

    @Column()
    issueNumber:number;

    @ManyToMany(() => Hero, (hero)=> hero.comics)
    heros: Hero[];
}