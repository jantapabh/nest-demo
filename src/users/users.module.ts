import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UsersProviders } from './users.providers';
import { DatabaseModule } from '../modules/db.module';

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController],
  components: [
    UsersService,
    ...UsersProviders,
  ],
  exports: [UsersService]
})
export class UsersModule {}