import { Controller, Get } from '@nestjs/common';
import { MarvelHerosService } from '../services/marvel-heros.service';


@Controller()
export class HeroController {
  constructor(private readonly marvelHeroService: MarvelHerosService) {}

  @Get()
  getHello(): string {
    return this.marvelHeroService.getHello();
  }
}
