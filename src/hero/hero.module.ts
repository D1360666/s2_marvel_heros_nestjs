//Libraries
import { Module } from "@nestjs/common";
//controller
import { HeroController } from "./controller/hero.controller";
//Services
import { MarvelHerosService } from "./services/marvel-heros.service";
import { HeroSQLService } from "./services/hero-sql-service";
import { HeroNoSQLService } from "./services/hero-nosql-service";
import { HttpModule } from "@nestjs/axios";
import { MongooseModule } from "@nestjs/mongoose";
import { HeroSchema } from "./database/schemas/hero.schema";



@Module({
    imports:[HttpModule, 
        MongooseModule.forFeature([{ name: 'Hero', schema: HeroSchema}])
    ],
    controllers:[HeroController],
    providers:[MarvelHerosService, HeroSQLService, HeroNoSQLService],
})

export class HeroModule{}