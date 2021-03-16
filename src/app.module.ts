import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {WineModule} from './wine/wines.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [WineModule, MongooseModule.forRoot('mongodb://127.0.0.1:27017/wines')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
