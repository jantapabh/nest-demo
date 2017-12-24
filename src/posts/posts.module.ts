import { Module } from '@nestjs/common';
import { PostsController } from './Posts.controller';
import { PostsService } from './Posts.service';
import { UsersService } from '../users/users.service';
import { PostsProviders } from './posts.providers';
import { UsersProviders } from '../users/users.providers';
import { DatabaseModule } from '../modules/db.module';

@Module({
  imports: [DatabaseModule],
  controllers: [PostsController],
  components: [
    PostsService,
    UsersService,
    ...UsersProviders,
    ...PostsProviders,
  ],
})
export class PostsModule {}