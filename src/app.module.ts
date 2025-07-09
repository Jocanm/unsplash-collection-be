import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { CollectionsModule } from './collections/collections.module';

@Module({
  imports: [DatabaseModule, CollectionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
