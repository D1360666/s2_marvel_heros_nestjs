import { Module } from "@nestjs/common";
import { HeroController } from "./controller/hero.controller";
import { MarvelHerosService } from "./services/marvel-heros.service";


@Module({
    imports:[],
    controllers:[HeroController],
    providers:[MarvelHerosService],
})

export class HeroModule{}