import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import 'dotenv/config';

const databaseOption = {
  host: process.env.TYPEORM_HOST,
  port: +process.env.TYPEORM_PORT,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ['dist/migration/*{.ts,.js}'],
  synchronize: false,
};

export const dataSource = new DataSource({
  type: 'postgres',
  ...databaseOption,
});

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      ...databaseOption,
    }),
  ],
})
export class DatabaseModule {}
