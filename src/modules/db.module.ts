import { Module } from '@nestjs/common';
import { sequelizeProviders } from '../providers/sequelize.providers';
import { typeormProviders } from '../providers/typeorm.providers';
import { mongooseProviders } from '../providers/mongoose.providers';

@Module({
  components: [...sequelizeProviders],
  exports: [...sequelizeProviders],
  // OR
  // components: [...typeormProviders],
  // exports: [...typeormProviders],
  // OR
  // components: [...mongooseProviders],
  // exports: [...mongooseProviders],
})
export class DatabaseModule {}