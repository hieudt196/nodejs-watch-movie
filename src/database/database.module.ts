import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

export const databaseOption = {
  type: 'postgres',
  host: 'localhost' || process.env.TYPEORM_HOST,
  port: 5432 || +process.env.TYPEORM_PORT,
  username: 'postgres' || process.env.TYPEORM_USERNAME,
  password: 'postgres' || process.env.TYPEORM_PASSWORD,
  database: 'Movie' || process.env.TYPEORM_DATABASE,
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ['dist/migration/*{.ts,.js}'],
  synchronize: false,
};

export const databaseTest = {
  type: process.env.TYPEORM_TYPE,
  host: process.env.TYPEORM_HOST,
  port: +process.env.TYPEORM_PORT,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ['dist/migration/*{.ts,.js}'],
  synchronize: false,
};

const dataSource = new DataSource({
  ...databaseOption,
  type: 'postgres',
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
      ...databaseOption,
      type: 'postgres',
    }),
  ],
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}
