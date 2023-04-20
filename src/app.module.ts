import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TweetsService } from './tweets/tweets.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, TweetsService],
})
export class AppModule {}
