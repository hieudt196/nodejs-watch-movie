import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'Movie',
  logging: true,
  entities: ['dist/*/*.entity{.ts,.js}'],
  synchronize: false,
});

// AppDataSource.initialize()
//   .then(() => {
//     // here you can start to work with your database
//     console.log('Start connect to database');
//   })
//   .catch((error) => console.log(error));
