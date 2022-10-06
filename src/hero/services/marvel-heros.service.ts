import { Injectable } from '@nestjs/common';

@Injectable()
export class MarvelHerosService {
  getHello(): string {
    return 'Hello World!';
  }
}
