import {
    Column,
    Entity,
    JoinTable,
    ManyToMany,
    PrimaryGeneratedColumn,
  } from 'typeorm';
import { ComicEntity } from './comic.entity';
  
  
  @Entity({ name: 'character' })
  export class HeroEntity {
    @PrimaryGeneratedColumn()
    heroId: string;
    @Column()
    name: string;
    @Column({ type: 'varchar', length: 255 })
    description: string;
    @Column()
    image: string;
  
    @ManyToMany((type) => ComicEntity, (comic) => comic.characters, {
      cascade: true,
    })
    @JoinTable()
    comics: ComicEntity[];
  }