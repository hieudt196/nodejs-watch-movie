import { DataSource } from 'typeorm';
import { databaseOption } from './database.module';

export const AppDataSource = new DataSource({
  ...databaseOption,
  type: 'postgres',
});
