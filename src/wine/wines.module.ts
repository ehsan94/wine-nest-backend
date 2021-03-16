import {
  CacheModule,
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WineSchema } from './schemas/wine.schema';
import { WineController } from './wines.controller';
import { WineService } from './wines.service';
import { AuditMiddleware } from '../middlewares/audit.middleware';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Wine', schema: WineSchema }]),
    CacheModule.register({ ttl: 2, max: 100 }),
  ],
  controllers: [WineController],
  providers: [WineService],
})
export class WineModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuditMiddleware)
      .forRoutes({ path: 'wines/*', method: RequestMethod.DELETE });
  }
}
