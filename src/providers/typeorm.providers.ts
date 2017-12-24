import { createConnection } from 'typeorm'
import { Constant } from '../config/constant'

export const typeormProviders = [
  {
    provide: Constant.typeormRepo,
    useFactory: async () => await createConnection({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'nestdemo',
      logging: ["query", "error"],
      logger: "file",
      entities: [
        __dirname + '/../**/*.model{.ts,.js}',
      ],
      synchronize: true,
    }),
  },
];