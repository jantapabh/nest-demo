import { Sequelize } from 'sequelize-typescript';
import { Constant } from '../config/constant'
import { Users } from '../users/model/user_sequelize.model'
import { Posts } from '../posts/model/posts.model'

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
      sequelize.addModels([Users, Posts]);
      await sequelize.sync();
      return sequelize;
    },
  },
];