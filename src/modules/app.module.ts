import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DatabaseModule } from './db.module'

@Module({
  modules: [DatabaseModule],
  controllers: [AppController],
  components: [],
})
export class ApplicationModule {}
