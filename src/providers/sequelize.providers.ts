import { Sequelize } from 'sequelize-typescript';
import { Constant } from '../config/constant'
import { User } from '../users/model/user_sequelize.model'

export const sequelizeProviders = [
  {
    provide: Constant.sequelizeRepo,
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '',
        database: 'nestdemo',
      });
      sequelize.addModels([User]);
      await sequelize.sync();
      return sequelize;
    },
  },
];