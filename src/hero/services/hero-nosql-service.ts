import { BadRequestException } from "@nestjs/common";
import { Injectable } from "@nestjs/common/decorators";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Comic, ComicDocument } from "../database/schemas/comic.schema";
import { Hero, HeroDocument } from "../database/schemas/hero.schema";
import { HeroDTO } from "../dto/heroDTO";
import { IHero } from "../interface/hero.interface";

@Injectable()
export class HeroNoSQLService {
    constructor(
      @InjectModel(Hero.name)
      private heroModel: Model<HeroDocument>,
      @InjectModel(Comic.name)
      private comicModel: Model<ComicDocument>, 
      ){}

    //Devuelve todos los Heroes
    async getAll():Promise<IHero[]>{
        return await this.heroModel.find();
    }

    //Guarda un Héroe 
    async save(hero: Hero) {    
      const character = await this.heroModel.findOne({
        heroId: hero.heroId,
      });

      if(character){
        throw new BadRequestException('Heroe ya existe');
      }
      const newHero = await this.heroModel.create(hero);
      return newHero.save(); 
    }

    async update(id: string, hero: Hero){
        return await this.heroModel.findByIdAndUpdate(id, hero, {new:true});
    }

    async delete(id: string): Promise<Object>{
      var myfilter = {idHero: id};
        //return await this.heroModel.findByIdAndRemove(id);
        return await this.heroModel.deleteOne(myfilter, function(err, obj){
          if (err) throw err;
          console.log("Document deleted" + obj);
        })
    }

    async saveComicsFromHeroId(comic: Comic){
      const comic1 = await this.comicModel.findOne({
        comicId: comic.comicId,
      });

      if(comic1){
        throw new BadRequestException('Comic ya existe');
      }
      const newComic = await this.comicModel.create(comic);
      return newComic.save(); 
    }
    
}