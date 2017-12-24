import { Users } from './model/user_sequelize.model';
import { Constant } from '../config/constant';

export const UsersProviders = [
  {
    provide: Constant.userRepo,
    useValue: Users,
  },
];