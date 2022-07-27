import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import 'dotenv/config';

export const databaseOption = {
  host: process.env.TYPEORM_HOST,
  port: +process.env.TYPEORM_PORT,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ['dist/migration/*{.ts,.js}'],
  synchronize: false,
};

export const testDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'Movie',
});

export const dataSource = new DataSource({
  type: 'postgres',
  ...databaseOption,
});

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: () => dataSource.initialize(),
  },
];

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      ...databaseOption,
    }),
  ],
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}
