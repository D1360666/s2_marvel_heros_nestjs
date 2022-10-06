import { Test, TestingModule } from '@nestjs/testing';
import { MarvelHerosService } from '../services/marvel-heros.service';
import { HeroController } from './hero.controller';


describe('AppController', () => {
  let heroController: HeroController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [HeroController],
      providers: [MarvelHerosService],
    }).compile();

    heroController = app.get<HeroController>(HeroController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(heroController.getHello()).toBe('Hello World!');
    });
  });
});
