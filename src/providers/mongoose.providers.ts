import * as mongoose from 'mongoose';
import { Constant } from '../config/constant'

export const mongooseProviders = [
  {
    provide: Constant.mongooseRepo,
    useFactory: async () => {
      (mongoose as any).Promise = global.Promise;
      return await mongoose.connect('mongodb://localhost/nest', {
        useMongoClient: true,
      });
    },
  },
];