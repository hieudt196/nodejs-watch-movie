import { DataSource } from 'typeorm';
import { databaseOption } from './database.module';

export const AppDataSource = new DataSource({
  type: 'postgres',
  ...databaseOption,
});
