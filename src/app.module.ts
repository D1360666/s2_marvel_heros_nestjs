import { Module } from '@nestjs/common';
import { HeroModule } from './hero/hero.module';


@Module({
  imports: [],
  controllers: [],
  providers: [HeroModule],
})
export class AppModule {}
