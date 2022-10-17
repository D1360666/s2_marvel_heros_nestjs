import { Controller, Get, Post, Put, Delete, Param, ParseIntPipe } from '@nestjs/common';
import { Body } from '@nestjs/common/decorators';
import { HeroDTO } from '../dto/heroDTO';
import { IHero } from '../interface/hero.interface';
import { HeroNoSQLService } from '../services/hero-nosql-service';
import { HeroSQLService } from '../services/hero-sql-service';
import { MarvelHerosService } from '../services/marvel-heros.service';
import { Utils } from '../tools/utils';


@Controller('hero')
export class HeroController {
  constructor(
    private readonly utils: Utils,
    private readonly marvelHeroService: MarvelHerosService,
    private readonly heroNoSQLService: HeroNoSQLService,
    private readonly heroSQLService: HeroSQLService
    ) {}


  //CRUD NO SQL
  @Get()
  async findAll(){
    return await this.marvelHeroService.getAllHeros();
  }

  //CARGA de comics de un héroe y guardo en MongoDB
  @Get('/comics/:id')
  async getComicsByHeroId(@Param('id')id:string){
    return await (await this.marvelHeroService.getComicsByHeroId(id)).forEach(comicDto =>{
      return this.heroNoSQLService.saveComicsFromHeroId(this.utils.comicDtoToComic(comicDto));
    });
  }
  //Post para guardar un Hero en Mongo
 @Post('nosql/:id')
 async saveHeroNoSQL(@Param('id')id:number){
  const heroDto = await this.marvelHeroService.getHeroByID(id);
  
  const heroSch = this.utils.heroDtoToHeroSchema(heroDto);
  
  return this.heroNoSQLService.save(heroSch);
 }

 @Put('nosql/:id')
async updateHeroNoSQL(@Param('id')id:string,
  @Body() heroDto:HeroDTO) {
    return this.heroNoSQLService.update(id, heroDto);
  
}

 @Delete('nosql/:id')
 async deleteHero(@Param('id')id:string){
  return this.heroNoSQLService.delete(id);
 }

 @Post('sql/:id')
 async saveHeroSQL(@Param('id')id:number){
  const hero = this.utils.heroDtoToHeroEntity(
    await this.marvelHeroService.getHeroByID(id),
  );

  const comicsdtos = await this.marvelHeroService.getComicsByHeroId(
    hero.heroId,
  );

  const comicsEntities = comicsdtos.map((comic) =>
    this.utils.comicToComicEntity(comic),
  );

  hero.comics = comicsEntities;

  return this.heroSQLService.save(hero);
 }
}
