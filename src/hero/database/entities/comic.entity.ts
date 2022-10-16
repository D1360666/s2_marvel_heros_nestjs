import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { HeroEntity } from './hero.entity';


@Entity({ name: 'comic' })
export class ComicEntity {
  @PrimaryGeneratedColumn()
  comicId: number;
  @Column()
  title: string;
  @Column({ type: 'varchar', length: 255, nullable: true })
  description: string;
  @Column()
  format: string;

  @ManyToMany((type) => HeroEntity, (character) => character.comics)
  characters: HeroEntity[];
}