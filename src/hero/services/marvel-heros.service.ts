import { HttpService } from '@nestjs/axios';
import { ForbiddenException, Injectable } from '@nestjs/common';
import { IHero } from '../interface/hero.interface';
import { map, catchError } from 'rxjs';

@Injectable()
export class MarvelHerosService {
  constructor(private readonly httpService: HttpService){}
  //getHello(): string {
  //  return 'Hello World!';
  //}

  /*getAllHeros(count, page): Array<object>{
    return [{}];
  }*/
  async getAllHeros(){
    return this.httpService
    .get('https://gateway.marvel.com/v1/public/characters?ts=9&apikey=018e11be788423f319352372c864bef3&hash=99bbbae20064f797bc61f67564cd7b26')
    .pipe(
      map((res) => res.data))
    .pipe(
      catchError(() => {
      throw new ForbiddenException('API not available');
    }),
    );
  }
  
}
