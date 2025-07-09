import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CollectionsModule } from './collections/collections.module';
import { DatabaseModule } from './database/database.module';
import { envSchema } from './schemas/env.schema';
import { ImagesModule } from './images/images.module';

@Module({
  imports: [
    ImagesModule,
    DatabaseModule,
    CollectionsModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
      validationSchema: envSchema,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
