import {
    Column,
    Entity,
    JoinTable,
    ManyToMany,
    PrimaryGeneratedColumn,
  } from 'typeorm';
import { ComicEntity } from './comic.entity';
  
  
  @Entity({ name: 'heros' })
  export class HeroEntity {
    @PrimaryGeneratedColumn()
    heroId: string;
    @Column()
    name: string;
    @Column({ type: 'varchar', length: 1000 })
    description: string;
    @Column()
    image: string;
  
    @ManyToMany((type) => ComicEntity, (comic) => comic.heros, {
      cascade: true,
    })
    @JoinTable()
    comics: ComicEntity[];
  }