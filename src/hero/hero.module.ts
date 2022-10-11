//Libraries
import { Module } from "@nestjs/common";
//controller
import { HeroController } from "./controller/hero.controller";
//Services
import { MarvelHerosService } from "./services/marvel-heros.service";
import { HeroSQLService } from "./services/hero-sql-service";
import { HeroNoSQLService } from "./services/hero-nosql-service";
import { HttpModule } from "@nestjs/axios";



@Module({
    imports:[HttpModule],
    controllers:[HeroController],
    providers:[MarvelHerosService, HeroSQLService, HeroNoSQLService],
})

export class HeroModule{}