import { ComicEntity } from "../database/entities/comic.entity";
import { HeroEntity } from "../database/entities/hero.entity";
import { Comic } from "../database/schemas/comic.schema";
import { Hero } from "../database/schemas/hero.schema";
import ComicDTO from "../dto/comicDTO";
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

    comicToComicDto(comic):ComicDTO{
        const comicDto = new ComicDTO;
        comicDto.comicId = comic.id;
        comicDto.description = comic.description;
        comicDto.title = comic.title;
        comicDto.format = comic.format;

        return comicDto;
    }
    comicDtoToComic(comicDto):Comic{
        const comic = new Comic;
        comic.comicId = comicDto.comicId;
        comic.description = comicDto.description;
        comic.format = comicDto.format;
        comic.title = comicDto.title;

        return comic;
    }

    comicToComicEntity(comic): ComicEntity{
        const comicEntity = new ComicEntity();
        comicEntity.comicId = comic.comicId;
        comicEntity.title = comic.title;
        comicEntity.format = comic.format;
        comicEntity.description = comic.description;

        return comicEntity;
    }
}