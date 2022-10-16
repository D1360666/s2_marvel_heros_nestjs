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
  //Post para guardar un Hero en Mongo
 @Post('nosql/:id')
 async saveHeroNoSQL(@Param('id')id:number){
  /*const hero = await this.marvelHeroService.getHeroByID(id);
  return this.heroNoSQLService.save(hero);*/
  const heroDto = await this.marvelHeroService.getHeroByID(id);
  console.log("Controller Hero Dto: " + heroDto);
  const heroSch = this.utils.heroDtoToHeroSchema(heroDto);
  console.log("Controller: " + heroSch);
  return this.heroNoSQLService.save(heroSch);
 }

 

}
