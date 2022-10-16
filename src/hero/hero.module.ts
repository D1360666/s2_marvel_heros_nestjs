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
import { Hero, HeroSchema } from "./database/schemas/hero.schema";
import { Comic, ComicSchema } from "./database/schemas/comic.schema";
import { TypeOrmModule } from "@nestjs/typeorm";
import { HeroEntity } from "./database/entities/hero.entity";
import { ComicEntity } from "./database/entities/comic.entity";
import { Utils } from "./tools/utils";



@Module({
    imports:[
        HttpModule,
        MongooseModule.forFeature([
            { name: Hero.name, schema: HeroSchema},
            {name: Comic.name, schema: ComicSchema},
        ]),
        TypeOrmModule.forFeature([HeroEntity, ComicEntity])
    ],

    controllers:[HeroController],
    providers:[MarvelHerosService, HeroSQLService, HeroNoSQLService, Utils],
})

export class HeroModule{}