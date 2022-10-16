import { BadRequestException } from "@nestjs/common";
import { Injectable } from "@nestjs/common/decorators";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Hero, HeroDocument } from "../database/schemas/hero.schema";
import { HeroDTO } from "../dto/heroDTO";
import { IHero } from "../interface/hero.interface";

@Injectable()
export class HeroNoSQLService {
    constructor(@InjectModel('Hero')
    private readonly heroModel: Model<IHero>){}

    async getAll():Promise<IHero[]>{
        return await this.heroModel.find();
    }

  /*  async save(id:number, hero: IHero):Promise<IHero>{
        const newHero = new this.heroModel(hero, id);
        return await newHero.save();
        
    }*/
    async save(hero: Hero) {
      //console.log(idHero);
      console.log('hero llega: ' + hero.heroId);
      const character = await this.heroModel.findOne({
        heroId: hero.heroId,
      });

      console.log('hero devuelve: ' + character);
      if(character){
        throw new BadRequestException('Usuario ya existe');
      }
      const newHero = await this.heroModel.create(hero);
      return newHero.save();
     
      }

    async update(id: string, hero: Hero){
        return await this.heroModel.findByIdAndUpdate(id, hero, {new:true});
    }

    async delete(id: string): Promise<IHero>{
        return await this.heroModel.findByIdAndRemove(id);
    }

    
}