import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { HeroEntity } from './hero.entity';


@Entity({ name: 'comics' })
export class ComicEntity {
  @PrimaryGeneratedColumn()
  comicId: number;
  @Column()
  title: string;
  @Column({ type: 'varchar', length: 1000, nullable: true })
  description: string;
  @Column()
  format: string;

  @ManyToMany((type) => HeroEntity, (hero) => hero.comics)
  heros: HeroEntity[];
}