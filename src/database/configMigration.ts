import { DatabaseOption } from 'src/shared';
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  ...DatabaseOption,
  type: 'postgres',
  // host: 'localhost' || process.env.TYPEORM_HOST,
  // port: 5432 || +process.env.TYPEORM_PORT,
  // username: 'postgres' || process.env.TYPEORM_USERNAME,
  // password: 'postgres' || process.env.TYPEORM_PASSWORD,
  // database: 'Movie' || process.env.TYPEORM_DATABASE,
  // entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ['dist/migration/*{.ts,.js}'],
  synchronize: false,
});
