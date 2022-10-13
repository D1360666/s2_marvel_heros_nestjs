import { Injectable } from "@nestjs/common/decorators";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { IHero } from "../interface/hero.interface";

@Injectable()
export class HeroNoSQLService {
    constructor(@InjectModel('Hero')
    private readonly heroModel: Model<IHero>){}

    async getAll():Promise<IHero[]>{
        return await this.heroModel.find();
    }

    async save(hero: IHero):Promise<IHero>{
        const newHero = new this.heroModel(hero);
        return await newHero.save();
        
    }

    async update(id: string, hero: IHero): Promise<IHero>{
        return await this.heroModel.findByIdAndUpdate(id, hero, {new:true});
    }

    async delete(id: string): Promise<IHero>{
        return await this.heroModel.findByIdAndRemove(id);
    }

    
}