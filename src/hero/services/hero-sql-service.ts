import { NotFoundException } from "@nestjs/common";
import { Injectable } from "@nestjs/common/decorators";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { HeroEntity } from "../database/entities/hero.entity";

@Injectable()
export class HeroSQLService {
    constructor(
        @InjectRepository(HeroEntity)
        private heroRepository: Repository<HeroEntity>,
    ){}

    async getHeros(){
        const list = await this.heroRepository.find();
        if(!list.length){
            throw new NotFoundException({message: 'Heros not foudn'});
        }
        return list;
    }

    save(hero: HeroEntity){
        return this.heroRepository.manager.save(hero);
    }

    update(){
        throw new Error('no está implementado')
    }

    dalete(){
        throw new Error('no está implementado')
    }

    
}