import { Controller, Get, Post, Put, Delete, Param, ParseIntPipe } from '@nestjs/common';
import { HeroNoSQLService } from '../services/hero-nosql-service';
import { HeroSQLService } from '../services/hero-sql-service';
import { MarvelHerosService } from '../services/marvel-heros.service';


@Controller('hero')
export class HeroController {
  constructor(
    private readonly marvelHeroService: MarvelHerosService,
    private readonly heroNoSQLService: HeroNoSQLService,
    private readonly heroSQLService: HeroSQLService
    ) {}


    //--> CRUD NO SQL
  /*@Get(':count/:page')
  findAll(@Param('count', ParseIntPipe) count: number,
          @Param('page', ParseIntPipe) page:number
  ):Array<object>{
    return this.marvelHeroService.getAllHeros(count, page);
  }*/

  @Get()
  findAll(){
    return this.marvelHeroService.getAllHeros();
  }

  @Post('nosql/:id')
  saveHeroNoSQL(@Param('id') id:string){
    //const hero  = this.marvelHeroService.getAllHeros(id);
    this.heroNoSQLService.save();
  }

  @Put('nosql/:idHeroeExistente/:idNewHero')
  updateHerpNoSQL(
    @Param('idHeroeExistente') idHeroeExistente:string,
    @Param('idNuevoHeroe') idNuevoHeroe: string){
      this.heroNoSQLService.update();
    }

    @Put('nosql/:id')
    deleteHeroNoSQL(@Param('id')id:string){
      this.heroNoSQLService.dalete();
    }

  //--> CRUD SQL
  @Post('sql/:id')
  saveHeroSQL(@Param('id') id:string){
    //const hero  = this.marvelHeroService.getAllHeros(id);
    this.heroSQLService.save();
  }

  

}
