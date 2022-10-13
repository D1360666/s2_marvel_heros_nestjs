import { Controller, Get, Post, Put, Delete, Param, ParseIntPipe } from '@nestjs/common';
import { Body } from '@nestjs/common/decorators';
import { HeroDTO } from '../dto/heroDTO';
import { IHero } from '../interface/hero.interface';
import { HeroNoSQLService } from '../services/hero-nosql-service';
import { HeroSQLService } from '../services/hero-sql-service';
import { MarvelHerosService } from '../services/marvel-heros.service';


@Controller('hero/nosql')
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

  @Post()
  saveHeroNoSQL(@Body() heroDTO: HeroDTO):Promise<IHero>{
    return this.heroNoSQLService.save(heroDTO);
  }
  /*@Post('nosql/:id')
  saveHeroNoSQL(@Param('id') id:string){
    //const hero  = this.marvelHeroService.getAllHeros(id);
    this.heroNoSQLService.save();
  }*/

  /*@Put('nosql/:idHeroeExistente/:idNewHero')
  updateHeroNoSQL(
    @Param('idHeroeExistente') idHeroeExistente:string,
    @Param('idNuevoHeroe') idNuevoHeroe: string){
      this.heroNoSQLService.update(idHeroeExistente, );
    }*/
    @Put(':id')
    updateHeroNoSQL(
      @Param('id')idHero: string, 
      @Body()heroDTO: HeroDTO): Promise<IHero>
    {
      return this.heroNoSQLService.update(idHero, heroDTO);
    }

    @Put('nosql/:id')
    deleteHeroNoSQL(@Param('id')id:string){
      this.heroNoSQLService.delete(id);
    }

  //--> CRUD SQL
  @Post('sql/:id')
  saveHeroSQL(@Param('id') id:string){
    //const hero  = this.marvelHeroService.getAllHeros(id);
    this.heroSQLService.save();
  }

  

}
