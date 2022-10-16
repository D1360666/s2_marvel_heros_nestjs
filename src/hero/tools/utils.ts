import { HeroEntity } from "../database/entities/hero.entity";
import { Hero } from "../database/schemas/hero.schema";
import { HeroDTO } from "../dto/heroDTO";

export class Utils{

    heroToHeroDto(hero): HeroDTO{
        const heroDto = new HeroDTO();
        heroDto.heroId= hero.id;
        heroDto.description = hero.description;
        heroDto.name = hero.name;
        heroDto.thumbnail = hero.thumbnail.path + '.' + hero.thumbnail.extension;
        
        return heroDto;
    }

    heroDtoToHeroEntity(heroDTO: HeroDTO): HeroEntity{
        const hero = new HeroEntity();
        hero.heroId = heroDTO.heroId;
        hero.name = heroDTO.name;
        hero.description = heroDTO.description;
        hero.image = heroDTO.thumbnail

        return hero;
    }
    heroDtoToHeroSchema(heroDto: HeroDTO): Hero{
        const hero = new Hero();
        hero.heroId = heroDto.heroId;
        hero.name = heroDto.name;
        hero.description = heroDto.description;
        hero.thumbnail = heroDto.thumbnail;

        return hero;
    }
}