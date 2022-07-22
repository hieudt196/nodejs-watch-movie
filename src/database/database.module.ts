import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseOption } from 'src/shared';
import { DataSource } from 'typeorm';

const database = new DataSource({
  ...DatabaseOption,
  type: 'postgres',
});

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: () => database.initialize(),
  },
];

@Module({
  imports: [TypeOrmModule.forRoot({ ...DatabaseOption, type: 'postgres' })],
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}
