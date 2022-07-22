import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class Base {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;

  @Column({ type: 'boolean', nullable: false, default: false })
  is_delete: boolean;
}

export const DatabaseOption = {
  type: 'postgres' || process.env.TYPEORM_TYPE,
  host: 'localhost' || process.env.TYPEORM_HOST,
  port: 5432 || +process.env.TYPEORM_PORT,
  username: 'postgres' || process.env.TYPEORM_USERNAME,
  password: 'postgres' || process.env.TYPEORM_PASSWORD,
  database: 'Movie' || process.env.TYPEORM_DATABASE,
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: false,
};
export const DatabaseTest = {
  type: process.env.TYPEORM_TYPE,
  host: process.env.TYPEORM_HOST,
  port: +process.env.TYPEORM_PORT,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: false,
};
