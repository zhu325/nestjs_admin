import { DataSource } from 'typeorm'

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'localhost',
        port: 3307,
        username: 'root',
        password: 'example',
        database: 'testdb',
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        //同步本地的schema与数据库 -> 初始化的时候去使用
        synchronize: true,
      })

      return dataSource.initialize()
    },
  },
]
