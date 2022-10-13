import { HttpService } from '@nestjs/axios';
import { ForbiddenException, Injectable } from '@nestjs/common';
import { map, catchError } from 'rxjs';
import { defaultThrottleConfig } from 'rxjs/internal/operators/throttle';
import { HeroDTO } from '../dto/heroDTO';

@Injectable()
export class MarvelHerosService {
  constructor(private readonly httpService: HttpService
){}

  //https://gateway.marvel.com/v1/public/characters?ts=9&apikey=018e11be788423f319352372c864bef3&hash=99bbbae20064f797bc61f67564cd7b26
  

  async getAllHeros(){
    const uri = `https://gateway.marvel.com/v1/public/characters?ts=${process.env.TS}&apikey=${process.env.PUBLIC_KEY}&hash=${process.env.HASH_CODE}`;
    //EJ CON AXIOS
    const DtoList=[];
    return this.httpService
    .get(uri)
    .pipe(
      map((res) => {
      
        res.data.data.results.forEach(Hero)=>{
          const newHeroDTO = new HeroDTO();
          newHeroDTO.idCharacter= hero1.id;
          newHeroDTO.description = hero1.description;
          newHeroDTO.name = hero1.name;
          newHeroDTO.thumbnail = hero1.thumbnail.path + '.' + hero1.thumbnail.extension
          
          DtoList.push(newHeroDTO);
        }
        return DtoList;
      }))
    .pipe(
      catchError(() => {
      throw new ForbiddenException('API not available');
    }),
    );
  }

  async saveHeros(){
    const uri = `https://gateway.marvel.com/v1/public/characters?ts=${process.env.TS}&apikey=${process.env.PUBLIC_KEY}&hash=${process.env.HASH_CODE}`;
    //EJ CON AXIOS
    return this.httpService
    .get(uri)
    .pipe(
      map((res) => res.data))
    .pipe(
      catchError(() => {
      throw new ForbiddenException('API not available');
    }),
    ) 
  }
}
