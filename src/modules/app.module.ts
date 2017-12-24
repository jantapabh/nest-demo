import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DatabaseModule } from './db.module'
import { PostsModule } from '../posts/posts.module'
import { UsersModule } from '../users/users.module'

@Module({
  modules: [DatabaseModule, PostsModule, UsersModule],
  controllers: [AppController],
  components: [],
})
export class ApplicationModule {}
